import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-ocid="scroll-progress.bar"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none"
      style={{ background: "oklch(var(--background))" }}
    >
      <div
        className="h-full transition-[width] duration-75 ease-out"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, oklch(0.70 0.24 260) 0%, oklch(0.72 0.23 275) 50%, oklch(0.75 0.22 290) 100%)",
        }}
      />
    </div>
  );
}
