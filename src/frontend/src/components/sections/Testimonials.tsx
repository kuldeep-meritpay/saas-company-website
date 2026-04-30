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
      "WebWhistl built our real-time auction app on BigCommerce in just 6 weeks. The bidding engine is rock-solid even under peak traffic, and our sellers love the analytics dashboard.",
    name: "Marcus Chen",
    title: "CTO",
    company: "BidFlow Commerce",
    metric: "+150%",
    metricLabel: "Revenue increase",
    avatarInitials: "MC",
    accentColor: "oklch(0.70 0.24 260)",
  },
  {
    quote:
      "We were drowning in spreadsheets managing 12 PG properties. WebWhistl's platform gave us complaint tracking, rent reminders, and expense reports — all in one mobile app. Game changer.",
    name: "Priya Sharma",
    title: "Operations Head",
    company: "NestEasy Properties",
    metric: "3x",
    metricLabel: "Operational efficiency",
    avatarInitials: "PS",
    accentColor: "oklch(0.75 0.22 290)",
  },
  {
    quote:
      "Our travel agency needed a unified booking system that could handle hotels, flights, and buses. The team delivered a beautiful, real-time platform that our customers absolutely love.",
    name: "Alejandro Ruiz",
    title: "Founder",
    company: "SwiftRoute Travel",
    metric: "40%",
    metricLabel: "Booking conversion lift",
    avatarInitials: "AR",
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Client Stories
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                className="group relative flex flex-col p-7 rounded-2xl border border-border/50 glass-blur hover:shadow-glass hover:scale-[1.02] transition-smooth"
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

                  <p className="text-foreground/85 leading-relaxed text-sm mb-6 flex-1">
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
                      <div className="text-xs text-muted-foreground">
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
