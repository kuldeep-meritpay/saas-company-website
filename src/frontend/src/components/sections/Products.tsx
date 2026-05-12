import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  Plane,
  ShoppingCart,
} from "lucide-react";
import { motion } from "motion/react";
import { SECTION_IDS } from "../../lib/constants";

interface Product {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
  badge: string;
  badgeColor: string;
  diagram?: "ecommerce" | "pg" | "travel";
}

/** ngrok-style animated SVG: E-commerce data flow */
function EcommerceDiagram() {
  const blue = "oklch(0.68 0.24 260)";
  const purple = "oklch(0.74 0.22 290)";
  return (
    <div className="mt-4 w-full">
      <svg
        className="w-full h-auto"
        role="img"
        width="320"
        height="88"
        viewBox="0 0 320 88"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-label="E-commerce flow: Store to Auction Engine to Analytics to Payment"
      >
        {/* Nodes */}
        <rect
          x="2"
          y="28"
          width="56"
          height="28"
          rx="5"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.26 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="30"
          y="44"
          fill="oklch(0.86 0.008 260)"
          fontSize="7"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Storefront
        </text>
        <circle
          cx="58"
          cy="42"
          r="5"
          fill={blue}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "58px 42px" }}
        />
        <circle cx="58" cy="42" r="2.5" fill={blue} />

        <rect
          x="76"
          y="28"
          width="64"
          height="28"
          rx="5"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.26 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="108"
          y="44"
          fill="oklch(0.86 0.008 260)"
          fontSize="7"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Bid Engine
        </text>
        <circle
          cx="76"
          cy="42"
          r="5"
          fill={purple}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "76px 42px", animationDelay: "0.4s" }}
        />
        <circle cx="76" cy="42" r="2.5" fill={purple} />
        <circle
          cx="140"
          cy="42"
          r="5"
          fill={purple}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "140px 42px", animationDelay: "0.8s" }}
        />
        <circle cx="140" cy="42" r="2.5" fill={purple} />

        <rect
          x="158"
          y="28"
          width="64"
          height="28"
          rx="5"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.26 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="190"
          y="44"
          fill="oklch(0.86 0.008 260)"
          fontSize="7"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Analytics
        </text>
        <circle
          cx="158"
          cy="42"
          r="5"
          fill={blue}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "158px 42px", animationDelay: "1.2s" }}
        />
        <circle cx="158" cy="42" r="2.5" fill={blue} />
        <circle
          cx="222"
          cy="42"
          r="5"
          fill={blue}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "222px 42px", animationDelay: "1.6s" }}
        />
        <circle cx="222" cy="42" r="2.5" fill={blue} />

        <rect
          x="240"
          y="28"
          width="56"
          height="28"
          rx="5"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.26 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="268"
          y="44"
          fill="oklch(0.86 0.008 260)"
          fontSize="7"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Payment
        </text>
        <circle
          cx="240"
          cy="42"
          r="5"
          fill={purple}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "240px 42px", animationDelay: "2.0s" }}
        />
        <circle cx="240" cy="42" r="2.5" fill={purple} />

        {/* Flowing paths */}
        <path
          d="M58 42 H76"
          stroke={blue}
          strokeWidth="1.5"
          strokeDasharray="5 4"
          className="svg-flow-path"
        />
        <path
          d="M140 42 H158"
          stroke={purple}
          strokeWidth="1.5"
          strokeDasharray="5 4"
          className="svg-flow-path"
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M222 42 H240"
          stroke={blue}
          strokeWidth="1.5"
          strokeDasharray="5 4"
          className="svg-flow-path"
          style={{ animationDelay: "1.0s" }}
        />

        {/* Labels */}
        <text
          x="30"
          y="68"
          fill="oklch(0.48 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Source
        </text>
        <text
          x="108"
          y="68"
          fill="oklch(0.48 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Auction
        </text>
        <text
          x="190"
          y="68"
          fill="oklch(0.48 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Dashboard
        </text>
        <text
          x="268"
          y="68"
          fill="oklch(0.48 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Gateway
        </text>
      </svg>
    </div>
  );
}

