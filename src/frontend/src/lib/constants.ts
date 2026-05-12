export const SECTION_IDS = {
  HOME: "home",
  SERVICES: "services",
  PRODUCTS: "products",
  WHY_US: "why-us",
  TECH_STACK: "tech-stack",
  TESTIMONIALS: "testimonials",
  ABOUT: "about",
  BLOG: "blog",
  CONTACT: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export interface NavLink {
  label: string;
  href: string;
  sectionId?: SectionId;
}

export const SCROLL_NAV_LINKS: NavLink[] = [
  {
    label: "Services",
    href: `#${SECTION_IDS.SERVICES}`,
    sectionId: SECTION_IDS.SERVICES,
  },
  {
    label: "Products",
    href: `#${SECTION_IDS.PRODUCTS}`,
    sectionId: SECTION_IDS.PRODUCTS,
  },
  {
    label: "Why Us",
    href: `#${SECTION_IDS.WHY_US}`,
    sectionId: SECTION_IDS.WHY_US,
  },
  {
    label: "Tech Stack",
    href: `#${SECTION_IDS.TECH_STACK}`,
    sectionId: SECTION_IDS.TECH_STACK,
  },
  {
    label: "About",
    href: `#${SECTION_IDS.ABOUT}`,
    sectionId: SECTION_IDS.ABOUT,
  },
  {
    label: "Blog",
    href: `#${SECTION_IDS.BLOG}`,
    sectionId: SECTION_IDS.BLOG,
  },
  {
    label: "Contact",
    href: `#${SECTION_IDS.CONTACT}`,
    sectionId: SECTION_IDS.CONTACT,
  },
];

// Legacy alias
export const NAV_LINKS = SCROLL_NAV_LINKS;

// No separate page routes any more — everything is on one page
export const PAGE_NAV_LINKS: NavLink[] = [];

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/webwhistl",
  twitter: "https://twitter.com/webwhistl",
  github: "https://github.com/webwhistl",
} as const;

export const COMPANY = {
  name: "WebWhistl",
  tagline: "Engineering the future of digital business",
  website: "https://webwhistl.com",
  email: "hello@webwhistl.com",
} as const;

export const BLOG_POSTS = [
  {
    slug: "rag-systems-enterprise-knowledge",
    title: "How RAG Systems Are Transforming Enterprise Knowledge Management",
    tag: "AI & RAG",
    tagColor: "oklch(0.68 0.26 310)",
    excerpt:
      "Retrieval-Augmented Generation is reshaping how enterprises access their internal knowledge — enabling AI responses grounded in real company data rather than generic training.",
    date: "Apr 18, 2025",
    readTime: "7 min read",
    content: `
Retrieval-Augmented Generation (RAG) represents one of the most significant shifts in enterprise AI adoption. Unlike traditional language models that rely solely on their training data, RAG systems combine the generative power of large language models with a live retrieval layer that pulls from your actual business data.

## Why Generic LLMs Fall Short

Generic AI tools are trained on publicly available data — not your internal documentation, customer history, or proprietary processes. When employees ask these tools about internal workflows or product specifics, the answers are either generic or hallucinated.

RAG solves this by:
- **Indexing your private data** into a vector database (Typesense, Elasticsearch, or Pinecone)
- **Retrieving the most relevant chunks** at query time
- **Grounding LLM responses** in that retrieved context

Ready to explore what RAG could do for your business? [Get in touch](#contact) and we'll scope it out together.
    `,
  },
  {
    slug: "scalable-ecommerce-saas-shopify-bigcommerce",
    title: "Building Scalable E-commerce Apps on Shopify & BigCommerce",
    tag: "E-commerce",
    tagColor: "oklch(0.70 0.24 260)",
    excerpt:
      "From real-time auction engines to smart inventory systems, here's how modern SaaS apps are extending the capabilities of Shopify and BigCommerce beyond out-of-the-box.",
    date: "Mar 28, 2025",
    readTime: "5 min read",
    content: `
Shopify and BigCommerce give merchants a solid e-commerce foundation — but high-growth businesses quickly hit the ceiling of what native features can support. Custom SaaS applications built on top of these platforms are how merchants scale past those limits.

[Talk to us about your e-commerce SaaS project →](#contact)
    `,
  },
  {
    slug: "property-managers-moving-to-saas",
    title: "5 Reasons Property Managers Are Moving to SaaS Platforms",
    tag: "PropTech",
    tagColor: "oklch(0.75 0.22 290)",
    excerpt:
      "The shift from spreadsheets and manual processes to integrated SaaS tools is accelerating in property management — and the results speak for themselves.",
    date: "Mar 10, 2025",
    readTime: "6 min read",
    content: `
Property management has historically been one of the most process-heavy, paperwork-intensive industries. That's changing fast. Here are five reasons why forward-thinking property managers are moving to purpose-built SaaS platforms.

[Schedule a call to discuss your property management needs →](#contact)
    `,
  },
] as const;
