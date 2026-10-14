import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Fades + lifts its children the first time they scroll into view.
 *
 * Uses IntersectionObserver rather than framer-motion: tailwindcss-animate is
 * disabled in tailwind.config.ts to avoid Framer Motion conflicts, and this
 * keeps the section on the same CSS-transition footing as the rest of the site.
 * Renders fully visible (no transition) when the viewer prefers reduced motion.
 */
type RevealProps = {
  children: React.ReactNode;
  /** ms to stagger this item behind its neighbours */
  delay?: number;
  className?: string;
};

const Reveal = ({ children, delay = 0, className }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;
export { Reveal };
