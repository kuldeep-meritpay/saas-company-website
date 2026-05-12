import { Link } from "@tanstack/react-router";
import { ArrowRight, Home } from "lucide-react";
import { motion } from "motion/react";

export default function NotFoundPage() {
  return (
    <div
      data-ocid="not_found_page.page"
      className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg"
      >
        <div
          className="font-display font-bold text-[120px] sm:text-[160px] leading-none bg-clip-text text-transparent mb-4"
          style={{
            backgroundImage:
              "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
          }}
        >
          404
        </div>
        <h1 className="font-display font-bold text-3xl text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            data-ocid="not_found_page.home_button"
            className="btn-primary-gradient inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
          >
            <Home size={16} /> Back to Home
          </Link>
          <Link
            to="/contact"
            data-ocid="not_found_page.contact_button"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-border/60 text-foreground hover:bg-muted/40 transition-smooth"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