/** ngrok-style animated SVG: Travel booking flow */
function TravelDiagram() {
  const blue = "oklch(0.65 0.20 200)";
  const purple = "oklch(0.68 0.24 260)";
  return (
    <div className="mt-4 w-full">
      <svg
        className="w-full h-auto"
        role="img"
        width="320"
        height="110"
        viewBox="0 0 320 110"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Travel booking flow: Search to Availability to Booking to Confirmation"
      >
        {/* Main horizontal spine */}
        <circle
          cx="30"
          cy="42"
          r="5"
          fill={blue}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "30px 42px" }}
        />
        <circle cx="30" cy="42" r="2.5" fill={blue} />
        <circle
          cx="110"
          cy="42"
          r="5"
          fill={purple}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "110px 42px", animationDelay: "0.5s" }}
        />
        <circle cx="110" cy="42" r="2.5" fill={purple} />
        <circle
          cx="210"
          cy="42"
          r="5"
          fill={blue}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "210px 42px", animationDelay: "1.0s" }}
        />
        <circle cx="210" cy="42" r="2.5" fill={blue} />
        <circle
          cx="290"
          cy="42"
          r="5"
          fill={purple}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "290px 42px", animationDelay: "1.5s" }}
        />
        <circle cx="290" cy="42" r="2.5" fill={purple} />

        {/* Spine paths */}
        <path
          d="M30 42 H110"
          stroke={blue}
          strokeWidth="1.5"
          strokeDasharray="5 4"
          className="svg-flow-path"
        />
        <path
          d="M110 42 H210"
          stroke={purple}
          strokeWidth="1.5"
          strokeDasharray="5 4"
          className="svg-flow-path"
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M210 42 H290"
          stroke={blue}
          strokeWidth="1.5"
          strokeDasharray="5 4"
          className="svg-flow-path"
          style={{ animationDelay: "1.0s" }}
        />

        {/* Branch off node 2: Hotel / Flight / Bus */}
        <path
          d="M110 42 C110 42 90 42 90 62 H50"
          stroke={purple}
          strokeWidth="1"
          strokeDasharray="4 4"
          className="svg-flow-path"
          style={{ animationDelay: "0.3s" }}
          opacity="0.7"
        />
        <path
          d="M110 42 C110 42 110 62 110 62 H140"
          stroke={purple}
          strokeWidth="1"
          strokeDasharray="4 4"
          className="svg-flow-path"
          style={{ animationDelay: "0.6s" }}
          opacity="0.7"
        />
        <path
          d="M110 42 C110 42 130 42 130 62 H170"
          stroke={purple}
          strokeWidth="1"
          strokeDasharray="4 4"
          className="svg-flow-path"
          style={{ animationDelay: "0.9s" }}
          opacity="0.7"
        />

        {/* Service badges */}
        <rect
          x="28"
          y="62"
          width="38"
          height="18"
          rx="4"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.26 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="47"
          y="73"
          fill="oklch(0.75 0.015 260)"
          fontSize="6"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Hotel
        </text>
        <rect
          x="96"
          y="62"
          width="38"
          height="18"
          rx="4"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.26 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="115"
          y="73"
          fill="oklch(0.75 0.015 260)"
          fontSize="6"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Flight
        </text>
        <rect
          x="162"
          y="62"
          width="38"
          height="18"
          rx="4"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.26 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="181"
          y="73"
          fill="oklch(0.75 0.015 260)"
          fontSize="6"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Bus
        </text>

        {/* Main node labels */}
        <text
          x="30"
          y="92"
          fill="oklch(0.48 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Search
        </text>
        <text
          x="110"
          y="92"
          fill="oklch(0.48 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Availability
        </text>
        <text
          x="210"
          y="92"
          fill="oklch(0.48 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Booking
        </text>
        <text
          x="290"
          y="92"
          fill="oklch(0.48 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Confirmed
        </text>
      </svg>
    </div>
  );
}

