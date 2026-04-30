import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CalendarDays, Menu, Moon, Sun, X, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile(1024);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  function scrollToSection(sectionId: string) {
    setMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header
      data-ocid="navbar"
      className={cn(
        "fixed top-3 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "top-0 glass-blur shadow-elevated border-b border-border/30"
          : "bg-transparent",
      )}
      style={
        scrolled
          ? {
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            data-ocid="navbar.logo_link"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group transition-smooth"
            aria-label="WebWhistl home"
          >
            <div className="w-8 h-8 rounded-lg btn-primary-gradient flex items-center justify-center shadow-glass">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
              WebWhistl
            </span>
          </button>

          {/* Desktop nav */}
          {!isMobile && (
            <nav
              className="flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.sectionId}
                  type="button"
                  data-ocid={`navbar.nav_link.${link.sectionId}`}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Button
              data-ocid="navbar.theme_toggle"
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {!isMobile && (
              <>
                <Button
                  data-ocid="navbar.book_demo_button"
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="h-9 px-4 text-sm font-semibold rounded-lg border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/70 transition-smooth"
                >
                  <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
                  Book a Demo
                </Button>
                <Button
                  data-ocid="navbar.cta_button"
                  onClick={() => scrollToSection("contact")}
                  className="btn-primary-gradient px-5 h-9 text-sm font-semibold rounded-lg text-white border-0"
                >
                  Get Started
                </Button>
              </>
            )}

            {/* Hamburger */}
            {isMobile && (
              <Button
                data-ocid="navbar.hamburger_button"
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="w-9 h-9 rounded-lg"
              >
                {menuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobile && menuOpen && (
        <div
          data-ocid="navbar.mobile_menu"
          className="glass-blur border-t border-border/30 px-4 pb-4 pt-2"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.sectionId}
                type="button"
                data-ocid={`navbar.mobile_nav_link.${link.sectionId}`}
                onClick={() => scrollToSection(link.sectionId)}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth"
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-2 mt-2">
              <Button
                data-ocid="navbar.mobile_book_demo_button"
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="flex-1 text-sm font-semibold rounded-lg border-primary/40 text-primary"
              >
                Book a Demo
              </Button>
              <Button
                data-ocid="navbar.mobile_cta_button"
                onClick={() => scrollToSection("contact")}
                className="flex-1 btn-primary-gradient text-sm font-semibold rounded-lg text-white border-0"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
