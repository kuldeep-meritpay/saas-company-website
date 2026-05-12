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

interface ServiceCard {
  icon: React.ElementType;
  title: string;
  description: string;
  iconColor: string;
  useCase?: string;
  ragDiagram?: boolean;
}

const SERVICES: ServiceCard[] = [
  {
    icon: Layers,
    title: "SaaS Development Services",
    description:
      "End-to-end SaaS platform engineering from architecture to deployment. We build subscription-ready, multi-tenant applications that scale with your business.",
    iconColor: "oklch(0.70 0.24 260)",
  },
  {
    icon: Code2,
    title: "Custom App Development",
    description:
      "Bespoke applications built to your exact specifications. Whether mobile-first or web-first, our full-stack teams deliver pixel-perfect, performant software.",
    iconColor: "oklch(0.75 0.22 290)",
  },
  {
    icon: Plug,
    title: "Platform Integrations",
    description:
      "Seamless integrations with Shopify, BigCommerce, Wix, Stripe, and 100+ APIs. Connect your tech stack without friction and automate your workflows.",
    iconColor: "oklch(0.70 0.24 260)",
  },
  {
    icon: Cloud,
    title: "Scalable Cloud Solutions",
    description:
      "AWS-powered infrastructure designed for scale. Auto-scaling, containerized deployments, and managed databases so your platform never goes down.",
    iconColor: "oklch(0.75 0.22 290)",
  },
  {
    icon: BrainCircuit,
    title: "Custom RAG Systems",
    description:
      "Build retrieval-augmented generation pipelines that ground AI responses in your proprietary business data, documents, and knowledge bases.",
    iconColor: "oklch(0.68 0.26 310)",
    useCase: "Reduced support queries by 40% for a real estate firm",
    ragDiagram: true,
  },
  {
    icon: Cpu,
    title: "Smart AI Systems",
    description:
      "Design intelligent automation and decision-support systems powered by ML models, real-time data pipelines, and predictive analytics.",
    iconColor: "oklch(0.72 0.22 220)",
    useCase: "Automated inventory forecasting saving 20hrs/week",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Build conversational AI assistants that handle customer support, lead qualification, and internal workflows with natural language understanding.",
    iconColor: "oklch(0.73 0.20 175)",
    useCase: "24/7 customer support handling 500+ daily queries",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Craft high-performance cross-platform mobile experiences with native-like feel, offline support, and seamless backend integration for iOS and Android.",
    iconColor: "oklch(0.76 0.24 295)",
    useCase: "Launched cross-platform app in 6 weeks",
  },
];

function RAGDiagram() {
  const blue = "oklch(0.68 0.24 260)";
  const purple = "oklch(0.74 0.22 290)";

  return (
    <div className="mt-5 w-full overflow-hidden">
      <svg
        className="font-mono w-full h-auto"
        role="img"
        width="280"
        height="100"
        viewBox="0 0 280 100"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-label="RAG data flow: Documents to Vector Index to Query Engine to Answer"
      >
        {/* --- Nodes --- */}
        {/* Doc node */}
        <rect
          x="2"
          y="34"
          width="52"
          height="32"
          rx="5"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.28 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="28"
          y="52"
          fill="oklch(0.85 0.008 260)"
          fontSize="7"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Docs
        </text>
        {/* Pulsing dot on doc node */}
        <circle
          cx="54"
          cy="50"
          r="6"
          fill={blue}
          opacity="0.18"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "54px 50px" }}
        />
        <circle cx="54" cy="50" r="3" fill={blue} />

        {/* Index node */}
        <rect
          x="72"
          y="34"
          width="60"
          height="32"
          rx="5"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.28 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="102"
          y="52"
          fill="oklch(0.85 0.008 260)"
          fontSize="7"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Vector Index
        </text>
        {/* Pulsing dots on both sides */}
        <circle
          cx="72"
          cy="50"
          r="6"
          fill={purple}
          opacity="0.18"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "72px 50px", animationDelay: "0.3s" }}
        />
        <circle cx="72" cy="50" r="3" fill={purple} />
        <circle
          cx="132"
          cy="50"
          r="6"
          fill={purple}
          opacity="0.18"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "132px 50px", animationDelay: "0.6s" }}
        />
        <circle cx="132" cy="50" r="3" fill={purple} />

        {/* Query node */}
        <rect
          x="150"
          y="34"
          width="60"
          height="32"
          rx="5"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.28 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="180"
          y="52"
          fill="oklch(0.85 0.008 260)"
          fontSize="7"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          LLM Query
        </text>
        <circle
          cx="150"
          cy="50"
          r="6"
          fill={blue}
          opacity="0.18"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "150px 50px", animationDelay: "0.9s" }}
        />
        <circle cx="150" cy="50" r="3" fill={blue} />
        <circle
          cx="210"
          cy="50"
          r="6"
          fill={blue}
          opacity="0.18"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "210px 50px", animationDelay: "1.2s" }}
        />
        <circle cx="210" cy="50" r="3" fill={blue} />

        {/* Answer node */}
        <rect
          x="228"
          y="34"
          width="50"
          height="32"
          rx="5"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.28 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="253"
          y="52"
          fill="oklch(0.85 0.008 260)"
          fontSize="7"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Answer
        </text>
        <circle
          cx="228"
          cy="50"
          r="6"
          fill={purple}
          opacity="0.18"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "228px 50px", animationDelay: "1.5s" }}
        />
        <circle cx="228" cy="50" r="3" fill={purple} />

        {/* --- Flowing connector paths --- */}
        <path
          id="rag-path-1"
          d="M54 50 H72"
          stroke={blue}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          className="svg-flow-path"
        />
        <path
          id="rag-path-2"
          d="M132 50 H150"
          stroke={purple}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          className="svg-flow-path"
          style={{ animationDelay: "0.4s" }}
        />
        <path
          id="rag-path-3"
          d="M210 50 H228"
          stroke={blue}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          className="svg-flow-path"
          style={{ animationDelay: "0.8s" }}
        />

        {/* Labels under nodes */}
        <text
          x="28"
          y="76"
          fill="oklch(0.55 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Ingest
        </text>
        <text
          x="102"
          y="76"
          fill="oklch(0.55 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Embed &amp; Store
        </text>
        <text
          x="180"
          y="76"
          fill="oklch(0.55 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Retrieve &amp; Rank
        </text>
        <text
          x="253"
          y="76"
          fill="oklch(0.55 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Generate
        </text>
      </svg>
    </div>
  );
}

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
          {SERVICES.map(
            (
              {
                icon: Icon,
                title,
                description,
                iconColor,
                useCase,
                ragDiagram,
              },
              i,
            ) => (
              <motion.div
                key={title}
                data-ocid={`services.item.${i + 1}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl border border-border/50 glass-blur hover:scale-[1.03] hover:shadow-glass transition-smooth cursor-default flex flex-col min-h-[280px]"
              >
                {/* Gradient bg on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${iconColor}18 0%, transparent 60%)`,
                  }}
                />
                <div className="relative flex flex-col gap-3 flex-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${iconColor}25, ${iconColor}10)`,
                      border: `1px solid ${iconColor}30`,
                    }}
                  >
                    <Icon size={22} style={{ color: iconColor }} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground leading-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {description}
                  </p>
                  {ragDiagram && <RAGDiagram />}
                </div>
                {useCase && (
                  <div className="relative mt-4 pt-4 border-t border-border/30">
                    <p
                      className="text-xs font-medium italic leading-relaxed"
                      style={{ color: `${iconColor}cc` }}
                    >
                      ✦ {useCase}
                    </p>
                  </div>
                )}
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
