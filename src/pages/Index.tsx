import { useEffect, useRef, useState } from "react";
import "@/styles/flight.css";
import { SHUTTLE_MOTION } from "@/lib/shuttle";
import { experiences } from "@/data/experiences";
import { featuredProjects, moreProjects } from "@/data/projects";
import badmintonCanadaLogo from "@/assets/badminton_canada_logo.png";
import badmintonCanadaOnDark from "@/assets/badminton_canada_logo_ondark.png";
import bwfLogo from "@/assets/bwf_logo.png";
import panAmLogo from "@/assets/badminton_panam_logo.png";
import panAmOnDark from "@/assets/badminton_panam_logo_ondark.png";
import shuttlecock from "@/assets/shuttlecock.png";
import headshot from "@/assets/headshot.jpg";

/* Credentials sit on the curve as measured points. Years are the x-axis, so
   the plot reads chronologically left to right the way every other plot on
   the page does. */
/** Canadian flag, the same height as the other marks in this list. */
const CanadaFlag = () => (
  <svg
    viewBox="0 0 640 480"
    className="h-10 w-auto"
    role="img"
    aria-label="Canada"
  >
    <path fill="#fff" d="M150.1 0h339.7v480H150z" />
    <path
      fill="#d52b1e"
      d="M-19.7 0h169.8v480H-19.7zm509.5 0h169.8v480H489.9zM201 232l-13.3 4.4 61.4 54c4.7 13.7-1.6 17.8-5.6 25l66.6-8.4-1.6 67 13.9-.3-3.1-66.6 66.7 8c-4.1-8.7-7.8-13.3-4-27.2l61.3-51-10.7-4c-8.8-6.8 3.8-32.6 5.6-48.9 0 0-35.7 12.3-38 5.8l-9.2-17.5-32.6 35.8c-3.5.9-5-.5-5.9-3.5l15-74.8-23.8 13.4q-3.2 1.3-5.2-2.2l-23-46-23.6 47.8q-2.8 2.5-5 .7L264 130.8l13.7 74.1c-1.1 3-3.7 3.8-6.7 2.2l-31.2-35.3c-4 6.5-6.8 17.1-12.2 19.5s-23.5-4.5-35.6-7c4.2 14.8 17 39.6 9 47.7"
    />
  </svg>
);

