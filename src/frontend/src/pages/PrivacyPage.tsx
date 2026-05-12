import { COMPANY } from "@/lib/constants";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const SECTIONS = [
  {
    title: "Information We Collect",
    content:
      "When you fill out our contact form, we collect your name, email address, company name, and the message you send. We do not collect payment information directly — any payment processing is handled by PCI-compliant third-party providers.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your contact information solely to respond to your inquiry, provide requested services, and send relevant updates about WebWhistl (with your consent). We do not sell, rent, or share your personal information with third parties for marketing purposes.",
  },
  {
    title: "Data Storage & Security",
    content:
      "Your data is stored on secure cloud servers with encryption at rest and in transit. We implement industry-standard security practices including access controls, regular audits, and vulnerability scanning. We retain contact form submissions for up to 24 months.",
  },
  {
    title: "Cookies",
    content:
      "Our website uses minimal cookies for essential functionality (session state and theme preference). We do not use advertising cookies or third-party tracking pixels. You can disable cookies in your browser settings without affecting site functionality.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to request access to, correction of, or deletion of your personal data at any time. To exercise these rights, email us at hello@webwhistl.com. We will respond to all requests within 30 days.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may use trusted third-party services (such as email delivery providers and analytics tools) that process data on our behalf. These providers are contractually bound to protect your data and may not use it for any other purpose.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this privacy policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the updated policy.",
  },
  {
    title: "Contact Us",
    content: `For privacy-related questions or requests, contact us at ${COMPANY.email}. We aim to respond within 2 business days.`,
  },
];

export default function PrivacyPage() {
  return (
    <div data-ocid="privacy_page.page">
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-5xl text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2025 &nbsp;·&nbsp; Effective for all
              visitors of{" "}
              <a
                href="https://webwhistl.com"
                className="text-primary hover:underline"
              >
                webwhistl.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 p-6 rounded-2xl border border-border/50 bg-card/50"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              {COMPANY.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) is committed to protecting your privacy. This
              policy explains what data we collect, how we use it, and your
              rights regarding that data.
            </p>
          </motion.div>

          <div className="space-y-10">
            {SECTIONS.map(({ title, content }, i) => (
              <motion.div
                key={title}
                data-ocid={`privacy_page.section.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h2 className="font-display font-bold text-xl text-foreground mb-3">
                  {i + 1}. {title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Questions?{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-primary hover:underline"
              >
                {COMPANY.email}
              </a>
            </p>
            <Link
              to="/"
              data-ocid="privacy_page.home_link"
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
