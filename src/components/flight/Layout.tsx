import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "@/styles/flight.css";
import { SHUTTLE_MOTION } from "@/lib/shuttle";
import { SiteContext, type Site } from "./site";

const THEME_KEY = "flight-theme";

const NAV = [
  { to: "/career", label: "Career" },
  { to: "/extras", label: "Extras" },
] as const;

/* The frame every route shares: the readout, the theme and the close. Theme
   lives here rather than on a page so switching routes never flashes it. */
const Layout = ({ base = "", variant = "flight" }: Partial<Site>) => {
  const { pathname } = useLocation();
  const to = (path: string) => `${base}${path}` || "/";
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light",
  );
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
  };

  /* A new route starts at its top, the way a new page would. */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SiteContext.Provider value={{ base, variant }}>
    <main
      className={`flight group/flight min-h-screen ${variant === "mono" ? "mono" : ""}`}
      data-theme={theme}
      style={{ "--flight-ease": SHUTTLE_MOTION.ease } as React.CSSProperties}
    >
      {/* A readout that never leaves the frame. Borrowed discipline: a
          broadcast timecode holds its corner no matter what is on air. */}
      <div className="sticky top-0 z-30 border-b border-[hsl(var(--rule))] bg-[hsl(var(--ink))]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[86rem] items-center gap-4 px-5 py-2.5 sm:px-8">
          <Link
            to={to("")}
            className="annot annot-strong transition-colors hover:text-[hsl(var(--plot))]"
          >
            Michael Ji
          </Link>
          <span className="hidden h-3 w-px bg-[hsl(var(--rule-strong))] sm:block" />
          <nav aria-label="Pages" className="flex items-center gap-4">
            {NAV.map(({ to: path, label }) => (
              <NavLink
                key={path}
                to={to(path)}
                className={({ isActive }) =>
                  `annot transition-colors hover:text-[hsl(var(--plot))] ${
                    isActive ? "!text-[hsl(var(--plot))]" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
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
            className="annot hidden transition-colors hover:text-[hsl(var(--plot))] sm:inline"
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

      <Outlet />

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
    </main>
    </SiteContext.Provider>
  );
};

export default Layout;
