import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { SCROLL_NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CalendarDays, Menu, Moon, Sun, X, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function scrollToSection(sectionId: string, closeMobile?: () => void) {
  closeMobile?.();
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

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

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header
      data-ocid="navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-blur shadow-sm border-b border-border/25"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <button
            type="button"
            data-ocid="navbar.logo_link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group bg-transparent border-0 p-0 cursor-pointer"
            aria-label="WebWhistl — scroll to top"
          >
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center shadow-sm"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.68 0.24 260), oklch(0.74 0.22 290))",
              }}
            >
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-[15px] tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
              WebWhistl
            </span>
          </button>

          {/* Desktop nav */}
          {!isMobile && (
            <nav
              className="flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {SCROLL_NAV_LINKS.map((link) => (
                <button
                  key={link.sectionId}
                  type="button"
                  data-ocid={`navbar.nav_link.${link.sectionId}`}
                  onClick={() =>
                    link.sectionId && scrollToSection(link.sectionId)
                  }
                  className="px-3.5 py-1.5 rounded-md text-[13.5px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-150"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            <Button
              data-ocid="navbar.theme_toggle"
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 rounded-md text-muted-foreground hover:text-foreground"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {!isMobile && (
              <button
                type="button"
                data-ocid="navbar.book_demo_button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-1.5 h-8 px-3.5 text-[13px] font-semibold rounded-md border transition-colors duration-150"
                style={{
                  borderColor: "oklch(0.68 0.24 260 / 0.35)",
                  color: "oklch(0.68 0.24 260)",
                  background: "oklch(0.68 0.24 260 / 0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "oklch(0.68 0.24 260 / 0.14)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "oklch(0.68 0.24 260 / 0.07)";
                }}
              >
                <CalendarDays className="w-3.5 h-3.5" />
                Book a Demo
              </button>
            )}

            {isMobile && (
              <Button
                data-ocid="navbar.hamburger_button"
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="w-8 h-8 rounded-md"
              >
                {menuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
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
          className="glass-blur border-t border-border/25 px-4 pb-4 pt-2"
        >
          <nav className="flex flex-col gap-0.5" aria-label="Mobile navigation">
            {SCROLL_NAV_LINKS.map((link) => (
              <button
                key={link.sectionId}
                type="button"
                data-ocid={`navbar.mobile_nav_link.${link.sectionId}`}
                onClick={() =>
                  link.sectionId &&
                  scrollToSection(link.sectionId, () => setMenuOpen(false))
                }
                className="w-full text-left px-3 py-2.5 rounded-md text-[13.5px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-150"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-2 pt-2 border-t border-border/25">
              <button
                type="button"
                data-ocid="navbar.mobile_book_demo_button"
                onClick={() =>
                  scrollToSection("contact", () => setMenuOpen(false))
                }
                className="w-full inline-flex items-center justify-center gap-2 h-9 rounded-md text-sm font-semibold border transition-colors duration-150"
                style={{
                  borderColor: "oklch(0.68 0.24 260 / 0.35)",
                  color: "oklch(0.68 0.24 260)",
                  background: "oklch(0.68 0.24 260 / 0.07)",
                }}
              >
                Book a Demo
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
