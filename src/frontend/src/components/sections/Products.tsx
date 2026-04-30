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
}

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
                className="group relative flex flex-col rounded-2xl border border-border/50 overflow-hidden hover:border-border transition-smooth hover:shadow-glass"
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
                        border: `1px solid ${badgeColor}30`,
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
                    onClick={() =>
                      document
                        .getElementById(SECTION_IDS.CONTACT)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-smooth hover:scale-[1.03] hover:shadow-elevated"
                    style={{
                      background: `linear-gradient(135deg, ${badgeColor}, ${badgeColor}bb)`,
                    }}
                  >
                    <ExternalLink size={14} />
                    See Demo
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
