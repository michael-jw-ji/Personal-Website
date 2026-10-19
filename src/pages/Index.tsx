import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SHUTTLE_MOTION } from "@/lib/shuttle";
import { experiences } from "@/data/experiences";
import { PUBLICATIONS } from "@/data/publications";
import { GOLD_COUNT } from "@/data/badminton";
import headshot from "@/assets/headshot.jpg";
import { useSite } from "@/components/flight/site";

/* The headshot is the LCP candidate, so it asks for priority explicitly.
   Spelled lowercase and spread rather than written as the `fetchPriority`
   attribute @types/react declares: react-dom 18.3.1 carries no
   `fetchpriority` entry in `possibleStandardNames`, so the camelCase form
   takes the unknown-prop branch and React logs a warning telling you to use
   lowercase. The types are ahead of this runtime, and the runtime decides
   what reaches the DOM. Spreading skips JSX excess-property checking, so the
   lowercase name survives both. Revisit on React 19, which knows the prop. */
const FETCH_PRIORITY_HIGH = { fetchpriority: "high" } as const;

/* The entrance window. Its shape is the flight's (see SHUTTLE_MOTION); only
   its length is a UI choice, because a literal 2.22s hang time would be
   unusable as an interface. */
const CASCADE_MS = 420;
const enterAt = (i: number) =>
  ({
    "--in-delay": `${Math.round(SHUTTLE_MOTION.stagger[i] * CASCADE_MS)}ms`,
  }) as React.CSSProperties;

/** Draws once, when the plot is actually on screen. */
function useDrawnOnView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return { ref, drawn };
}

/* The canonical array is chronological, so the current role is the last. */
const current = experiences[experiences.length - 1];

/* The two doors off the landing page. Each carries its strongest facts on its
   face, so the overview stays scannable without a click and the routes are
   only for depth. */
const DOORS = [
  {
    to: "/career",
    title: "Career",
    blurb: "Internships, projects and published research.",
    facts: [
      ["Now", `${current.role}, ${current.company}`],
      ["Roles", `${experiences.length} internships`],
      ["Research", `${PUBLICATIONS.length} NeurIPS 2026 workshop papers`],
    ],
  },
  {
    to: "/extras",
    title: "Extras",
    blurb: "National-level badminton, and what I do outside of work.",
    facts: [
      ["Team", "Junior National Team, Canada"],
      ["World", "BWF World Junior Championships"],
      ["Titles", `${GOLD_COUNT}x National Circuit Champion`],
    ],
  },
] as const;

