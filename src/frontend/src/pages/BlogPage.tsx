import { BLOG_POSTS } from "@/lib/constants";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function BlogPage() {
  return (
    <div data-ocid="blog_page.page">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              <BookOpen size={12} />
              Resources & Insights
            </span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-foreground mb-4 leading-tight">
              The WebWhistl Blog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Engineering deep-dives, SaaS best practices, and industry insights
              from our product and engineering teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map(
              ({ slug, title, tag, tagColor, excerpt, date, readTime }, i) => (
                <motion.div
                  key={slug}
                  data-ocid={`blog_page.item.${i + 1}`}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group flex flex-col rounded-2xl border border-border/50 glass-blur hover:shadow-glass hover:border-border transition-smooth overflow-hidden"
                >
                  <div
                    className="h-1.5 w-full"
                    style={{
                      background: `linear-gradient(90deg, ${tagColor}, ${tagColor}60)`,
                    }}
                  />
                  <div className="flex flex-col flex-1 p-6">
                    <span
                      className="inline-flex items-center self-start text-xs font-semibold px-3 py-1 rounded-full mb-4"
                      style={{
                        background: `${tagColor}18`,
                        color: tagColor,
                        border: `1px solid ${tagColor}30`,
                      }}
                    >
                      {tag}
                    </span>
                    <h2 className="font-display font-bold text-base text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                      {title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                      {excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {readTime}
                        </span>
                      </div>
                      <Link
                        to="/blog/$slug"
                        params={{ slug }}
                        data-ocid={`blog_page.read_more_link.${i + 1}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold hover:gap-2 transition-smooth"
                        style={{ color: tagColor }}
                      >
                        Read More <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
