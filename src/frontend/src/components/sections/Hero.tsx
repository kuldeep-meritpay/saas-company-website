import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { SECTION_IDS } from "../../lib/constants";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// Trend indicator
function Trend({ up, value }: { up: boolean; value: string }) {
  return (
    <span
      className="inline-flex items-center gap-0.5 text-[9px] font-semibold px-1 py-0.5 rounded"
      style={{
        color: up ? "oklch(0.72 0.18 145)" : "oklch(0.65 0.19 22)",
        background: up
          ? "oklch(0.72 0.18 145 / 0.15)"
          : "oklch(0.65 0.19 22 / 0.15)",
      }}
    >
      {up ? "▲" : "▼"} {value}
    </span>
  );
}

// Static mobile placeholder inside browser mockup
function MobileMockupContent() {
  return (
    <div
      className="w-full h-[280px] flex flex-col"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.02 260) 0%, oklch(0.22 0.03 280) 100%)",
      }}
    >
      {/* Nav bar line */}
      <div className="h-8 border-b border-border/20 flex items-center px-4 gap-2">
        <div className="w-16 h-2 rounded bg-primary/30" />
        <div className="flex-1" />
        <div className="w-8 h-2 rounded bg-muted/40" />
        <div className="w-8 h-2 rounded bg-muted/40" />
        <div className="w-8 h-2 rounded bg-muted/40" />
      </div>
      {/* Hero area */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8 text-center">
        <div
          className="text-2xl font-bold font-display bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(135deg, oklch(0.80 0.24 260), oklch(0.82 0.22 290))",
          }}
        >
          webwhistl.com
        </div>
        <div className="space-y-2 w-full max-w-xs">
          <div className="h-2 rounded bg-muted/30 w-3/4 mx-auto" />
          <div className="h-2 rounded bg-muted/20 w-1/2 mx-auto" />
        </div>
        <div
          className="mt-2 px-4 py-2 rounded-lg text-xs font-semibold text-white"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
          }}
        >
          View Live Site
        </div>
      </div>
      {/* Footer cards */}
      <div className="grid grid-cols-3 gap-2 px-4 pb-4">
        {["50+ Projects", "5 Countries", "24/7 Support"].map((label) => (
          <div
            key={label}
            className="rounded-lg p-2 text-center border border-border/20"
            style={{ background: "oklch(0.22 0.02 260 / 0.6)" }}
          >
            <div className="text-[10px] text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Polished static dashboard mockup
function DashboardMockup() {
  const stats = [
    {
      label: "Total Revenue",
      value: "$142K",
      trend: "+12.4%",
      up: true,
      icon: "💰",
    },
    {
      label: "Active Users",
      value: "8,420",
      trend: "+8.1%",
      up: true,
      icon: "👤",
    },
    {
      label: "New Orders",
      value: "1,204",
      trend: "+3.2%",
      up: true,
      icon: "📦",
    },
    {
      label: "Conversion",
      value: "3.8%",
      trend: "-0.4%",
      up: false,
      icon: "📈",
    },
  ];

  const navItems = [
    { label: "Dashboard", active: true },
    { label: "Analytics", active: false },
    { label: "Customers", active: false },
    { label: "Orders", active: false },
    { label: "Settings", active: false },
  ];

  const chartBars = [42, 58, 45, 72, 63, 88, 76, 92, 68, 85, 79, 96];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const orders = [
    {
      id: "#ORD-4821",
      customer: "Apex Commerce",
      status: "Completed",
      amount: "$2,400",
    },
    {
      id: "#ORD-4820",
      customer: "Nova Retail",
      status: "Processing",
      amount: "$1,850",
    },
    {
      id: "#ORD-4819",
      customer: "Blaze Store",
      status: "Completed",
      amount: "$3,120",
    },
    {
      id: "#ORD-4818",
      customer: "Pixel Market",
      status: "Pending",
      amount: "$960",
    },
  ];

  return (
    <div
      className="w-full h-[320px] flex overflow-hidden text-[10px]"
      style={{ background: "oklch(0.13 0.022 260)" }}
    >
      {/* Sidebar */}
      <div
        className="w-32 flex-shrink-0 flex flex-col pt-3 pb-2 px-2 border-r"
        style={{
          background: "oklch(0.16 0.025 260)",
          borderColor: "oklch(0.28 0.02 260 / 0.6)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-1.5 px-2 mb-4">
          <div
            className="w-5 h-5 rounded"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
            }}
          />
          <span
            className="font-bold text-[11px]"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.80 0.24 260), oklch(0.82 0.22 290))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            webwhistl
          </span>
        </div>
        {/* Nav */}
        <nav className="flex flex-col gap-0.5 flex-1">
          {navItems.map(({ label, active }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-2 py-1.5 rounded-md"
              style={{
                background: active
                  ? "oklch(0.70 0.24 260 / 0.18)"
                  : "transparent",
                color: active
                  ? "oklch(0.80 0.24 260)"
                  : "oklch(0.55 0.012 260)",
                borderLeft: active
                  ? "2px solid oklch(0.70 0.24 260)"
                  : "2px solid transparent",
              }}
            >
              <div
                className="w-2 h-2 rounded-sm"
                style={{
                  background: active
                    ? "oklch(0.70 0.24 260)"
                    : "oklch(0.40 0.012 260)",
                }}
              />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </nav>
        {/* User */}
        <div
          className="flex items-center gap-1.5 px-2 pt-2 border-t"
          style={{ borderColor: "oklch(0.28 0.02 260 / 0.4)" }}
        >
          <div
            className="w-5 h-5 rounded-full flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
            }}
          />
          <div className="flex flex-col min-w-0">
            <span
              style={{ color: "oklch(0.85 0.012 260)" }}
              className="font-semibold truncate"
            >
              Admin
            </span>
            <span
              style={{ color: "oklch(0.45 0.012 260)" }}
              className="truncate"
            >
              admin@webwhistl
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <div
          className="flex items-center justify-between px-4 py-2 border-b flex-shrink-0"
          style={{
            background: "oklch(0.16 0.025 260)",
            borderColor: "oklch(0.28 0.02 260 / 0.5)",
          }}
        >
          <span
            className="font-bold text-[12px]"
            style={{ color: "oklch(0.92 0.012 260)" }}
          >
            Dashboard
          </span>
          <div className="flex items-center gap-2">
            <div
              className="h-5 px-2 rounded flex items-center text-[9px] font-semibold"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.70 0.24 260 / 0.3), oklch(0.75 0.22 290 / 0.3))",
                color: "oklch(0.80 0.24 260)",
                border: "1px solid oklch(0.70 0.24 260 / 0.4)",
              }}
            >
              May 2026
            </div>
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
                color: "white",
              }}
            >
              A
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-2">
            {stats.map(({ label, value, trend, up, icon }) => (
              <div
                key={label}
                className="rounded-lg p-2"
                style={{
                  background: "oklch(0.18 0.025 260)",
                  border: "1px solid oklch(0.28 0.02 260 / 0.6)",
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span style={{ color: "oklch(0.50 0.012 260)" }}>{icon}</span>
                  <Trend up={up} value={trend} />
                </div>
                <div
                  className="font-bold text-[13px] leading-tight"
                  style={{ color: "oklch(0.92 0.012 260)" }}
                >
                  {value}
                </div>
                <div
                  style={{ color: "oklch(0.48 0.012 260)" }}
                  className="mt-0.5"
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Chart + Channel split row */}
          <div className="grid grid-cols-5 gap-2">
            {/* Bar chart */}
            <div
              className="col-span-3 rounded-lg p-2"
              style={{
                background: "oklch(0.18 0.025 260)",
                border: "1px solid oklch(0.28 0.02 260 / 0.6)",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="font-semibold"
                  style={{ color: "oklch(0.85 0.012 260)" }}
                >
                  Revenue Overview
                </span>
                <span style={{ color: "oklch(0.45 0.012 260)" }}>2026</span>
              </div>
              <svg
                aria-label="Revenue bar chart"
                role="img"
                viewBox="0 0 260 60"
                className="w-full"
                style={{ height: "52px" }}
              >
                {[0, 20, 40, 60].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={60 - y}
                    x2="260"
                    y2={60 - y}
                    stroke="oklch(0.28 0.02 260 / 0.4)"
                    strokeWidth="0.5"
                  />
                ))}
                <defs>
                  <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.75 0.22 290)" />
                    <stop offset="100%" stopColor="oklch(0.70 0.24 260)" />
                  </linearGradient>
                </defs>
                {chartBars.map((h, i) => {
                  const barW = 16;
                  const gap = 6;
                  const x = i * (barW + gap) + 2;
                  const barH = (h / 100) * 52;
                  return (
                    <rect
                      // biome-ignore lint/suspicious/noArrayIndexKey: decorative static chart
                      key={`bar-${i}`}
                      x={x}
                      y={60 - barH}
                      width={barW}
                      height={barH}
                      fill="url(#bar-grad)"
                      rx="2"
                      opacity="0.85"
                    />
                  );
                })}
              </svg>
              <div
                className="flex mt-1"
                style={{ gap: "6px", paddingLeft: "2px" }}
              >
                {months.map((m) => (
                  <span
                    key={m}
                    style={{
                      color: "oklch(0.38 0.012 260)",
                      fontSize: "7px",
                      width: "16px",
                      textAlign: "center",
                      flexShrink: 0,
                    }}
                  >
                    {m.slice(0, 1)}
                  </span>
                ))}
              </div>
            </div>

            {/* Donut channel split */}
            <div
              className="col-span-2 rounded-lg p-2"
              style={{
                background: "oklch(0.18 0.025 260)",
                border: "1px solid oklch(0.28 0.02 260 / 0.6)",
              }}
            >
              <div
                className="font-semibold mb-2"
                style={{ color: "oklch(0.85 0.012 260)" }}
              >
                Channel Split
              </div>
              <div className="flex items-center justify-center">
                <svg
                  aria-label="Channel split donut chart"
                  role="img"
                  viewBox="0 0 80 80"
                  style={{ width: "64px", height: "64px" }}
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="oklch(0.25 0.02 260)"
                    strokeWidth="12"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="oklch(0.70 0.24 260)"
                    strokeWidth="12"
                    strokeDasharray="84.8 88.6"
                    strokeDashoffset="22"
                    transform="rotate(-90 40 40)"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="oklch(0.75 0.22 290)"
                    strokeWidth="12"
                    strokeDasharray="56.5 116.8"
                    strokeDashoffset={22 - 84.8}
                    transform="rotate(-90 40 40)"
                  />
                  <text
                    x="40"
                    y="37"
                    textAnchor="middle"
                    style={{
                      fontSize: "10px",
                      fill: "oklch(0.92 0.012 260)",
                      fontWeight: "700",
                    }}
                  >
                    3
                  </text>
                  <text
                    x="40"
                    y="47"
                    textAnchor="middle"
                    style={{ fontSize: "7px", fill: "oklch(0.50 0.012 260)" }}
                  >
                    channels
                  </text>
                </svg>
              </div>
              <div className="space-y-1 mt-1">
                {[
                  {
                    label: "Shopify",
                    pct: "48%",
                    color: "oklch(0.70 0.24 260)",
                  },
                  {
                    label: "BigCommerce",
                    pct: "32%",
                    color: "oklch(0.75 0.22 290)",
                  },
                  { label: "Wix", pct: "20%", color: "oklch(0.60 0.18 200)" },
                ].map(({ label, pct, color }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: color }}
                    />
                    <span style={{ color: "oklch(0.55 0.012 260)", flex: 1 }}>
                      {label}
                    </span>
                    <span
                      style={{
                        color: "oklch(0.85 0.012 260)",
                        fontWeight: 600,
                      }}
                    >
                      {pct}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent orders table */}
          <div
            className="rounded-lg overflow-hidden"
            style={{
              background: "oklch(0.18 0.025 260)",
              border: "1px solid oklch(0.28 0.02 260 / 0.6)",
            }}
          >
            <div
              className="flex items-center px-3 py-1.5 border-b"
              style={{ borderColor: "oklch(0.28 0.02 260 / 0.4)" }}
            >
              <span
                className="font-semibold flex-1"
                style={{ color: "oklch(0.85 0.012 260)" }}
              >
                Recent Orders
              </span>
              <span
                style={{ color: "oklch(0.70 0.24 260)" }}
                className="font-medium"
              >
                View all →
              </span>
            </div>
            <div
              className="grid px-3 py-1"
              style={{
                gridTemplateColumns: "1fr 1fr 80px 60px",
                color: "oklch(0.42 0.012 260)",
              }}
            >
              <span>Order ID</span>
              <span>Customer</span>
              <span>Status</span>
              <span className="text-right">Amount</span>
            </div>
            {orders.map(({ id, customer, status, amount }, i) => (
              <div
                key={id}
                className="grid px-3 py-1.5 items-center"
                style={{
                  gridTemplateColumns: "1fr 1fr 80px 60px",
                  background:
                    i % 2 === 0 ? "transparent" : "oklch(0.16 0.022 260 / 0.5)",
                }}
              >
                <span
                  style={{ color: "oklch(0.70 0.24 260)", fontWeight: 600 }}
                >
                  {id}
                </span>
                <span style={{ color: "oklch(0.75 0.012 260)" }}>
                  {customer}
                </span>
                <span>
                  <span
                    className="px-1.5 py-0.5 rounded text-[8px] font-semibold"
                    style={{
                      background:
                        status === "Completed"
                          ? "oklch(0.72 0.18 145 / 0.18)"
                          : status === "Processing"
                            ? "oklch(0.70 0.24 260 / 0.18)"
                            : "oklch(0.80 0.18 75 / 0.18)",
                      color:
                        status === "Completed"
                          ? "oklch(0.72 0.18 145)"
                          : status === "Processing"
                            ? "oklch(0.70 0.24 260)"
                            : "oklch(0.80 0.18 75)",
                    }}
                  >
                    {status}
                  </span>
                </span>
                <span
                  className="text-right font-semibold"
                  style={{ color: "oklch(0.85 0.012 260)" }}
                >
                  {amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id={SECTION_IDS.HOME}
      data-ocid="hero.section"
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden px-4 text-center"
    >
      {/* Animated gradient mesh background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.70 0.24 260 / 0.8) 0%, oklch(0.75 0.22 290 / 0.4) 50%, transparent 75%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.75 0.22 290 / 0.7) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.65 0.20 200 / 0.6) 0%, transparent 70%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.70 0.24 260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.70 0.24 260) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11.5px] font-semibold tracking-wide mb-8"
            style={{
              border: "1px solid oklch(0.68 0.24 260 / 0.3)",
              background: "oklch(0.68 0.24 260 / 0.08)",
              color: "oklch(0.68 0.24 260)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "oklch(0.68 0.24 260)" }}
            />
            Scalable SaaS Platforms
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.04] tracking-[-0.02em] text-foreground mb-6"
        >
          Build, Scale, and{" "}
          <span
            className="bg-clip-text text-transparent block sm:inline"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.70 0.24 260) 0%, oklch(0.75 0.22 290) 60%, oklch(0.72 0.20 310) 100%)",
            }}
          >
            Innovate
          </span>{" "}
          with Custom SaaS Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Trusted by e-commerce businesses on Shopify, BigCommerce, and Wix to
          build the apps that power their growth — from real-time auctions to
          full-stack management platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            type="button"
            data-ocid="hero.get_started_button"
            onClick={() => scrollTo(SECTION_IDS.CONTACT)}
            className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white shadow-elevated"
          >
            Get Started <ArrowRight size={18} />
          </button>
          <button
            type="button"
            data-ocid="hero.book_demo_button"
            onClick={() => scrollTo(SECTION_IDS.CONTACT)}
            className="btn-outline-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
          >
            <Play size={16} className="fill-current" /> Book a Demo
          </button>
        </motion.div>

        {/* Dashboard visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Glow ring */}
          <div
            className="absolute -inset-4 rounded-2xl opacity-30 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.70 0.24 260 / 0.4), oklch(0.75 0.22 290 / 0.4))",
            }}
          />
          <div className="relative rounded-2xl border border-border/40 overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
            {/* Browser chrome bar */}
            <div className="relative z-10 h-10 glass-blur flex items-center gap-2 px-4 border-b border-border/30">
              <span className="w-3 h-3 rounded-full bg-destructive/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <div className="flex-1 mx-4 h-5 rounded-md bg-muted/40 flex items-center justify-center">
                <span className="text-[10px] text-muted-foreground font-mono">
                  webwhistl.com
                </span>
              </div>
            </div>

            {/* Desktop: static dashboard mockup — Mobile: static placeholder */}
            <div className="hidden lg:block">
              <DashboardMockup />
            </div>
            <div className="block lg:hidden">
              <MobileMockupContent />
            </div>
          </div>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[13px] text-muted-foreground"
        >
          {[
            { metric: "50+", label: "Projects Delivered" },
            { metric: "3", label: "Verticals Served" },
            { metric: "100%", label: "Custom-Built" },
            { metric: "24/7", label: "Support SLA" },
          ].map(({ metric, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className="text-lg font-bold font-display bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, oklch(0.68 0.24 260), oklch(0.74 0.22 290))",
                }}
              >
                {metric}
              </span>
              <span className="text-muted-foreground/70">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
