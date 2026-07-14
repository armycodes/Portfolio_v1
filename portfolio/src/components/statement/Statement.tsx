import { motion } from "framer-motion";
import { TextReveal } from "@/components/system/TextReveal";
import { ScrollFillText } from "@/components/system/ScrollFillText";

export function Statement() {
  return (
    <section className="border-t border-[var(--color-border)] py-20 md:py-32 overflow-hidden">
      <div className="container-page">
        <p className="text-mono-label text-xs text-[var(--color-text-secondary)] mb-10 md:mb-14 flex items-center gap-2">
          <span>Nº003b</span>
          <span>/</span>
          <span>Statement</span>
        </p>

        <TextReveal
          as="p"
          className="editorial-quote text-xl md:text-2xl text-[var(--color-text-secondary)] mb-6 md:mb-8"
        >
          In 2026, sure &mdash; AI can code.
        </TextReveal>

        <div className="mb-10 md:mb-14">
          <TextReveal
            as="p"
            delay={0.1}
            className="text-display text-[11vw] md:text-[5.2rem] leading-[0.92] text-balance text-stroke"
          >
            BUT IS IT A
          </TextReveal>
          <TextReveal
            as="p"
            delay={0.2}
            className="text-display text-[11vw] md:text-[5.2rem] leading-[0.92] text-balance"
          >
            SYSTEMS THINKER?
          </TextReveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl"
        >
          <ScrollFillText
            text="It can never be as good as a human — that's where I come in."
            className="editorial-quote text-2xl md:text-4xl leading-snug text-[var(--color-text-secondary)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
