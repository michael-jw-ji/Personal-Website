import shuttlecock from "@/assets/shuttlecock.png";
import { useSite } from "./site";

/**
 * The supplied shuttlecock illustration, cut out of its background by
 * scripts/cutout-shuttlecock.py and committed as src/assets/shuttlecock.png.
 * Sized in em so it tracks the text it sits beside.
 */
export const ShuttleBullet = () => (
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

/** A section heading with the accent tick, and an annotation on the right. */
export const SectionTitle = ({
  title,
  aside,
  as: Tag = "h2",
}: {
  title: string;
  aside?: React.ReactNode;
  as?: "h1" | "h2";
}) => {
  const { variant } = useSite();
  return (
  <div className="mb-10 flex items-baseline justify-between gap-6">
    {/* The mono skin numbers its sections; the number is a CSS counter, so
        reordering sections never leaves a stale figure behind. */}
    {variant === "mono" && <span className="annot section-no" aria-hidden />}
    <Tag className="tick mr-auto text-[1.75rem] font-semibold leading-none tracking-[-0.03em] text-[hsl(var(--line))] before:mr-2.5 before:inline-block before:h-[1cap] before:w-[3px] before:bg-[hsl(var(--plot))] before:align-baseline before:content-['']">
      {title}
    </Tag>
    {aside}
  </div>
  );
};

/** The top of a secondary page: what it is, in one line, under the name. */
export const PageIntro = ({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) => (
  <section className="mx-auto max-w-[86rem] px-5 pb-12 pt-12 sm:px-8 sm:pt-16">
    <p className="annot flex items-baseline gap-2">
      <span className="datum shrink-0 translate-y-[1px]" aria-hidden />
      {eyebrow}
    </p>
    <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.25rem)] font-semibold leading-[0.92] tracking-[-0.035em]">
      {title}
    </h1>
    <p className="mt-5 max-w-[58ch] text-lg leading-[1.5] text-[hsl(var(--line-dim))]">
      {lede}
    </p>
  </section>
);
