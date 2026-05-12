import { COMPANY, SCROLL_NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Github, Linkedin, Twitter, Zap } from "lucide-react";

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "webwhistl.com",
  )}`;

  return (
    <footer
      data-ocid="footer"
      className="bg-card border-t border-border/30 mt-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 bg-transparent border-0 p-0 cursor-pointer w-fit"
              aria-label="Scroll to top"
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.68 0.24 260), oklch(0.74 0.22 290))",
                }}
              >
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-semibold text-[15px] tracking-tight text-foreground">
                {COMPANY.name}
              </span>
            </button>
            <p className="text-[13px] text-muted-foreground leading-relaxed max-w-xs">
              {COMPANY.tagline}. Scalable SaaS platforms for the next generation
              of digital businesses.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                data-ocid="footer.linkedin_link"
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WebWhistl on LinkedIn"
                className="w-9 h-9 rounded-lg bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                data-ocid="footer.twitter_link"
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WebWhistl on X (Twitter)"
                className="w-9 h-9 rounded-lg bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                data-ocid="footer.github_link"
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WebWhistl on GitHub"
                className="w-9 h-9 rounded-lg bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section nav */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70 mb-4">
              On This Page
            </h3>
            <ul className="flex flex-col gap-1.5">
              {SCROLL_NAV_LINKS.map((link) => (
                <li key={link.sectionId}>
                  <button
                    type="button"
                    data-ocid={`footer.nav_link.${link.sectionId}`}
                    onClick={() =>
                      link.sectionId && scrollToSection(link.sectionId)
                    }
                    className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150 bg-transparent border-0 p-0 cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company info */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70 mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-1.5">
              <li>
                <button
                  type="button"
                  data-ocid="footer.about_link"
                  onClick={() => scrollToSection("about")}
                  className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150 bg-transparent border-0 p-0 cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-ocid="footer.blog_link"
                  onClick={() => scrollToSection("blog")}
                  className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150 bg-transparent border-0 p-0 cursor-pointer text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-ocid="footer.contact_link"
                  onClick={() => scrollToSection("contact")}
                  className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150 bg-transparent border-0 p-0 cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  data-ocid="footer.privacy_link"
                  href="https://webwhistl.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  data-ocid="footer.terms_link"
                  href="https://webwhistl.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70 mb-4">
              Get in Touch
            </h3>
            <p className="text-[13px] text-muted-foreground mb-3 leading-relaxed">
              Ready to build something great? Let's talk about your SaaS vision.
            </p>
            <a
              data-ocid="footer.email_link"
              href={`mailto:${COMPANY.email}`}
              className="text-[13px] font-medium text-primary hover:underline transition-colors duration-150"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/25 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-muted-foreground/70">
            &copy; {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-[12px] text-muted-foreground/70">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
