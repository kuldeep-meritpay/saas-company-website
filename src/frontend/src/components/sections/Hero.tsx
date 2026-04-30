import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { SECTION_IDS } from "../../lib/constants";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id={SECTION_IDS.HOME}
      data-ocid="hero.section"
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden px-4 text-center"
    >
      {/* Animated gradient mesh background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.70 0.24 260 / 0.8) 0%, oklch(0.75 0.22 290 / 0.4) 50%, transparent 75%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.75 0.22 290 / 0.7) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.65 0.20 200 / 0.6) 0%, transparent 70%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.70 0.24 260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.70 0.24 260) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Scalable SaaS Platforms
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-foreground mb-6"
        >
          Build, Scale, and{" "}
          <span
            className="bg-clip-text text-transparent block sm:inline"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.70 0.24 260) 0%, oklch(0.75 0.22 290) 60%, oklch(0.72 0.20 310) 100%)",
            }}
          >
            Innovate
          </span>{" "}
          with Custom SaaS Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Trusted by e-commerce businesses on Shopify, BigCommerce, and Wix to
          build the apps that power their growth — from real-time auctions to
          full-stack management platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            type="button"
            data-ocid="hero.get_started_button"
            onClick={() => scrollTo(SECTION_IDS.CONTACT)}
            className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white shadow-elevated"
          >
            Get Started <ArrowRight size={18} />
          </button>
          <button
            type="button"
            data-ocid="hero.book_demo_button"
            onClick={() => scrollTo(SECTION_IDS.CONTACT)}
            className="btn-outline-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
          >
            <Play size={16} className="fill-current" /> Book a Demo
          </button>
        </motion.div>

        {/* Dashboard visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Glow ring */}
          <div
            className="absolute -inset-4 rounded-2xl opacity-30 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.70 0.24 260 / 0.4), oklch(0.75 0.22 290 / 0.4))",
            }}
          />
          <div className="relative rounded-2xl border border-border/40 overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
            {/* Browser chrome bar */}
            <div className="relative z-10 h-10 glass-blur flex items-center gap-2 px-4 border-b border-border/30">
              <span className="w-3 h-3 rounded-full bg-destructive/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <div className="flex-1 mx-4 h-5 rounded-md bg-muted/40 flex items-center justify-center">
                <span className="text-[10px] text-muted-foreground font-mono">
                  webwhistl.com
                </span>
              </div>
            </div>
            {/* Live iframe preview */}
            <iframe
              src="https://webwhistl.com"
              title="WebWhistl Dashboard"
              className="w-full h-[500px] block border-0"
              scrolling="no"
              style={{ overflow: "hidden" }}
            />
          </div>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          {[
            { metric: "50+", label: "Projects Delivered" },
            { metric: "3", label: "Verticals Served" },
            { metric: "100%", label: "Custom-Built" },
            { metric: "24/7", label: "Support SLA" },
          ].map(({ metric, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className="text-xl font-bold font-display bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
                }}
              >
                {metric}
              </span>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