/** ngrok-style animated SVG: PG Management flow */
function PGDiagram() {
  const blue = "oklch(0.74 0.22 290)";
  const green = "oklch(0.70 0.18 310)";
  return (
    <div className="mt-4 w-full">
      <svg
        className="w-full h-auto"
        role="img"
        width="320"
        height="88"
        viewBox="0 0 320 88"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-label="PG management flow: Tenant to Rent to Complaint to Admin"
      >
        <rect
          x="2"
          y="28"
          width="56"
          height="28"
          rx="5"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.26 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="30"
          y="44"
          fill="oklch(0.86 0.008 260)"
          fontSize="7"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Tenant
        </text>
        <circle
          cx="58"
          cy="42"
          r="5"
          fill={blue}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "58px 42px" }}
        />
        <circle cx="58" cy="42" r="2.5" fill={blue} />

        <rect
          x="76"
          y="28"
          width="56"
          height="28"
          rx="5"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.26 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="104"
          y="44"
          fill="oklch(0.86 0.008 260)"
          fontSize="7"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Rent
        </text>
        <circle
          cx="76"
          cy="42"
          r="5"
          fill={green}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "76px 42px", animationDelay: "0.4s" }}
        />
        <circle cx="76" cy="42" r="2.5" fill={green} />
        <circle
          cx="132"
          cy="42"
          r="5"
          fill={green}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "132px 42px", animationDelay: "0.8s" }}
        />
        <circle cx="132" cy="42" r="2.5" fill={green} />

        <rect
          x="150"
          y="28"
          width="64"
          height="28"
          rx="5"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.26 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="182"
          y="44"
          fill="oklch(0.86 0.008 260)"
          fontSize="7"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Complaint
        </text>
        <circle
          cx="150"
          cy="42"
          r="5"
          fill={blue}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "150px 42px", animationDelay: "1.2s" }}
        />
        <circle cx="150" cy="42" r="2.5" fill={blue} />
        <circle
          cx="214"
          cy="42"
          r="5"
          fill={blue}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "214px 42px", animationDelay: "1.6s" }}
        />
        <circle cx="214" cy="42" r="2.5" fill={blue} />

        <rect
          x="232"
          y="28"
          width="56"
          height="28"
          rx="5"
          fill="oklch(0.155 0.016 260)"
          stroke="oklch(0.26 0.016 260)"
          strokeWidth="0.5"
        />
        <text
          x="260"
          y="44"
          fill="oklch(0.86 0.008 260)"
          fontSize="7"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Admin
        </text>
        <circle
          cx="232"
          cy="42"
          r="5"
          fill={green}
          opacity="0.2"
          className="motion-safe:animate-[breathe_2s_ease-in-out_infinite]"
          style={{ transformOrigin: "232px 42px", animationDelay: "2.0s" }}
        />
        <circle cx="232" cy="42" r="2.5" fill={green} />

        <path
          d="M58 42 H76"
          stroke={blue}
          strokeWidth="1.5"
          strokeDasharray="5 4"
          className="svg-flow-path"
        />
        <path
          d="M132 42 H150"
          stroke={green}
          strokeWidth="1.5"
          strokeDasharray="5 4"
          className="svg-flow-path"
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M214 42 H232"
          stroke={blue}
          strokeWidth="1.5"
          strokeDasharray="5 4"
          className="svg-flow-path"
          style={{ animationDelay: "1.0s" }}
        />

        <text
          x="30"
          y="68"
          fill="oklch(0.48 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Onboard
        </text>
        <text
          x="104"
          y="68"
          fill="oklch(0.48 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Collect
        </text>
        <text
          x="182"
          y="68"
          fill="oklch(0.48 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Resolve
        </text>
        <text
          x="260"
          y="68"
          fill="oklch(0.48 0.01 260)"
          fontSize="6"
          textAnchor="middle"
        >
          Monitor
        </text>
      </svg>
    </div>
  );
}

const DIAGRAMS = {
  ecommerce: EcommerceDiagram,
  pg: PGDiagram,
  travel: TravelDiagram,
} as const;

