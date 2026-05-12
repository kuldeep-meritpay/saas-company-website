import { COMPANY } from "@/lib/constants";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using webwhistl.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.",
  },
  {
    title: "Services",
    content:
      "WebWhistl provides custom software development, SaaS application development, AI/ML integration, and related technology consulting services. All service engagements are governed by separate signed agreements between WebWhistl and the client.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website — including text, graphics, logos, and code — is the property of WebWhistl and protected by applicable intellectual property laws. Custom software developed for clients is owned by the client as specified in the project agreement.",
  },
  {
    title: "Use of Website",
    content:
      "You may use this website for lawful purposes only. You agree not to use the site in any way that could damage, disable, or impair it, or interfere with other users' access. Unauthorized scraping, data harvesting, or reverse engineering is prohibited.",
  },
  {
    title: "Contact Form",
    content:
      "Submitting a contact form does not create a client relationship or any obligation on WebWhistl's part. Responding to an inquiry is at our sole discretion. No confidential or proprietary information should be submitted through the contact form.",
  },
  {
    title: "Disclaimer of Warranties",
    content:
      "This website is provided on an 'as is' basis without warranties of any kind. WebWhistl does not warrant that the website will be uninterrupted, error-free, or free from viruses or other harmful components.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, WebWhistl shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services.",
  },
  {
    title: "Governing Law",
    content:
      "These terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.",
  },
  {
    title: "Changes to Terms",
    content:
      "We reserve the right to update these terms at any time. Changes will be posted on this page with an updated date. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <div data-ocid="terms_page.page">
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-5xl text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2025 &nbsp;·&nbsp; Applies to all users
              of{" "}
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
          <div className="space-y-10">
            {SECTIONS.map(({ title, content }, i) => (
              <motion.div
                key={title}
                data-ocid={`terms_page.section.${i + 1}`}
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
              data-ocid="terms_page.home_link"
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
