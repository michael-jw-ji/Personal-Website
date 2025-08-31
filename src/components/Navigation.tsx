import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0"></div>

            {/* Desktop Navigation with Theme Toggle */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1 bg-nav-background/50 backdrop-blur-sm rounded-full px-6 py-2 border border-nav-border/30">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.href)}
                    className="text-nav-foreground hover:text-primary transition-colors duration-300 rounded-full px-4"
                  >
                    {item.label}
                  </Button>
                ))}
                <div className="mx-2 text-nav-foreground/50">|</div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="text-nav-foreground hover:text-primary transition-colors duration-300 rounded-full"
                >
                  {isDark ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center space-x-2">
              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-nav-foreground hover:text-primary transition-colors duration-300 rounded-full"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-nav-background/95 backdrop-blur-md border-t border-nav-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left justify-start text-nav-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
