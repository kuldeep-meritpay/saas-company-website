import { motion } from "motion/react";

const CLIENTS = [
  {
    id: "retailmax-1",
    name: "RetailMax",
    color: "oklch(0.70 0.24 260)",
    letter: "R",
  },
  {
    id: "stayease-1",
    name: "StayEase",
    color: "oklch(0.75 0.22 290)",
    letter: "S",
  },
  {
    id: "tripnova-1",
    name: "TripNova",
    color: "oklch(0.68 0.20 200)",
    letter: "T",
  },
  {
    id: "propertyhub-1",
    name: "PropertyHub",
    color: "oklch(0.72 0.22 320)",
    letter: "P",
  },
  {
    id: "shopflow-1",
    name: "ShopFlow",
    color: "oklch(0.70 0.24 260)",
    letter: "S",
  },
  {
    id: "cloudventures-1",
    name: "CloudVentures",
    color: "oklch(0.65 0.20 230)",
    letter: "C",
  },
  {
    id: "movein-1",
    name: "MoveIn",
    color: "oklch(0.73 0.20 175)",
    letter: "M",
  },
  {
    id: "bookitnow-1",
    name: "BookItNow",
    color: "oklch(0.76 0.24 295)",
    letter: "B",
  },
  {
    id: "retailmax-2",
    name: "RetailMax",
    color: "oklch(0.70 0.24 260)",
    letter: "R",
  },
  {
    id: "stayease-2",
    name: "StayEase",
    color: "oklch(0.75 0.22 290)",
    letter: "S",
  },
  {
    id: "tripnova-2",
    name: "TripNova",
    color: "oklch(0.68 0.20 200)",
    letter: "T",
  },
  {
    id: "propertyhub-2",
    name: "PropertyHub",
    color: "oklch(0.72 0.22 320)",
    letter: "P",
  },
  {
    id: "shopflow-2",
    name: "ShopFlow",
    color: "oklch(0.70 0.24 260)",
    letter: "S",
  },
  {
    id: "cloudventures-2",
    name: "CloudVentures",
    color: "oklch(0.65 0.20 230)",
    letter: "C",
  },
  {
    id: "movein-2",
    name: "MoveIn",
    color: "oklch(0.73 0.20 175)",
    letter: "M",
  },
  {
    id: "bookitnow-2",
    name: "BookItNow",
    color: "oklch(0.76 0.24 295)",
    letter: "B",
  },
];

function ClientCard({
  name,
  color,
  letter,
}: { name: string; color: string; letter: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm mx-3 select-none"
      style={{ minWidth: "160px" }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${color}, ${color}80)` }}
      >
        {letter}
      </div>
      <span className="text-sm font-semibold text-foreground/80 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function ClientsStrip() {
  return (
    <section
      data-ocid="clients-strip.section"
      className="py-14 section-alternate overflow-hidden"
      aria-label="Trusted by companies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
            Trusted By
          </p>
          <h2 className="font-display font-semibold text-2xl text-foreground">
            Clients &amp; Partners
          </h2>
        </motion.div>
      </div>

      {/* Auto-scroll strip — no pause on hover to keep it seamless */}
      <div className="relative">
        {/* Fade edges */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, oklch(var(--muted) / 0.2), transparent)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, oklch(var(--muted) / 0.2), transparent)",
          }}
        />

        <div className="flex overflow-hidden">
          <div className="flex animate-scroll-left" aria-hidden="false">
            {CLIENTS.map((c) => (
              <ClientCard
                key={c.id}
                name={c.name}
                color={c.color}
                letter={c.letter}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
