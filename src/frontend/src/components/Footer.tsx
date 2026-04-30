import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
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
      className="bg-card border-t border-border/50 mt-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg btn-primary-gradient flex items-center justify-center shadow-glass">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                {COMPANY.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {COMPANY.tagline}. We build scalable SaaS platforms that power the
              next generation of digital businesses.
            </p>
            {/* Social links */}
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

          {/* Quick nav */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.sectionId}>
                  <button
                    type="button"
                    data-ocid={`footer.nav_link.${link.sectionId}`}
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Get in Touch
            </h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Ready to build something great? Let's talk about your SaaS vision.
            </p>
            <a
              data-ocid="footer.email_link"
              href={`mailto:${COMPANY.email}`}
              className="text-sm font-medium text-primary hover:underline transition-smooth"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