const MEDALS = {
  Gold: {
    "Men's Singles": [
      "2024 YONEX Québec Open",
      "2023 YONEX Québec U23 & Junior Elite",
      "2023 YONEX Manitoba U23 & Junior Elite",
      "2023 YONEX Atlantic Junior Elite",
      "2023 YONEX Québec Junior Elite",
      "2022 YONEX Québec U23 and Junior Elite",
      "2022 YONEX Prairie Junior Elite",
      "2022 YONEX Québec Junior Elite #2",
      "2021 YONEX Prairie Junior Elite #2",
      "2020 Yonex Ontario Junior Elite",
      "2020 Yonex BC Junior Elite",
    ],
    "Men's Doubles": [
      "2026 YONEX Canadian University College Championships - Individual Event",
      "2024 YONEX Canadian U23 & Junior Badminton Championships",
      "2023 YONEX Alberta Junior Elite",
      "2023 YONEX Québec U23 & Junior Elite",
      "2023 YONEX Manitoba U23 & Junior Elite",
      "2023 YONEX Québec Junior Elite",
      "2022 YONEX Canadian Junior U17/U19/U23 Badminton Championships",
      "2022 YONEX Québec Junior Elite #2",
      "2022 YONEX BC Junior Elite",
      "2021 YONEX Alberta Junior Elite",
      "2021 YONEX Prairie Junior Elite #1",
      "2020 Yonex Ontario Junior Elite",
      "2020 Yonex Quebec Junior Elite",
      "2019 Yonex Atlantic Junior Elite",
      "2019 YONEX Alberta Junior Elite",
      "2018 Yonex U11 & U13 Junior Development Team Qualifier",
    ],
    "Mixed Doubles": [
      "2024 YONEX Québec Open",
      "2023 YONEX Atlantic Junior Elite",
      "2022 YONEX Prairie Junior Elite",
      "2022 YONEX Québec Junior Elite #2",
      "2022 YONEX BC Junior Elite",
      "2021 YONEX Alberta Junior Elite",
      "2021 YONEX Prairie Junior Elite #1",
      "2020 Yonex Ontario Junior Elite",
      "2020 Yonex BC Junior Elite",
      "2020 Yonex Quebec Junior Elite",
    ],
  },
  Silver: {
    "Men's Singles": [
      "2025 YONEX Ontario Open",
      "2024 YONEX Canadian U23 & Junior Badminton Championships",
      "2024 YONEX Québec Junior Elite",
      "2023 YONEX Alberta Junior Elite",
      "2023 YONEX Canadian U23 & Junior Badminton Championships",
      "2022 YONEX Alberta U23 & Junior Elite",
      "2022 YONEX Canadian Junior U17/U19/U23 Badminton Championships",
      "2022 YONEX Ontario Junior Elite",
      "2021 YONEX Alberta Junior Elite",
      "2020 Yonex Quebec Junior Elite",
      "2019 Yonex Atlantic Junior Elite",
      "2019 YONEX Alberta Junior Elite",
      "2019 Yonex Prairie Junior Elite",
    ],
    "Men's Doubles": [
      "2025 YONEX Canadian Senior and Para Championships",
      "2023 YONEX Atlantic Junior Elite",
      "2023 YONEX BC Junior Elite",
      "2022 YONEX Alberta U23 & Junior Elite",
      "2022 YONEX Prairie Junior Elite",
      "2021 YONEX Quebec Junior Elite #1",
      "2020 Yonex BC Junior Elite",
      "2019 Yonex Prairie Junior Elite",
      "2019 Yonex Ontario Junior Elite",
      "2018 Yonex U11 & U13 Junior Development Team Qualifier",
    ],
    "Mixed Doubles": [
      "2022 YONEX Québec U23 and Junior Elite",
      "2022 YONEX Canadian Junior U17/U19/U23 Badminton Championships",
      "2021 YONEX Quebec Junior Elite #1",
      "2019 Yonex Atlantic Junior Elite",
      "2019 YONEX Alberta Junior Elite",
      "2018 Yonex U11 & U13 Junior Development Team Qualifier",
    ],
  },
} as const;

const GOLD_COUNT = Object.values(MEDALS.Gold).reduce(
  (count, events) => count + events.length,
  0,
);

const HONOURS = [
  {
    year: "2023/2024",
    label: "BWF World Junior Championships",
    detail: "Representative",
    logo: bwfLogo,
    alt: "Badminton World Federation",
  },
  {
    year: "2018-2024",
    label: `${GOLD_COUNT}x National Circuit Champion`,
    detail: "Singles · Doubles · Mixed",
    logo: badmintonCanadaLogo,
    logoOnDark: badmintonCanadaOnDark,
    alt: "Badminton Canada",
    results: true,
  },
  {
    year: "2018-2024",
    label: "Junior National Team",
    detail: "Canada",
    alt: "Canada",
  },
  {
    year: "2018, 2022, 2023, 2024",
    label: "Badminton Pan Am Championships",
    detail: "",
    logo: panAmLogo,
    logoOnDark: panAmOnDark,
    alt: "Badminton Pan America",
  },
] as const;

/* Two papers accepted at NeurIPS 2026 workshops, per the Algoverse role.
   Titles, workshop names and links are recorded nowhere in this repository,
   so they are not written here: an academic citation is the last thing on a
   portfolio worth guessing at. A row with a title renders as a citation.
   A row without one renders as an accepted workshop paper, venue and year
   only. Swap `url` to the arXiv link whenever those go up. `urlLabel` is
   what the link calls itself. */
