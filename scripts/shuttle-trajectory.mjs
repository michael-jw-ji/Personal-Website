/**
 * Integrates a real shuttlecock trajectory and prints it as an SVG path.
 *
 * A shuttlecock is the highest-drag projectile in sport. Its flight is not a
 * parabola and cannot be faked with a quadratic bezier: drag scales with v^2,
 * so the horizontal component decays almost exponentially while the vertical
 * component settles to terminal velocity and falls at a near-constant rate.
 * That asymmetry -- long climb, near-vertical drop -- is the entire visual
 * signature, and it only appears if the equations are actually solved.
 *
 * Model: a = -g*j - (k/m)*|v|*v, integrated with RK4.
 *
 * Constants are the measured ones for a feathered competition shuttle:
 *   mass               5.0 g        (BWF legal range is 4.74-5.50 g)
 *   terminal velocity  6.8 m/s      (measured in still air)
 *   => k = m*g / vt^2, so k/m = g / vt^2
 *
 * Run: node scripts/shuttle-trajectory.mjs
 */

const G = 9.81;
const MASS_KG = 0.005;
const TERMINAL_MS = 6.8;
/** Drag per unit mass. Falls straight out of terminal velocity. */
const K_OVER_M = G / (TERMINAL_MS * TERMINAL_MS);

/** A high clear: hit hard and high from the back of the court. */
const LAUNCH_SPEED_MS = 42;
const LAUNCH_DEG = 52;

const accel = ([, , vx, vy]) => {
  const speed = Math.hypot(vx, vy);
  return [vx, vy, -K_OVER_M * speed * vx, -G - K_OVER_M * speed * vy];
};

const step = (s, dt) => {
  const add = (a, b, f) => a.map((v, i) => v + b[i] * f);
  const k1 = accel(s);
  const k2 = accel(add(s, k1, dt / 2));
  const k3 = accel(add(s, k2, dt / 2));
  const k4 = accel(add(s, k3, dt));
  return s.map(
    (v, i) => v + ((k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]) * dt) / 6,
  );
};

const rad = (LAUNCH_DEG * Math.PI) / 180;
let state = [
  0,
  0,
  LAUNCH_SPEED_MS * Math.cos(rad),
  LAUNCH_SPEED_MS * Math.sin(rad),
];

const dt = 0.002;
const points = [[0, 0, 0]];
let t = 0;
while (state[1] >= 0 && t < 12) {
  state = step(state, dt);
  t += dt;
  points.push([state[0], state[1], t]);
}

const maxX = Math.max(...points.map((p) => p[0]));
const maxY = Math.max(...points.map((p) => p[1]));

/* Resample to an even arc length so the drawn line has no dense cluster at
   the apex, then map into a 1000x420 viewBox with y flipped for SVG. */
const VB_W = 1000;
const VB_H = 420;
const SAMPLES = 64;

const cum = [0];
for (let i = 1; i < points.length; i++) {
  cum.push(
    cum[i - 1] +
      Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]),
  );
}
const total = cum[cum.length - 1];

const resampled = [];
for (let s = 0; s <= SAMPLES; s++) {
  const target = (total * s) / SAMPLES;
  let i = cum.findIndex((c) => c >= target);
  if (i < 1) i = 1;
  const span = cum[i] - cum[i - 1] || 1;
  const f = (target - cum[i - 1]) / span;
  const x = points[i - 1][0] + (points[i][0] - points[i - 1][0]) * f;
  const y = points[i - 1][1] + (points[i][1] - points[i - 1][1]) * f;
  resampled.push([
    +((x / maxX) * VB_W).toFixed(2),
    +(VB_H - (y / maxY) * VB_H).toFixed(2),
  ]);
}

const d = resampled
  .map(([x, y], i) => (i === 0 ? `M${x} ${y}` : `L${x} ${y}`))
  .join(" ");

