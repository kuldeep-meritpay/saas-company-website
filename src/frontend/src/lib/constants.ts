export const SECTION_IDS = {
  HOME: "home",
  SERVICES: "services",
  PRODUCTS: "products",
  WHY_US: "why-us",
  TECH_STACK: "tech-stack",
  TESTIMONIALS: "testimonials",
  CONTACT: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export interface NavLink {
  label: string;
  href: string;
  sectionId: SectionId;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: `#${SECTION_IDS.HOME}`, sectionId: SECTION_IDS.HOME },
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
    label: "Contact",
    href: `#${SECTION_IDS.CONTACT}`,
    sectionId: SECTION_IDS.CONTACT,
  },
];

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