const PUBLICATIONS: {
  title: string;
  venue: string;
  year: string;
  url: string;
  urlLabel: string;
  note: string;
}[] = [
  {
    title: "",
    venue: "NeurIPS 2026 Workshop",
    year: "2026",
    url: "",
    urlLabel: "OpenReview",
    note: "",
  },
  {
    title: "",
    venue: "NeurIPS 2026 Workshop",
    year: "2026",
    url: "",
    urlLabel: "OpenReview",
    note: "",
  },
];

/**
 * The supplied shuttlecock illustration, cut out of its background by
 * scripts/cutout-shuttlecock.py and committed as src/assets/shuttlecock.png.
 * Sized in em so it tracks the text it sits beside.
 */
const ShuttleBullet = () => (
  <img
    src={shuttlecock}
    alt=""
    aria-hidden="true"
    width={235}
    height={320}
    loading="lazy"
    decoding="async"
    className="mt-[0.26em] h-[1em] w-auto shrink-0 select-none"
  />
);

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

const THEME_KEY = "flight-theme";

const Index = () => {
  const { ref, drawn } = useDrawnOnView<HTMLDivElement>();
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light",
  );
  const [resultsOpen, setResultsOpen] = useState(false);
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(
    null,
  );
  useEffect(() => {
    if (!preview) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreview(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [preview]);
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
  };
  /* Most recent first. The canonical array is chronological so ranks and
     ordering stay stable for the other theme; this surface reverses it,
     because the role a recruiter weighs most is the current one. */
  const timeline = [...experiences].reverse();
  const projectsByTitle = new Map(
    [...featuredProjects, ...moreProjects].map((project) => [
      project.title,
      project,
    ]),
  );
  const allProjects = [
    "Insider Reading",
    "Atlas Trading View",
    "Go Ledger",
    "Decyfer",
    "Aegis",
    "Baddie Match",
  ].map((title) => projectsByTitle.get(title)!);

  return (
    <main
      className="flight group/flight min-h-screen"
      data-theme={theme}
      data-drawn={drawn}
      style={{ "--flight-ease": SHUTTLE_MOTION.ease } as React.CSSProperties}
    >
      {/* A readout that never leaves the frame. Borrowed discipline: a
          broadcast timecode holds its corner no matter what is on air. */}
      <div className="sticky top-0 z-30 border-b border-[hsl(var(--rule))] bg-[hsl(var(--ink))]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[86rem] items-center gap-4 px-5 py-2.5 sm:px-8">
          <span className="annot annot-strong">Michael Ji</span>
          <span className="hidden h-3 w-px bg-[hsl(var(--rule-strong))] sm:block" />
          <span className="annot hidden sm:block">CS/Finance · Waterloo</span>
          <span className="flex-1" />
          <button
            type="button"
            className="annot transition-colors hover:text-[hsl(var(--plot))]"
            onClick={toggleTheme}
            aria-pressed={theme === "dark"}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
          <a
            className="annot transition-colors hover:text-[hsl(var(--plot))]"
            href="mailto:michael.jw.ji@gmail.com"
          >
            Email
          </a>
          <a
            className="annot transition-colors hover:text-[hsl(var(--plot))]"
            href="/Resume%20-%20Michael%20Ji.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      {/* ── First viewport ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[86rem] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <div
          ref={ref}
          className="grid items-end gap-x-12 gap-y-9 md:grid-cols-[minmax(0,19rem)_1fr] lg:grid-cols-[minmax(0,22rem)_1fr]"
        >
          <img
            src={headshot}
            alt="Michael Ji"
            width={880}
            height={880}
            {...FETCH_PRIORITY_HIGH}
            decoding="sync"
            className="annot-in w-44 max-w-full border border-[hsl(var(--rule-strong))] object-cover sm:w-56 md:w-full"
            style={enterAt(0)}
          />

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
              Software engineer. I build production AI systems and ship them end
              to end.
            </p>

            {/* Three facts, one line each. This is the hero's real work: it
                answers where he is, what he is studying and what else he does
                before a visitor has scrolled or clicked anything, and it puts
                the sport third rather than first. Built from the same
                label-rule-value furniture the rest of the page uses, so it
                reads as part of the system rather than as a bio block. */}
            {/* Label, value, source. Three columns because that is what an
                annotated reading is: the axis names it, the value states it,
                and the source says who measured it. The organisation moves
                out of the prose and into its own column, so nothing is said
                twice and every row carries a datum marker like the plotted
                points elsewhere on the page. */}
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

      {/* ── Experience, plotted on a time axis ─────────────────────────── */}
      <section className="border-t border-[hsl(var(--rule))]">
        <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8">
          <div className="mb-10 flex items-baseline justify-between gap-6">
            <h2 className="text-[1.75rem] font-semibold leading-none tracking-[-0.03em] text-[hsl(var(--line))] before:mr-2.5 before:inline-block before:h-[1cap] before:w-[3px] before:bg-[hsl(var(--plot))] before:align-baseline before:content-['']">
              Engineering
            </h2>
            <span className="annot">{timeline.length} roles</span>
          </div>

          <ol className="space-y-px">
            {timeline.map((exp) => (
              <li
                key={exp.id}
                className="group grid gap-x-8 gap-y-3 border-t border-[hsl(var(--rule))] py-7 md:grid-cols-[13rem_1fr]"
              >
                <div className="flex items-start gap-3">
                  <span className="datum mt-1.5 shrink-0" aria-hidden />
                  <div className="min-w-0">
                    <p className="font-medium leading-snug text-[hsl(var(--line))]">
                      {exp.company}
                    </p>
                    <p className="num mt-1 text-xs text-[hsl(var(--line-faint))]">
                      {exp.periodShort}
                    </p>
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-[hsl(var(--plot))]">
                    {exp.role}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex max-w-[74ch] items-start gap-2.5 text-[0.94rem] leading-relaxed text-[hsl(var(--line-dim))]"
                      >
                        <ShuttleBullet />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="annot-list mt-4 flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
                    {exp.skills.map((s) => (
                      <span key={s} className="annot">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      
      {/* ── Projects ───────────────────────────────────────────────────── */}
      <section className="border-t border-[hsl(var(--rule))]">
        <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8">
          <div className="mb-10 flex items-baseline justify-between gap-6">
            <h2 className="text-[1.75rem] font-semibold leading-none tracking-[-0.03em] text-[hsl(var(--line))] before:mr-2.5 before:inline-block before:h-[1cap] before:w-[3px] before:bg-[hsl(var(--plot))] before:align-baseline before:content-['']">
              Projects
            </h2>
            <a
              href="https://github.com/michael-jw-ji"
              target="_blank"
              rel="noopener noreferrer"
              className="annot transition-colors hover:text-[hsl(var(--plot))]"
            >
              All repositories ↗
            </a>
          </div>

          <ul className="grid gap-x-12 gap-y-px md:grid-cols-2">
            {allProjects.map((p) => (
              <li
                key={p.id}
                className="border-t border-[hsl(var(--rule))] py-6"
              >
                {p.image ? (
                  <button
                    type="button"
                    className="mb-3 block w-full max-w-[16rem] cursor-zoom-in border border-[hsl(var(--rule-strong))]"
                    aria-label={`View a larger image of ${p.title}`}
                    onClick={() =>
                      setPreview({ src: p.image, title: p.title })
                    }
                  >
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-auto max-h-36 w-full object-contain"
                    />
                  </button>
                ) : (
                  <div className="mb-3 h-20 w-36 border border-[hsl(var(--rule-strong))]" />
                )}
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium text-[hsl(var(--line))]">
                    {p.title}
                  </h3>
                  {p.github && p.github !== "#" ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="annot shrink-0 transition-colors hover:text-[hsl(var(--plot))]"
                    >
                      Code ↗
                    </a>
                  ) : (
                    <span className="annot shrink-0">Private</span>
                  )}
                </div>
                <div className="annot-list mt-2 flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
                  {p.tech.slice(0, 6).map((t) => (
                    <span key={t} className="annot">
                      {t}
                    </span>
                  ))}
                </div>
                {p.features.length > 0 && (
                  <ul className="mt-3 max-w-[68ch] space-y-2">
                    {p.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[hsl(var(--line-dim))]"
                      >
                        <span className="datum mt-1.5 shrink-0" aria-hidden />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* ── Publications ───────────────────────────────────────────────── */}
      <section className="border-t border-[hsl(var(--rule))]">
        <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8">
          <div className="mb-10 flex items-baseline justify-between gap-6">
            <h2 className="text-[1.75rem] font-semibold leading-none tracking-[-0.03em] text-[hsl(var(--line))] before:mr-2.5 before:inline-block before:h-[1cap] before:w-[3px] before:bg-[hsl(var(--plot))] before:align-baseline before:content-['']">
              Publications
            </h2>
            <span className="annot">{PUBLICATIONS.length} papers</span>
          </div>

          <ol className="space-y-px">
            {PUBLICATIONS.map((pub, i) => (
              <li
                key={pub.title || `paper-${i}`}
                className="grid gap-x-8 gap-y-3 border-t border-[hsl(var(--rule))] py-7 md:grid-cols-[13rem_1fr]"
              >
                <div className="flex items-start gap-3">
                  <span className="datum mt-1.5 shrink-0" aria-hidden />
                  <div className="min-w-0">
                    <p className="num text-xs text-[hsl(var(--line-faint))]">
                      {pub.year}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-[hsl(var(--plot))]">
                      {pub.venue}
                    </p>
                  </div>
                </div>

                <div className="min-w-0">
                  <h3 className="max-w-[60ch] text-lg font-medium leading-snug text-[hsl(var(--line))]">
                    {pub.title || "Accepted workshop paper"}
                  </h3>
                  {pub.note && (
                    <p className="mt-2 max-w-[72ch] text-[0.94rem] leading-relaxed text-[hsl(var(--line-dim))]">
                      {pub.note}
                    </p>
                  )}
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="annot mt-3 inline-block transition-colors hover:text-[hsl(var(--plot))]"
                    >
                      {pub.urlLabel} ↗
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Competition record ─────────────────────────────────────────── */}
      <section className="border-t border-[hsl(var(--rule))]">
        <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8">
          <div className="mb-8 flex items-baseline justify-between gap-6">
            <h2 className="text-[1.75rem] font-semibold leading-none tracking-[-0.03em] text-[hsl(var(--line))] before:mr-2.5 before:inline-block before:h-[1cap] before:w-[3px] before:bg-[hsl(var(--plot))] before:align-baseline before:content-['']">
              Competition Record
            </h2>
            <span className="annot">Badminton Canada · BWF · Pan Am</span>
          </div>
          <ul className="space-y-px">
            {HONOURS.map((h) => (
              <li
                key={h.label}
                className={`grid gap-x-8 gap-y-2 border-t border-[hsl(var(--rule))] py-6 md:grid-cols-[18rem_1fr] ${
                  "results" in h ? "items-start" : "items-center"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-14 shrink-0 items-center">
                    {"logo" in h ? (
                      "logoOnDark" in h ? (
                        <>
                          <img
                            src={h.logo}
                            alt={h.alt}
                            width={40}
                            height={40}
                            loading="lazy"
                            decoding="async"
                            className="h-10 w-auto max-w-full object-contain object-left group-data-[theme=dark]/flight:hidden"
                          />
                          <img
                            src={h.logoOnDark}
                            alt={h.alt}
                            width={40}
                            height={40}
                            loading="lazy"
                            decoding="async"
                            className="hidden h-10 w-auto max-w-full object-contain object-left group-data-[theme=dark]/flight:block"
                          />
                        </>
                      ) : (
                        <img
                          src={h.logo}
                          alt={h.alt}
                          width={48}
                          height={40}
                          loading="lazy"
                          decoding="async"
                          className="h-10 w-auto max-w-full object-contain object-left"
                        />
                      )
                    ) : (
                      <CanadaFlag />
                    )}
                  </span>
                  <span className="num text-xs leading-none text-[hsl(var(--plot))]">
                    {h.year}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium leading-snug text-[hsl(var(--line))]">
                      {h.label}
                    </p>
                    {"results" in h && (
                      <button
                        type="button"
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center"
                        aria-expanded={resultsOpen}
                        aria-controls="champion-results"
                        aria-label={
                          resultsOpen ? "Hide results" : "Show results"
                        }
                        onClick={() => setResultsOpen((open) => !open)}
                      >
                        <img
                          src={shuttlecock}
                          alt=""
                          width={235}
                          height={320}
                          className={`h-5 w-5 object-contain transition-transform duration-200 ease-out motion-reduce:transition-none ${
                            resultsOpen ? "rotate-180" : "rotate-90"
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {h.detail && (
                    <p className="mt-1 text-sm text-[hsl(var(--line-dim))]">
                      {h.detail}
                    </p>
                  )}
                  {"results" in h && resultsOpen && (
                    <div id="champion-results" className="mt-5 space-y-8">
                      {(Object.keys(MEDALS) as (keyof typeof MEDALS)[]).map(
                        (metal) => (
                          <div key={metal}>
                            <p
                              className={`annot ${
                                metal === "Gold"
                                  ? "text-[hsl(var(--plot))]"
                                  : ""
                              }`}
                            >
                              {metal}
                            </p>
                            <div className="mt-3 grid gap-x-8 gap-y-5 md:grid-cols-3">
                              {(
                                Object.entries(MEDALS[metal]) as [
                                  string,
                                  readonly string[],
                                ][]
                              ).map(([event, titles]) => (
                                <div key={event} className="min-w-0">
                                  <p className="text-sm font-medium text-[hsl(var(--line))]">
                                    {event}
                                  </p>
                                  <ul className="mt-1.5 space-y-1">
                                    {titles.map((title) => (
                                      <li
                                        key={title}
                                        className="flex items-start gap-1.5 text-sm leading-relaxed text-[hsl(var(--line-dim))]"
                                      >
                                        <img
                                          src={shuttlecock}
                                          alt=""
                                          aria-hidden="true"
                                          width={235}
                                          height={320}
                                          className="mt-[0.28em] h-[0.7em] w-auto shrink-0 select-none"
                                        />
                                        <span>{title}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Photo plates. Deliberately empty and labelled rather than filled
              with stock images of other players. See docs/PHOTO-BRIEF.md. */}
          <div className="mt-px grid gap-px bg-[hsl(var(--rule))] sm:grid-cols-2">
            {[
              ["badminton_podium.jpg", "Podium / medal"],
              ["badminton_action.jpg", "Mid-rally action"],
            ].map(([file, label]) => (
              <div key={file} className="plate aspect-[3/2]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-4 text-center">
                  <span className="annot">{label}</span>
                  {import.meta.env.DEV && (
                    <span className="num text-[0.65rem] text-[hsl(var(--line-faint))]">
                      {file}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Close ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-[hsl(var(--rule))]">
        <div className="mx-auto max-w-[86rem] px-5 py-14 sm:px-8">
          <p className="max-w-[48ch] text-2xl leading-[1.3] tracking-[-0.022em] text-[hsl(var(--line))]">
            Looking for software engineering work at startups and in fintech.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-3">
            <a
              href="mailto:michael.jw.ji@gmail.com"
              className="num border border-[hsl(var(--plot))] bg-[hsl(var(--plot))] px-5 py-2.5 text-sm font-medium text-[hsl(var(--ink))] transition-colors hover:bg-[hsl(var(--plot-soft))]"
            >
              Get in touch
            </a>
            <a
              href="https://linkedin.com/in/michael-jw-ji"
              target="_blank"
              rel="noopener noreferrer"
              className="num border border-[hsl(var(--rule-strong))] px-5 py-2.5 text-sm transition-colors hover:border-[hsl(var(--line))]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={preview.title}
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            className="annot absolute right-5 top-5 text-[hsl(40_12%_94%)]"
            onClick={() => setPreview(null)}
          >
            Close
          </button>
          <img
            src={preview.src}
            alt={preview.title}
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default Index;
