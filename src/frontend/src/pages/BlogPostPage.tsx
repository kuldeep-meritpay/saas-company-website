import { BLOG_POSTS } from "@/lib/constants";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

type BlogPost = (typeof BLOG_POSTS)[number];

function InlineParts({ text, prefix }: { text: string; prefix: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  const nodes = parts.map((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={`${prefix}-${part.substring(0, 16)}`}
          className="text-foreground font-semibold"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={`${prefix}-${part.substring(0, 16)}`}>{part}</span>;
  });
  return <>{nodes}</>;
}

function ParagraphParts({ block, bk }: { block: string; bk: string }) {
  const parts = block.split(/(\*\*[^*]+\*\*|\[.+?\]\(.+?\))/g);
  const nodes = parts.map((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={`${bk}-${part.substring(0, 16)}`}
          className="text-foreground font-semibold"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[(.+?)\]\((.+?)\)$/);
    if (linkMatch) {
      const dest = linkMatch[2];
      if (dest.startsWith("/")) {
        return (
          <Link
            key={`${bk}-${part.substring(0, 16)}`}
            to={dest as "/contact" | "/blog"}
            className="text-primary underline underline-offset-2 hover:opacity-80 transition-smooth"
          >
            {linkMatch[1]}
          </Link>
        );
      }
      return (
        <a
          key={`${bk}-${part.substring(0, 16)}`}
          href={dest}
          className="text-primary underline underline-offset-2 hover:opacity-80 transition-smooth"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return <span key={`${bk}-${part.substring(0, 16)}`}>{part}</span>;
  });
  return <>{nodes}</>;
}

function renderBlock(block: string, bk: string): ReactNode {
  if (block.startsWith("## ")) {
    return (
      <h2
        key={bk}
        className="font-display font-bold text-2xl text-foreground mt-10 mb-4"
      >
        {block.replace("## ", "")}
      </h2>
    );
  }
  if (block.startsWith("# ")) {
    return (
      <h1
        key={bk}
        className="font-display font-bold text-3xl text-foreground mt-10 mb-4"
      >
        {block.replace("# ", "")}
      </h1>
    );
  }
  if (block.startsWith("- ")) {
    const items = block.split("\n").filter(Boolean);
    return (
      <ul
        key={bk}
        className="space-y-2 my-4 pl-5 list-disc text-muted-foreground"
      >
        {items.map((item, j) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static markdown, content never reordered
          <li key={`${bk}li${j}`} className="text-base leading-relaxed">
            <InlineParts
              text={item.replace(/^-\s*/, "")}
              prefix={`${bk}li${j}p`}
            />
          </li>
        ))}
      </ul>
    );
  }
  if (block.match(/^\d+\. /)) {
    const items = block.split("\n").filter(Boolean);
    return (
      <ol
        key={bk}
        className="space-y-2 my-4 pl-5 list-decimal text-muted-foreground"
      >
        {items.map((item, j) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static markdown, content never reordered
          <li key={`${bk}li${j}`} className="text-base leading-relaxed">
            <InlineParts
              text={item.replace(/^\d+\.\s*/, "")}
              prefix={`${bk}li${j}p`}
            />
          </li>
        ))}
      </ol>
    );
  }
  return (
    <p
      key={bk}
      className="text-base text-muted-foreground leading-relaxed my-4"
    >
      <ParagraphParts block={block} bk={bk} />
    </p>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const post = BLOG_POSTS.find((p) => p.slug === slug) as BlogPost | undefined;

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center px-4">
        <h1 className="font-display font-bold text-4xl text-foreground">
          Article Not Found
        </h1>
        <p className="text-muted-foreground">
          This article doesn't exist or may have been moved.
        </p>
        <Link
          to="/blog"
          className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  const paragraphs = post.content
    .trim()
    .split(/\n{2,}/)
    .filter(Boolean);

  return (
    <div data-ocid="blog_post_page.page">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              data-ocid="blog_post_page.back_link"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth mb-8"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div
              className="inline-flex items-center self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 mt-2"
              style={{
                background: `${post.tagColor}18`,
                color: post.tagColor,
                border: `1px solid ${post.tagColor}30`,
              }}
            >
              {post.tag}
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            data-ocid="blog_post_page.article"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-none"
          >
            {paragraphs.map((block, i) => renderBlock(block, `b${i}`))}
          </motion.article>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 rounded-2xl border glass-blur text-center"
            style={{ borderColor: `${post.tagColor}30` }}
          >
            <h3 className="font-display font-bold text-2xl text-foreground mb-3">
              Ready to get started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's talk about how WebWhistl can build the right solution for
              your business.
            </p>
            <Link
              to="/contact"
              data-ocid="blog_post_page.cta_button"
              className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
            >
              Book a Free Discovery Call
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
