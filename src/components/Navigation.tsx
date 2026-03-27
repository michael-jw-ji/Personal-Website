import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Moon,
  Sun,
  Search,
  UserCircle,
  Briefcase,
  FolderKanban,
  Sparkles,
  Mail,
  Trophy,
} from "lucide-react";
import { SiteCommandPalette } from "@/components/SiteCommandPalette";

const navItems = [
  { label: "About", href: "#about", icon: UserCircle },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Awards", href: "#awards", icon: Trophy },
  { label: "Expertise", href: "#features", icon: Sparkles },
  { label: "Contact", href: "#contact", icon: Mail },
] as const;

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);
  const [commandOpen, setCommandOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  const labelReveal =
    "max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-[max-width,opacity] duration-300 ease-out group-hover:max-w-[220px] group-hover:opacity-100 group-focus-within:max-w-[220px] group-focus-within:opacity-100";

  return (
    <>
      <SiteCommandPalette open={commandOpen} onOpenChange={setCommandOpen} />

      <button
        type="button"
        onClick={toggleTheme}
        className="fixed right-3 top-3 z-[60] flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/80 text-muted-foreground backdrop-blur-md transition-colors hover:bg-muted/50 hover:text-foreground sm:right-5 sm:top-5"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Light mode" : "Dark mode"}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      <nav
        className="group fixed left-2 top-1/2 z-50 flex w-11 -translate-y-1/2 flex-col gap-1 overflow-hidden py-2 pl-1 transition-[width] duration-300 ease-out hover:w-52 focus-within:w-52 sm:left-4 sm:hover:w-56 sm:focus-within:w-56"
        aria-label="Primary"
      >
        <div className="flex min-w-0 flex-col gap-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`relative flex min-h-10 w-full min-w-0 items-center gap-2 rounded-md py-2 pl-2 pr-2 text-left text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground nav-active-indicator"
                    : "text-muted-foreground hover:bg-muted/25 hover:text-foreground"
                }`}
                title={item.label}
              >
                <Icon className="h-[1.05rem] w-[1.05rem] shrink-0" />
                <span className={`text-sm ${labelReveal}`}>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-2 min-w-0 shrink-0 border-t border-transparent pt-2 transition-colors group-hover:border-border/30 group-focus-within:border-border/30">
          <Button
            variant="ghost"
            size="sm"
            className="flex h-10 w-full min-w-0 items-center justify-start gap-2 rounded-md px-2 text-muted-foreground hover:bg-muted/25 hover:text-foreground"
            onClick={() => setCommandOpen(true)}
            title="Search"
          >
            <Search className="h-4 w-4 shrink-0" />
            <span
              className={`flex min-w-0 items-center gap-2 text-sm ${labelReveal}`}
            >
              <span>Search</span>
              <kbd className="pointer-events-none shrink-0 rounded border border-border/50 bg-muted/40 px-1 font-mono text-[9px] text-muted-foreground">
                ⌘K
              </kbd>
            </span>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
