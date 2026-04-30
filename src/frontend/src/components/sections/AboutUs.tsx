import { Briefcase, Globe, Rocket, Users } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const STATS: Stat[] = [
  {
    icon: Briefcase,
    value: 4,
    suffix: "+",
    label: "Years of Experience",
    color: "oklch(0.70 0.24 260)",
  },
  {
    icon: Users,
    value: 25,
    suffix: "+",
    label: "Team Members",
    color: "oklch(0.75 0.22 290)",
  },
  {
    icon: Rocket,
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    color: "oklch(0.68 0.26 310)",
  },
  {
    icon: Globe,
    value: 5,
    suffix: "+",
    label: "Countries Served",
    color: "oklch(0.65 0.20 200)",
  },
];

function AnimatedCounter({
  target,
  suffix,
}: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1200;
          const startTime = performance.now();
          function update(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            start = Math.round(eased * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutUs() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              Who We Are
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-6 leading-tight">
              Built to Scale Your{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
                }}
              >
                Digital Vision
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              Founded in 2020, WebWhistl has grown from a 2-person startup to a
              25+ member team of engineers, designers, and product strategists —
              all united by one mission.
            </p>

            <blockquote
              className="relative pl-6 py-3 my-6 border-l-4 rounded-r-xl"
              style={{
                borderColor: "oklch(0.70 0.24 260)",
                background: "oklch(0.70 0.24 260 / 0.06)",
              }}
            >
              <p className="text-base font-semibold italic text-foreground/90">
                "We build scalable SaaS solutions that help businesses grow
                faster in the digital age."
              </p>
            </blockquote>

            <p className="text-base text-muted-foreground leading-relaxed">
              We specialize in custom software for e-commerce, property
              management, travel, and AI-powered systems — building platforms
              that are fast to ship, easy to maintain, and designed to scale
              with your business.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-5"
          >
            {STATS.map(({ icon: Icon, value, suffix, label, color }, i) => (
              <motion.div
                key={label}
                data-ocid={`about.stat.${i + 1}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group relative p-6 rounded-2xl border border-border/50 glass-blur hover:scale-[1.03] hover:shadow-glass transition-smooth"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${color}12 0%, transparent 60%)`,
                  }}
                />
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${color}25, ${color}10)`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div
                    className="font-display font-bold text-4xl bg-clip-text text-transparent mb-1"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${color}, ${color}bb)`,
                    }}
                  >
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
