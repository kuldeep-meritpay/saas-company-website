import {
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Layers,
  MessageSquare,
  Plug,
  Smartphone,
} from "lucide-react";
import { motion } from "motion/react";
import { SECTION_IDS } from "../../lib/constants";

const SERVICES = [
  {
    icon: Layers,
    title: "SaaS Development Services",
    description:
      "End-to-end SaaS platform engineering from architecture to deployment. We build subscription-ready, multi-tenant applications that scale with your business.",
    gradient: "from-blue-500/20 to-primary/10",
    iconColor: "oklch(0.70 0.24 260)",
  },
  {
    icon: Code2,
    title: "Custom App Development",
    description:
      "Bespoke applications built to your exact specifications. Whether mobile-first or web-first, our full-stack teams deliver pixel-perfect, performant software.",
    gradient: "from-accent/20 to-purple-500/10",
    iconColor: "oklch(0.75 0.22 290)",
  },
  {
    icon: Plug,
    title: "Platform Integrations",
    description:
      "Seamless integrations with Shopify, BigCommerce, Wix, Stripe, and 100+ APIs. Connect your tech stack without friction and automate your workflows.",
    gradient: "from-primary/15 to-teal-500/10",
    iconColor: "oklch(0.70 0.24 260)",
  },
  {
    icon: Cloud,
    title: "Scalable Cloud Solutions",
    description:
      "AWS-powered infrastructure designed for scale. Auto-scaling, containerized deployments, and managed databases so your platform never goes down.",
    gradient: "from-accent/15 to-primary/10",
    iconColor: "oklch(0.75 0.22 290)",
  },
  {
    icon: BrainCircuit,
    title: "Custom RAG Systems",
    description:
      "Build retrieval-augmented generation pipelines that ground AI responses in your proprietary business data, documents, and knowledge bases for accurate, context-aware results.",
    gradient: "from-violet-500/20 to-primary/10",
    iconColor: "oklch(0.68 0.26 310)",
  },
  {
    icon: Cpu,
    title: "Smart AI Systems",
    description:
      "Design intelligent automation and decision-support systems powered by ML models, real-time data pipelines, and predictive analytics to keep you ahead of the curve.",
    gradient: "from-primary/20 to-cyan-500/10",
    iconColor: "oklch(0.72 0.22 220)",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Build conversational AI assistants that handle customer support, lead qualification, and internal workflows with natural language understanding and seamless handoffs.",
    gradient: "from-teal-500/20 to-accent/10",
    iconColor: "oklch(0.73 0.20 175)",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Craft high-performance cross-platform mobile experiences with native-like feel, offline support, and seamless backend integration for iOS and Android.",
    gradient: "from-accent/20 to-violet-500/10",
    iconColor: "oklch(0.76 0.24 295)",
  },
];

export default function Services() {
  return (
    <section
      id={SECTION_IDS.SERVICES}
      data-ocid="services.section"
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
            Our Expertise
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea to production — we provide the full spectrum of software
            engineering services to digitize and scale your business.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon: Icon, title, description, iconColor }, i) => (
            <motion.div
              key={title}
              data-ocid={`services.item.${i + 1}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border/50 glass-blur hover:scale-[1.03] hover:shadow-glass transition-smooth cursor-default"
            >
              {/* Gradient bg on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth"
                style={{
                  background: `radial-gradient(ellipse at top left, ${iconColor}18 0%, transparent 60%)`,
                }}
              />
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${iconColor}25, ${iconColor}10)`,
                    border: `1px solid ${iconColor}30`,
                  }}
                >
                  <Icon size={22} style={{ color: iconColor }} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
