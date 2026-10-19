import { useEffect, useState } from "react";
import { experiences } from "@/data/experiences";
import { featuredProjects, moreProjects } from "@/data/projects";
import { PUBLICATIONS, SELF } from "@/data/publications";
import { CERTIFICATIONS, EDUCATION } from "@/data/education";
import { PageIntro, SectionTitle, ShuttleBullet } from "@/components/flight/parts";

/* Display order for the projects grid, strongest first. */
const PROJECT_ORDER = [
  "Insider Reading",
  "Atlas Trading View",
  "Go Ledger",
  "Decyfer",
  "Aegis",
  "Baddie Match",
];

const projectsByTitle = new Map(
  [...featuredProjects, ...moreProjects].map((project) => [
    project.title,
    project,
  ]),
);
const allProjects = PROJECT_ORDER.map(
  (title) => projectsByTitle.get(title)!,
);

/* Most recent first. The canonical array is chronological so ranks and
   ordering stay stable for the other theme; this surface reverses it,
   because the role a recruiter weighs most is the current one. */
const timeline = [...experiences].reverse();

const Career = () => {
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

  return (
    <>
      <PageIntro
        eyebrow="Career"
        title="Engineering, projects and research"
        lede="Five internships across AI, data and infrastructure, the projects I build on my own time, and two NeurIPS 2026 workshop papers."
      />

      {/* ── Education ──────────────────────────────────────────────────── */}
      <section className="border-t border-[hsl(var(--rule))]">
        <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8">
          <SectionTitle title="Education" />

          <div className="grid gap-x-8 gap-y-3 border-t border-[hsl(var(--rule))] py-7 md:grid-cols-[13rem_1fr]">
            <div className="flex items-start gap-3">
              <span className="datum mt-1.5 shrink-0" aria-hidden />
              <div className="min-w-0">
                <p className="font-medium leading-snug text-[hsl(var(--line))]">
                  {EDUCATION.school}
                </p>
                <p className="num mt-1 text-xs text-[hsl(var(--line-faint))]">
                  {EDUCATION.period}
                </p>
              </div>
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium text-[hsl(var(--plot))]">
                {EDUCATION.degree}
              </p>
              <p className="annot mt-5">Activities</p>
              <ul className="mt-2 space-y-2">
                {EDUCATION.activities.map((activity) => (
                  <li
                    key={activity}
                    className="flex items-start gap-2.5 text-[0.94rem] leading-relaxed text-[hsl(var(--line-dim))]"
                  >
                    <ShuttleBullet />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────────────────── */}
      <section className="border-t border-[hsl(var(--rule))]">
        <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8">
          <SectionTitle
            title="Experience"
            aside={<span className="annot">{timeline.length} roles</span>}
          />

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
          <SectionTitle
            title="Projects"
            aside={
              <a
                href="https://github.com/michael-jw-ji"
                target="_blank"
                rel="noopener noreferrer"
                className="annot transition-colors hover:text-[hsl(var(--plot))]"
              >
                All repositories ↗
              </a>
            }
          />

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
          <SectionTitle
            title="Publications"
            aside={
              <span className="annot">{PUBLICATIONS.length} papers</span>
            }
          />

          <ol className="space-y-px">
            {PUBLICATIONS.map((pub) => (
              <li
                key={pub.title}
                className="grid gap-x-8 gap-y-3 border-t border-[hsl(var(--rule))] py-7 md:grid-cols-[13rem_1fr]"
              >
                <div className="flex items-start gap-3">
                  <span className="datum mt-1.5 shrink-0" aria-hidden />
                  <div className="min-w-0">
                    <p className="num text-xs text-[hsl(var(--line-faint))]">
                      {pub.year}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-[hsl(var(--plot))]">
                      {pub.venueShort}
                    </p>
                  </div>
                </div>

                <div className="min-w-0">
                  <h3 className="max-w-[60ch] text-lg font-medium leading-snug text-[hsl(var(--line))]">
                    {pub.title}
                  </h3>

                  {/* The byline, in submission order. Michael takes the line
                      colour and a weight step so his position is findable at
                      a glance without the order being altered to flatter it.
                      Commas are rendered between names rather than joined
                      into one string, so the emphasis can sit on the name
                      alone. */}
                  <p className="mt-2 max-w-[72ch] text-[0.9rem] leading-relaxed text-[hsl(var(--line-faint))]">
                    {pub.authors.map((name, n) => (
                      <span key={name}>
                        {n > 0 && ", "}
                        <span
                          className={
                            name === SELF
                              ? "font-medium text-[hsl(var(--line))]"
                              : undefined
                          }
                        >
                          {name}
                        </span>
                      </span>
                    ))}
                  </p>

                  <p className="mt-1.5 max-w-[72ch] text-[0.9rem] leading-relaxed text-[hsl(var(--line-dim))]">
                    {pub.venue}, NeurIPS {pub.year}
                  </p>

                  {pub.links.length > 0 && (
                    <div className="annot-list mt-3 flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
                      {pub.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="annot transition-colors hover:text-[hsl(var(--plot))]"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Certifications ─────────────────────────────────────────────── */}
      <section className="border-t border-[hsl(var(--rule))]">
        <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8">
          <SectionTitle title="Certifications" />

          <ul className="space-y-px">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert.issuer}
                className="grid gap-x-8 gap-y-3 border-t border-[hsl(var(--rule))] py-7 md:grid-cols-[13rem_1fr]"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={cert.logo}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 shrink-0 border border-[hsl(var(--rule))] object-cover"
                  />
                  <p className="font-medium leading-snug text-[hsl(var(--line))]">
                    {cert.issuer}
                  </p>
                </div>
                <ul className="min-w-0 space-y-2">
                  {cert.courses.map((course) => (
                    <li
                      key={course}
                      className="flex items-start gap-2.5 text-[0.94rem] leading-relaxed text-[hsl(var(--line-dim))]"
                    >
                      <span className="datum mt-1.5 shrink-0" aria-hidden />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
    </>
  );
};

export default Career;
