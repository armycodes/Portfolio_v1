import { motion } from "framer-motion";
import { TextReveal } from "@/components/system/TextReveal";

interface SectionTitleProps {
  /** Sequential position in the page, rendered as Nº001, Nº002, etc. */
  index?: number;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const numeral = typeof index === "number" ? `Nº${String(index).padStart(3, "0")}` : null;

  return (
    <div className={`mb-14 md:mb-20 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {(numeral || eyebrow) && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-mono-label text-xs text-[var(--color-accent)] mb-4 font-medium flex items-center gap-2"
        >
          {numeral && <span className="text-[var(--color-text-secondary)]">{numeral}</span>}
          {numeral && eyebrow && <span className="text-[var(--color-text-secondary)]">/</span>}
          {eyebrow && <span>{eyebrow}</span>}
        </motion.p>
      )}
      <TextReveal
        as="h2"
        className="font-[var(--font-heading)] text-4xl md:text-5xl font-semibold text-balance flex items-start gap-3"
      >
        <span className="text-[var(--color-accent)] leading-none">●</span>
        <span>{title}</span>
      </TextReveal>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
