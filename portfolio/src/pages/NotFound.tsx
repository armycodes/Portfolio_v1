import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 grain">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-accent)] mb-6">
          404
        </p>
        <h1 className="editorial-quote text-3xl md:text-4xl mb-4 text-balance">
          This page hasn't been written yet.
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-10 max-w-md mx-auto">
          The link you followed may be broken, or the page may have been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-[var(--color-accent)] text-[#090909] hover:bg-[var(--color-accent-dim)] transition-colors duration-300"
        >
          Back to home
        </Link>
      </motion.div>
    </div>
  );
}
