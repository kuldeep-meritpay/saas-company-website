import AboutUs from "@/components/sections/AboutUs";
import { COMPANY } from "@/lib/constants";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Mail, Users } from "lucide-react";
import { motion } from "motion/react";

const TEAM = [
  {
    name: "Arjun Sharma",
    role: "Co-Founder & CTO",
    bio: "Full-stack architect with 10+ years building SaaS products. Led engineering teams at two Series B startups before founding WebWhistl.",
    initials: "AS",
    color: "oklch(0.70 0.24 260)",
  },
  {
    name: "Priya Mehta",
    role: "Co-Founder & CEO",
    bio: "Former product lead at a global e-commerce platform. Passionate about bridging business complexity with elegant engineering.",
    initials: "PM",
    color: "oklch(0.75 0.22 290)",
  },
  {
    name: "Rahul Nair",
    role: "Head of AI/ML",
    bio: "Specializes in RAG systems, NLP pipelines, and deploying production-grade AI features for enterprise clients.",
    initials: "RN",
    color: "oklch(0.68 0.26 310)",
  },
  {
    name: "Sneha Kapoor",
    role: "Lead UX Designer",
    bio: "Designs product experiences that convert. Deep expertise in SaaS dashboard design, mobile UX, and design systems.",
    initials: "SK",
    color: "oklch(0.65 0.20 200)",
  },
];

export default function AboutPage() {
  return (
    <div data-ocid="about_page.page">
      {/* Page Hero */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              <Users size={12} />
              About WebWhistl
            </span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-foreground mb-6 leading-tight">
              Built by engineers,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
                }}
              >
                for real businesses
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We started {COMPANY.name} because we saw too many businesses
              struggling with generic software that almost — but never quite —
              fit. Our answer was to build custom.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                data-ocid="about_page.cta_button"
                className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              >
                Work With Us <ArrowRight size={16} />
              </Link>
              <a
                href={`mailto:${COMPANY.email}`}
                data-ocid="about_page.email_link"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-border/60 text-foreground hover:bg-muted/40 transition-smooth"
              >
                <Mail size={16} /> {COMPANY.email}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reuse the AboutUs section */}
      <AboutUs />

      {/* Team section */}
      <section className="py-24 section-alternate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
              The Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engineers, designers, and domain experts who care about shipping
              products that work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map(({ name, role, bio, initials, color }, i) => (
              <motion.div
                key={name}
                data-ocid={`about_page.team.item.${i + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border/50 glass-blur hover:shadow-glass transition-smooth"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-xl text-white mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${color}, ${color}80)`,
                  }}
                >
                  {initials}
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-0.5">
                  {name}
                </h3>
                <p className="text-xs text-primary font-semibold mb-3">
                  {role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CalendarDays
              size={40}
              className="mx-auto text-primary mb-6 opacity-80"
            />
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              Ready to build something great?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Tell us about your project and we'll get back to you within 24
              hours.
            </p>
            <Link
              to="/contact"
              data-ocid="about_page.bottom_cta_button"
              className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white"
            >
              Book a Free Discovery Call <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