/* ---------------------------------------------------------------------------
   Motion derived from the same solution.

   The hero's entrance is the page's only animation, so it is the one authored
   moment the craft floor allows, and its timing should come from the flight
   rather than from a stock curve.

   STAGGER: element k enters at the moment the shuttle reached k/(n-1) of its
   arc. Because drag front-loads the flight, those moments are close together
   at launch and spread out toward the apex, so the cascade decelerates the
   way the shuttle does.

   EASE: a cubic-bezier fitted by search to normalised horizontal progress
   against normalised time. Under v^2 drag that curve is close to 1 - e^(-kt),
   which is why the fit lands far out on the ease-out family. This is the
   number a hand-picked bezier was standing in for.
   --------------------------------------------------------------------------- */

const STAGGER_STEPS = 5;

const timeAtArc = (frac) => {
  const target = total * frac;
  let i = cum.findIndex((c) => c >= target);
  if (i < 1) i = 1;
  const span = cum[i] - cum[i - 1] || 1;
  const f = (target - cum[i - 1]) / span;
  return points[i - 1][2] + (points[i][2] - points[i - 1][2]) * f;
};

const stagger = Array.from({ length: STAGGER_STEPS }, (_, k) =>
  +(timeAtArc(k / (STAGGER_STEPS - 1)) / t).toFixed(4),
);

/* Normalised horizontal progress sampled on an even time grid. */
const FIT_N = 40;
const samples = Array.from({ length: FIT_N + 1 }, (_, i) => {
  const tt = (t * i) / FIT_N;
  let j = points.findIndex((p) => p[2] >= tt);
  if (j < 1) j = 1;
  const span = points[j][2] - points[j - 1][2] || 1;
  const f = (tt - points[j - 1][2]) / span;
  const x = points[j - 1][0] + (points[j][0] - points[j - 1][0]) * f;
  return [i / FIT_N, x / maxX];
});

const bezY = (x1, y1, x2, y2, x) => {
  // Solve the bezier's x for the parameter, then read its y.
  let lo = 0, hi = 1, u = x;
  for (let i = 0; i < 40; i++) {
    u = (lo + hi) / 2;
    const bx =
      3 * (1 - u) * (1 - u) * u * x1 + 3 * (1 - u) * u * u * x2 + u * u * u;
    if (bx < x) lo = u;
    else hi = u;
  }
  return 3 * (1 - u) * (1 - u) * u * y1 + 3 * (1 - u) * u * u * y2 + u * u * u;
};

const err = (p) =>
  samples.reduce((a, [x, y]) => a + (bezY(...p, x) - y) ** 2, 0);

let best = [0.2, 0.8, 0.3, 1];
let searchStep = 0.5;
for (let pass = 0; pass < 7; pass++) {
  let improved = true;
  while (improved) {
    improved = false;
    for (let d = 0; d < 4; d++) {
      for (const dir of [-1, 1]) {
        const cand = best.slice();
        cand[d] = Math.min(1, Math.max(0, cand[d] + dir * searchStep));
        if (err(cand) < err(best)) {
          best = cand;
          improved = true;
        }
      }
    }
  }
  searchStep /= 2;
}
const ease = best.map((v) => +v.toFixed(3));
const fitErr = Math.sqrt(err(best) / samples.length);

const apex = points.reduce((a, b) => (b[1] > a[1] ? b : a));
console.log(
  JSON.stringify(
    {
      viewBox: `0 0 ${VB_W} ${VB_H}`,
      d,
      facts: {
        launchSpeedKmh: +(LAUNCH_SPEED_MS * 3.6).toFixed(0),
        launchDeg: LAUNCH_DEG,
        rangeM: +maxX.toFixed(2),
        apexM: +maxY.toFixed(2),
        apexAtM: +apex[0].toFixed(2),
        hangTimeS: +t.toFixed(2),
        terminalMs: TERMINAL_MS,
        massG: MASS_KG * 1000,
        /* How far along the range the apex sits. A parabola gives 0.50; the
           drag makes it land past the middle, and that number is the proof
           the curve could not have been drawn by hand. */
        apexFraction: +(apex[0] / maxX).toFixed(3),
      },
      motion: {
        /* Fractions of the entrance window, one per hero element. */
        stagger,
        /* cubic-bezier control points fitted to horizontal progress. */
        ease,
        fitRms: +fitErr.toFixed(5),
      },
    },
    null,
    2,
  ),
);
