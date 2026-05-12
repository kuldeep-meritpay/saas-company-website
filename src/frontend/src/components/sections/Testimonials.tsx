import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";
import { SECTION_IDS } from "../../lib/constants";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  metric: string;
  metricLabel: string;
  avatarInitials: string;
  accentColor: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "WebWhistl transformed our entire e-commerce operation. The real-time auction engine they built on BigCommerce handles thousands of concurrent bids without a hiccup. Our revenue doubled in the first six months post-launch.",
    name: "Rahul Sharma",
    title: "E-commerce Director",
    company: "RetailMax",
    metric: "2x",
    metricLabel: "Revenue growth in 6 months",
    avatarInitials: "RS",
    accentColor: "oklch(0.70 0.24 260)",
  },
  {
    quote:
      "Managing 18 PG properties across 3 cities was a nightmare in spreadsheets. WebWhistl's platform automated everything — rent reminders, maintenance tickets, expense reports. We've cut manual work by 60% and our staff loves it.",
    name: "Priya Patel",
    title: "Founder",
    company: "StayEase",
    metric: "60%",
    metricLabel: "Reduction in manual work",
    avatarInitials: "PP",
    accentColor: "oklch(0.75 0.22 290)",
  },
  {
    quote:
      "Our old travel booking system was a patchwork of three different tools. WebWhistl built us a unified platform for hotels, flights, and buses. The booking flow is 3x faster and our customers notice the difference immediately.",
    name: "Arjun Mehta",
    title: "CTO",
    company: "TripNova",
    metric: "3x",
    metricLabel: "Faster booking flow",
    avatarInitials: "AM",
    accentColor: "oklch(0.65 0.20 200)",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {["s1", "s2", "s3", "s4", "s5"].map((k) => (
        <Star
          key={k}
          size={14}
          className="fill-current"
          style={{ color: "oklch(0.80 0.18 70)" }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id={SECTION_IDS.TESTIMONIALS}
      data-ocid="testimonials.section"
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
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4"
            style={{
              border: "1px solid oklch(0.68 0.24 260 / 0.25)",
              background: "oklch(0.68 0.24 260 / 0.07)",
              color: "oklch(0.68 0.24 260)",
            }}
          >
            Client Stories
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4 tracking-[-0.02em]">
            What Our Clients Say
          </h2>
          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
            Real results from real businesses that trusted WebWhistl to build
            their digital backbone.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map(
            (
              {
                quote,
                name,
                title,
                company,
                metric,
                metricLabel,
                avatarInitials,
                accentColor,
              },
              i,
            ) => (
              <motion.div
                key={name}
                data-ocid={`testimonials.item.${i + 1}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative flex flex-col p-6 rounded-xl border border-border/40 bg-card/50 hover:border-border/70 hover:shadow-sm transition-all duration-200"
              >
                {/* Gradient tint */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top right, ${accentColor}10 0%, transparent 60%)`,
                  }}
                />

                <div className="relative">
                  <Stars />

                  {/* Quote icon */}
                  <Quote
                    size={28}
                    className="mb-3 opacity-40"
                    style={{ color: accentColor }}
                  />

                  <p className="text-[13.5px] text-foreground/80 leading-relaxed mb-5">
                    "{quote}"
                  </p>

                  {/* Metric highlight */}
                  <div
                    className="inline-flex items-baseline gap-1.5 px-3 py-1.5 rounded-lg mb-5"
                    style={{
                      background: `${accentColor}15`,
                      border: `1px solid ${accentColor}25`,
                    }}
                  >
                    <span
                      className="text-xl font-bold font-display"
                      style={{ color: accentColor }}
                    >
                      {metric}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {metricLabel}
                    </span>
                  </div>

                  {/* Avatar + name */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${accentColor}, ${accentColor}80)`,
                      }}
                    >
                      {avatarInitials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {name}
                      </div>
                      <div className="text-[12px] text-muted-foreground/70">
                        {title}, {company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
