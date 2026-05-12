import { CalendarDays } from "lucide-react";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroThreshold = window.innerHeight * 0.85;
    const handleScroll = () => {
      setVisible(window.scrollY > heroThreshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-40 hidden md:block"
      data-ocid="floating_cta.button"
    >
      <button
        type="button"
        onClick={() => scrollToSection("contact")}
        className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.65 0.24 260), oklch(0.72 0.22 290))",
          boxShadow:
            "0 4px 24px oklch(0.65 0.24 260 / 0.35), 0 1px 4px rgba(0,0,0,0.2)",
        }}
      >
        <CalendarDays size={14} />
        Schedule a Call
      </button>
    </div>
  );
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <FloatingCTA />
      </div>
    </ThemeProvider>
  );
}
