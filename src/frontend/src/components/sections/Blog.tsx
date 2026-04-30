import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import { SECTION_IDS } from "../../lib/constants";

interface BlogPost {
  title: string;
  tag: string;
  tagColor: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const POSTS: BlogPost[] = [
  {
    title: "How RAG Systems Are Transforming Enterprise Knowledge Management",
    tag: "AI & RAG",
    tagColor: "oklch(0.68 0.26 310)",
    excerpt:
      "Retrieval-Augmented Generation is reshaping how enterprises access their internal knowledge — enabling AI responses grounded in real company data rather than generic training.",
    date: "Apr 18, 2025",
    readTime: "7 min read",
  },
  {
    title: "Building Scalable E-commerce Apps on Shopify & BigCommerce",
    tag: "E-commerce",
    tagColor: "oklch(0.70 0.24 260)",
    excerpt:
      "From real-time auction engines to smart inventory systems, here's how modern SaaS apps are extending the capabilities of Shopify and BigCommerce beyond out-of-the-box.",
    date: "Mar 28, 2025",
    readTime: "5 min read",
  },
  {
    title: "5 Reasons Property Managers Are Moving to SaaS Platforms",
    tag: "PropTech",
    tagColor: "oklch(0.75 0.22 290)",
    excerpt:
      "The shift from spreadsheets and manual processes to integrated SaaS tools is accelerating in property management — and the results speak for themselves.",
    date: "Mar 10, 2025",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <section data-ocid="blog.section" className="py-24 section-alternate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <BookOpen size={12} />
            Resources & Insights
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical guides, industry trends, and case studies from our
            engineering and product teams.
          </p>
        </motion.div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map(({ title, tag, tagColor, excerpt, date, readTime }, i) => (
            <motion.div
              key={title}
              data-ocid={`blog.item.${i + 1}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group flex flex-col rounded-2xl border border-border/50 glass-blur hover:shadow-glass hover:border-border transition-smooth overflow-hidden"
            >
              {/* Header accent */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${tagColor}, ${tagColor}60)`,
                }}
              />

              <div className="flex flex-col flex-1 p-6">
                {/* Tag */}
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

                {/* Title */}
                <h3 className="font-display font-bold text-base text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                  {title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-3">
                  {excerpt}
                </p>

                {/* Meta + CTA */}
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
                  <button
                    type="button"
                    data-ocid={`blog.read_more_button.${i + 1}`}
                    onClick={() =>
                      document
                        .getElementById(SECTION_IDS.CONTACT)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold transition-smooth hover:gap-2"
                    style={{ color: tagColor }}
                  >
                    Read More <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
