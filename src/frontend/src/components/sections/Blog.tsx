import { BLOG_POSTS } from "@/lib/constants";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function Blog() {
  return (
    <section
      data-ocid="blog.section"
      className="py-24 section-alternate"
      id="blog"
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
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4"
            style={{
              border: "1px solid oklch(0.68 0.24 260 / 0.25)",
              background: "oklch(0.68 0.24 260 / 0.07)",
              color: "oklch(0.68 0.24 260)",
            }}
          >
            <BookOpen size={11} />
            Resources &amp; Insights
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4 tracking-[-0.02em]">
            Latest from Our Blog
          </h2>
          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
            Practical guides, industry trends, and case studies from our
            engineering and product teams.
          </p>
        </motion.div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map(
            ({ slug, title, tag, tagColor, excerpt, date, readTime }, i) => (
              <motion.div
                key={slug}
                data-ocid={`blog.item.${i + 1}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group flex flex-col rounded-xl border border-border/35 bg-card/50 hover:border-border/65 hover:bg-card/80 hover:shadow-sm transition-all duration-200 overflow-hidden"
              >
                {/* Header accent bar */}
                <div
                  className="h-[3px] w-full"
                  style={{
                    background: `linear-gradient(90deg, ${tagColor}, ${tagColor}50)`,
                  }}
                />

                <div className="flex flex-col flex-1 p-5">
                  {/* Tag — ngrok pill style */}
                  <span
                    className="inline-flex items-center self-start text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-4"
                    style={{
                      background: `${tagColor}14`,
                      color: tagColor,
                      border: `1px solid ${tagColor}28`,
                    }}
                  >
                    {tag}
                  </span>

                  {/* Title */}
                  <h3 className="font-semibold text-[14.5px] text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-150">
                    {title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[13px] text-muted-foreground/75 leading-relaxed mb-5 flex-1">
                    {excerpt}
                  </p>

                  {/* Meta + CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-[11.5px] text-muted-foreground/70">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {readTime}
                      </span>
                    </div>
                    <button
                      type="button"
                      data-ocid={`blog.read_more_link.${i + 1}`}
                      className="inline-flex items-center gap-1 text-[12px] font-semibold transition-colors duration-150 hover:gap-2 bg-transparent border-0 p-0 cursor-pointer"
                      style={{ color: tagColor }}
                      onClick={() => {
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Read More <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
