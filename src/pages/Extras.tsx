import { useState } from "react";
import { HONOURS, MEDALS } from "@/data/badminton";
import { PageIntro, SectionTitle } from "@/components/flight/parts";
import shuttlecock from "@/assets/shuttlecock.png";

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

const Extras = () => {
  const [resultsOpen, setResultsOpen] = useState(false);

  return (
    <>
      <PageIntro
        eyebrow="Extras"
        title="Outside of work"
        lede="I have competed in badminton at the national level since 2018, representing Canada on the junior national team and at world and continental championships."
      />

      {/* ── Competition record ─────────────────────────────────────────── */}
      <section className="border-t border-[hsl(var(--rule))]">
        <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8">
          <SectionTitle
            title="Competition Record"
            aside={
              <span className="annot hidden sm:inline">
                Badminton Canada · BWF · Pan Am
              </span>
            }
          />
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
    </>
  );
};

export default Extras;