const PRODUCTS: Product[] = [
  {
    icon: ShoppingCart,
    title: "E-commerce SaaS Apps",
    tagline: "Power your store with real-time analytics and smart automation",
    description:
      "Supercharge your e-commerce operations with apps built natively for Shopify, BigCommerce, and Wix. From real-time bidding to advanced analytics, we build the tools that move product.",
    features: [
      "Online Auction System",
      "Real-time Bidding Engine",
      "Analytics Dashboard",
      "User Management Portal",
      "Shopify / BigCommerce / Wix Support",
      "Payment Gateway Integrations",
    ],
    gradient:
      "linear-gradient(135deg, oklch(0.70 0.24 260 / 0.15) 0%, oklch(0.75 0.22 290 / 0.08) 100%)",
    badge: "E-commerce",
    badgeColor: "oklch(0.70 0.24 260)",
    diagram: "ecommerce",
  },
  {
    icon: Building2,
    title: "PG Management System",
    tagline: "From rent collection to maintenance — all in one platform",
    description:
      "A comprehensive role-based platform for property and PG businesses to manage tenants, staff, finances, and operations from a single mobile-first app.",
    features: [
      "Complaint Management",
      "Rent Management & Tracking",
      "Meter Reading Tracking",
      "Asset & Expense Management",
      "Document Management",
      "Tenant & Staff Onboarding",
    ],
    gradient:
      "linear-gradient(135deg, oklch(0.75 0.22 290 / 0.15) 0%, oklch(0.70 0.18 310 / 0.08) 100%)",
    badge: "Property Tech",
    badgeColor: "oklch(0.75 0.22 290)",
    diagram: "pg",
  },
  {
    icon: Plane,
    title: "Travel Management System",
    tagline: "Unified booking engine for hotels, flights, and buses",
    description:
      "A unified travel booking and management platform with real-time availability, multi-vendor support, and a powerful admin dashboard for travel agencies and operators.",
    features: [
      "Hotel / Flight / Bus Booking",
      "Unified Booking System",
      "Real-time Availability",
      "Payment Integration",
      "Admin Dashboard",
      "Vendor Management Portal",
    ],
    gradient:
      "linear-gradient(135deg, oklch(0.68 0.18 200 / 0.15) 0%, oklch(0.70 0.24 260 / 0.08) 100%)",
    badge: "Travel Tech",
    badgeColor: "oklch(0.65 0.20 200)",
    diagram: "travel",
  },
];

export default function Products() {
  return (
    <section
      id={SECTION_IDS.PRODUCTS}
      data-ocid="products.section"
      className="py-24 bg-background"
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/8 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
            Our Products
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Our Products &amp; Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Battle-tested platforms purpose-built for three high-growth
            verticals — ready to deploy and scale from day one.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(
            (
              {
                icon: Icon,
                title,
                tagline,
                description,
                features,
                gradient,
                badge,
                badgeColor,
                diagram,
              },
              i,
            ) => (
              <motion.div
                key={title}
                data-ocid={`products.item.${i + 1}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative flex flex-col rounded-2xl border border-border/50 overflow-visible hover:border-border transition-smooth hover:shadow-glass"
              >
                {/* Card gradient header */}
                <div
                  className="relative p-6 pb-5"
                  style={{ background: gradient }}
                >
                  <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-2xl"
                    style={{ background: badgeColor }}
                  />
                  <div className="relative flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${badgeColor}30, ${badgeColor}15)`,
                        border: `1px solid ${badgeColor}40`,
                      }}
                    >
                      <Icon size={26} style={{ color: badgeColor }} />
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: `${badgeColor}20`,
                        color: badgeColor,
                        border: `0.5px solid ${badgeColor}40`,
                      }}
                    >
                      {badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    {title}
                  </h3>
                  <p
                    className="text-xs font-semibold mb-2"
                    style={{ color: badgeColor }}
                  >
                    {tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                  {/* ngrok-style animated flow diagram */}
                  {diagram &&
                    (() => {
                      const Diagram = DIAGRAMS[diagram];
                      return <Diagram />;
                    })()}
                </div>

                {/* Features list */}
                <div className="flex-1 p-6 bg-card/60 flex flex-col">
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-sm text-foreground/80"
                      >
                        <CheckCircle2
                          size={15}
                          style={{ color: badgeColor, flexShrink: 0 }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    data-ocid={`products.view_demo_button.${i + 1}`}
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-smooth hover:scale-[1.03] hover:shadow-elevated cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg, ${badgeColor}, ${badgeColor}bb)`,
                    }}
                  >
                    <ExternalLink size={14} />
                    Get a Demo
                    <ArrowRight
                      size={14}
                      className="opacity-70 group-hover:translate-x-0.5 transition-transform duration-200"
                    />
                  </button>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
