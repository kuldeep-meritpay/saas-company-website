import { PhoneCall, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (!dismissed && window.scrollY > 300) {
        setVisible(true);
      } else if (window.scrollY <= 300) {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  function handleSchedule() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleDismiss() {
    setDismissed(true);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-ocid="floating-cta.container"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
        >
          <motion.button
            type="button"
            data-ocid="floating-cta.schedule_button"
            onClick={handleSchedule}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold text-white shadow-elevated overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
            }}
            aria-label="Schedule a Call"
          >
            {/* pulse ring */}
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
              }}
            />
            <PhoneCall size={16} className="relative z-10 flex-shrink-0" />
            <span className="relative z-10">Schedule a Call</span>
          </motion.button>

          <motion.button
            type="button"
            data-ocid="floating-cta.close_button"
            onClick={handleDismiss}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full border border-border/50 bg-card/90 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200 shadow-xs"
            aria-label="Dismiss floating CTA"
          >
            <X size={14} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
