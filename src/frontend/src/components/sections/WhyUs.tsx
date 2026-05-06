import { Globe, TrendingUp, Wrench, Zap } from "lucide-react";
import { motion } from "motion/react";
import { SECTION_IDS } from "../../lib/constants";

const VALUE_PROPS = [
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "Every system we build is engineered to scale. From your first 100 users to your first 100,000 — we architect for growth from day one.",
    accent: "primary" as const,
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    description:
      "Ship in weeks, not months. Our proven engineering processes, CI/CD pipelines, and battle-tested templates mean faster time to market.",
    accent: "accent" as const,
  },
  {
    icon: Wrench,
    title: "Custom-Built Solutions",
    description:
      "No cookie-cutter templates. Everything is built to your unique requirements — your brand, your logic, your rules.",
    accent: "primary" as const,
  },
  {
    icon: Globe,
    title: "Cross-platform Expertise",
    description:
      "Web, mobile, API integrations, e-commerce platforms — we work across the full tech landscape to deliver seamless multi-platform experiences.",
    accent: "accent" as const,
  },
];

const GRADIENT_PRIMARY =
  "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.65 0.22 250))";
const GRADIENT_ACCENT =
  "linear-gradient(135deg, oklch(0.75 0.22 290), oklch(0.70 0.20 305))";

export default function WhyUs() {
  return (
    <section
      id={SECTION_IDS.WHY_US}
      data-ocid="why-us.section"
      className="py-24 section-alternate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Our Edge
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Why Choose WebWhistl
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just a development shop — we're your long-term technology
            partner, invested in your success.
          </p>
        </motion.div>

        {/* Value prop grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map(({ icon: Icon, title, description, accent }, i) => {
            const gradient =
              accent === "primary" ? GRADIENT_PRIMARY : GRADIENT_ACCENT;
            const iconColor =
              accent === "primary"
                ? "oklch(0.70 0.24 260)"
                : "oklch(0.75 0.22 290)";
            return (
              <motion.div
                key={title}
                data-ocid={`why-us.item.${i + 1}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl border border-border/50 bg-card/60 hover:shadow-glass hover:scale-[1.03] transition-smooth flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5 shadow-elevated"
                  style={{ background: gradient }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
                {/* Accent underline */}
                <div
                  className="mt-4 h-0.5 w-8 rounded-full opacity-60 group-hover:w-12 transition-all duration-300"
                  style={{ background: iconColor }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <button
            type="button"
            data-ocid="why-us.cta_button"
            onClick={() =>
              document
                .getElementById(SECTION_IDS.CONTACT)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white shadow-elevated"
          >
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