const Index = () => {
  const { ref, drawn } = useDrawnOnView<HTMLDivElement>();
  const { to, variant } = useSite();

  return (
    <div data-drawn={drawn}>
      {/* ── First viewport ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[86rem] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <div
          ref={ref}
          className="grid items-end gap-x-12 gap-y-9 md:grid-cols-[minmax(0,19rem)_1fr] lg:grid-cols-[minmax(0,22rem)_1fr]"
        >
          <figure className="annot-in min-w-0" style={enterAt(0)}>
            <img
              src={headshot}
              alt="Michael Ji"
              width={880}
              height={880}
              {...FETCH_PRIORITY_HIGH}
              decoding="sync"
              className="portrait w-44 max-w-full border border-[hsl(var(--rule-strong))] object-cover sm:w-56 md:w-full"
            />
            {variant === "mono" && (
              <figcaption className="annot mt-3 flex justify-between gap-4">
                <span>Fig. 01</span>
                <span>Michael Ji, Waterloo ON</span>
              </figcaption>
            )}
          </figure>

          <div className="min-w-0">
            <h1
              className="annot-in text-[clamp(2.6rem,7.5vw,5.25rem)] font-semibold leading-[0.9] tracking-[-0.025em] sm:tracking-[-0.035em] lg:tracking-[-0.045em]"
              style={enterAt(1)}
            >
              Michael&nbsp;Ji
            </h1>

            <p
              className="annot-in mt-5 max-w-[58ch] text-lg leading-[1.5] text-[hsl(var(--line-dim))] sm:text-xl sm:leading-[1.45] sm:tracking-[-0.011em]"
              style={enterAt(2)}
            >
              Software Engineer/Badminton Player
            </p>

            {/* Label, value, source. Three columns because that is what an
                annotated reading is: the axis names it, the value states it,
                and the source says who measured it. It answers where he is,
                what he is studying and what else he does before a visitor has
                scrolled or clicked anything, and puts the sport third. */}
            <dl className="annot-in mt-9 max-w-[56ch]" style={enterAt(3)}>
              <div className="rule-h" />
              {[
                ["Now", "Software Engineer Intern", "Communitech"],
                ["Studying", "Computing and Financial Management", "University of Waterloo"],
                ["Competing", "National-Level Competitor", "Badminton Canada"],
              ].map(([k, v, src]) => (
                <div
                  key={k}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-[hsl(var(--rule))] py-3"
                >
                  <dt className="annot flex w-24 shrink-0 items-baseline gap-2">
                    <span
                      className="datum shrink-0 translate-y-[1px]"
                      aria-hidden
                    />
                    {k}
                  </dt>
                  <dd className="min-w-0 flex-1 text-[0.97rem] text-[hsl(var(--line))]">
                    {v}
                  </dd>
                  <dd className="num shrink-0 text-xs text-[hsl(var(--line-faint))]">
                    {src}
                  </dd>
                </div>
              ))}
            </dl>

            <div
              className="annot-in mt-8 flex flex-wrap items-center gap-x-3 gap-y-3"
              style={enterAt(4)}
            >
              <a
                href="/Resume%20-%20Michael%20Ji.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="num border border-[hsl(var(--plot))] bg-[hsl(var(--plot))] px-5 py-2.5 text-sm font-medium text-[hsl(var(--ink))] transition-colors hover:bg-[hsl(var(--plot-soft))]"
              >
                Resume ↗
              </a>
              <a
                href="mailto:michael.jw.ji@gmail.com"
                className="num border border-[hsl(var(--rule-strong))] px-5 py-2.5 text-sm transition-colors hover:border-[hsl(var(--line))]"
              >
                Email
              </a>
              <a
                href="https://github.com/michael-jw-ji"
                target="_blank"
                rel="noopener noreferrer"
                className="num border border-[hsl(var(--rule-strong))] px-5 py-2.5 text-sm transition-colors hover:border-[hsl(var(--line))]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── The two doors ──────────────────────────────────────────────── */}
      <section className="border-t border-[hsl(var(--rule))]">
        <div className="mx-auto grid max-w-[86rem] gap-px bg-[hsl(var(--rule))] md:grid-cols-2">
          {DOORS.map((door) => (
            <Link
              key={door.to}
              to={to(door.to)}
              className="group block bg-[hsl(var(--ink))] px-5 py-12 transition-colors hover:bg-[hsl(var(--ink-raised))] sm:px-8 sm:py-14"
            >
              <div className="flex items-baseline justify-between gap-6">
                <h2 className="tick text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-none tracking-[-0.035em] text-[hsl(var(--line))] before:mr-3 before:inline-block before:h-[1cap] before:w-[3px] before:bg-[hsl(var(--plot))] before:align-baseline before:content-['']">
                  {door.title}
                </h2>
                <span
                  className="num text-lg text-[hsl(var(--line-faint))] transition-[color,transform] duration-200 ease-out group-hover:translate-x-1 group-hover:text-[hsl(var(--plot))] motion-reduce:transition-none"
                  aria-hidden
                >
                  →
                </span>
              </div>
              <p className="mt-4 max-w-[46ch] text-[0.97rem] leading-relaxed text-[hsl(var(--line-dim))]">
                {door.blurb}
              </p>
              <dl className="mt-8">
                {door.facts.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline gap-4 border-t border-[hsl(var(--rule))] py-3"
                  >
                    <dt className="annot w-20 shrink-0">{k}</dt>
                    <dd className="min-w-0 text-sm text-[hsl(var(--line))]">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
