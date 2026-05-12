import Contact from "@/components/sections/Contact";
import { COMPANY } from "@/lib/constants";
import {
  CalendarDays,
  Mail,
  MapPin,
  MessageSquare,
  Shield,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const TRUST_STATS = [
  { label: "Response Time", value: "< 24h" },
  { label: "Projects Launched", value: "100+" },
  { label: "Satisfaction Rate", value: "100%" },
  { label: "Avg. Delivery", value: "6 wks" },
];

export default function ContactPage() {
  return (
    <div data-ocid="contact_page.page">
      {/* Page Hero */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
                <MessageSquare size={12} />
                Get In Touch
              </span>
              <h1 className="font-display font-bold text-5xl sm:text-6xl text-foreground mb-6 leading-tight">
                Let's build your{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
                  }}
                >
                  SaaS product
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                No commitment, just a conversation. Tell us about your vision
                and we'll help you scope, architect, and ship it.
              </p>
              {/* Contact info row */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email us</p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      data-ocid="contact_page.email_link"
                      className="text-sm font-semibold text-foreground hover:text-primary transition-smooth"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Based in</p>
                    <p className="text-sm font-semibold text-foreground">
                      India &middot; Remote / Global
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {TRUST_STATS.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  data-ocid={`contact_page.stat.${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="p-6 rounded-2xl border border-border/50 glass-blur text-center"
                >
                  <div
                    className="font-display font-bold text-3xl bg-clip-text text-transparent mb-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {label}
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="col-span-2 p-5 rounded-2xl border flex items-center gap-3"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.70 0.24 260 / 0.08), oklch(0.75 0.22 290 / 0.06))",
                  borderColor: "oklch(0.70 0.24 260 / 0.25)",
                }}
              >
                <div className="flex gap-3">
                  <Zap
                    size={18}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Fast Response Guarantee
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      We respond to every inquiry within{" "}
                      <strong className="text-foreground">24 hours</strong>.
                      Mention your timeline for urgent projects.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="col-span-2 p-5 rounded-2xl border flex items-center gap-3"
                style={{
                  background: "oklch(0.75 0.22 290 / 0.06)",
                  borderColor: "oklch(0.75 0.22 290 / 0.20)",
                }}
              >
                <div className="flex gap-3">
                  <Shield
                    size={18}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Confidentiality Assured
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      All project details shared with us are treated with strict
                      confidentiality. NDA available on request.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form — definitive, with validation + honeypot */}
      <Contact />
    </div>
  );
}
