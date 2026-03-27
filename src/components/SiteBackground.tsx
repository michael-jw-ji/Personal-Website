/**
 * Fixed full-viewport ambient layer: grid, drifting gradient orbs, and soft particles.
 * pointer-events-none so it never blocks interaction.
 */
const ORBS = [
  {
    className:
      "top-[-12%] right-[-5%] h-[min(100vw,560px)] w-[min(100vw,560px)] rounded-full bg-primary/[0.14] blur-[110px] motion-safe:animate-ambient-1 motion-reduce:animate-none",
  },
  {
    className:
      "bottom-[5%] left-[-8%] h-[min(90vw,480px)] w-[min(90vw,480px)] rounded-full bg-secondary/[0.1] blur-[100px] motion-safe:animate-ambient-2 motion-reduce:animate-none",
  },
  {
    className:
      "top-[42%] left-[35%] h-[min(70vw,380px)] w-[min(70vw,380px)] rounded-full bg-accent/[0.07] blur-[90px] motion-safe:animate-ambient-3 motion-reduce:animate-none",
  },
  {
    className:
      "bottom-[-5%] right-[25%] h-[min(85vw,420px)] w-[min(85vw,420px)] rounded-full bg-primary/[0.08] blur-[95px] motion-safe:animate-ambient-4 motion-reduce:animate-none",
  },
] as const;

/** Percent positions for tiny floating dots (deterministic, no layout shift) */
const PARTICLES: { top: string; left: string; delay: string; duration: string }[] =
  [
    { top: "18%", left: "12%", delay: "0s", duration: "13s" },
    { top: "8%", left: "44%", delay: "1.2s", duration: "17s" },
    { top: "62%", left: "6%", delay: "2.1s", duration: "15s" },
    { top: "28%", left: "78%", delay: "0.6s", duration: "19s" },
    { top: "72%", left: "88%", delay: "1.8s", duration: "14s" },
    { top: "45%", left: "52%", delay: "2.8s", duration: "16s" },
    { top: "88%", left: "38%", delay: "0.3s", duration: "18s" },
    { top: "12%", left: "92%", delay: "2.4s", duration: "12s" },
    { top: "52%", left: "22%", delay: "1.5s", duration: "20s" },
    { top: "35%", left: "65%", delay: "3s", duration: "14s" },
    { top: "78%", left: "58%", delay: "0.9s", duration: "17s" },
    { top: "22%", left: "30%", delay: "2.2s", duration: "15s" },
  ];

const SiteBackground = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Fine + coarse grid stack */}
      <div className="bg-site-grid absolute inset-0 opacity-[0.42]" />
      <div className="bg-site-grid-fine absolute inset-0 opacity-[0.22]" />

      {/* Slow gradient vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-5%,hsl(var(--primary)/0.09),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_80%,hsl(var(--secondary)/0.06),transparent_50%)]" />

      {/* Drifting orbs */}
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className={`absolute ${orb.className}`}
          style={{ animationDelay: `${i * 1.8}s` }}
        />
      ))}

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/40 shadow-[0_0_10px_hsl(var(--primary)/0.5)] motion-safe:animate-particle-drift motion-reduce:animate-none"
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_50%,transparent_40%,hsl(var(--background)/0.5)_100%)]" />
    </div>
  );
};

export default SiteBackground;
