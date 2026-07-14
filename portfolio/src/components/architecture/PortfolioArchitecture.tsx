import { motion } from "framer-motion";
import { Monitor, Code2, Server, Database, ArrowRight, ArrowDown } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ARCHITECTURE_STAGES } from "@/data/architecture";

const ICONS = [Monitor, Code2, Server, Database];

const FLOAT_VARIANTS = [
  { y: [0, -10, 0], duration: 5.2 },
  { y: [0, -14, 0], duration: 6.1 },
  { y: [0, -9, 0], duration: 5.7 },
  { y: [0, -12, 0], duration: 6.6 },
];

export function PortfolioArchitecture() {
  return (
    <SectionContainer id="architecture">
      <SectionTitle
        index={5}
        eyebrow="System Architecture"
        title="How this portfolio itself is built."
        description="Same engineering discipline turned on my own site — a quick look under the hood, request to response."
      />

      <div className="relative">
        {/* Connector line — desktop only, runs behind the floating stage cards */}
        <div className="hidden lg:block absolute left-0 right-0 top-[64px] h-px bg-[var(--color-border)]">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="h-full bg-[var(--color-accent)]"
          />
          {/* Flowing data-pulse travelling left to right, looping */}
          <motion.span
            aria-hidden="true"
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-accent)]"
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.6 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
          {ARCHITECTURE_STAGES.map((stage, i) => {
            const Icon = ICONS[i];
            const float = FLOAT_VARIANTS[i % FLOAT_VARIANTS.length];
            return (
              <div key={stage.id} className="relative flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <motion.div
                    animate={{ y: float.y }}
                    transition={{
                      duration: float.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className="cursor-hover rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 flex flex-col items-center text-center gap-3 hover:border-[var(--color-accent)] transition-colors duration-300"
                  >
                    <span className="text-mono-label text-[10px] text-[var(--color-accent)]">
                      {stage.label}
                    </span>
                    <span className="w-11 h-11 rounded-full bg-[var(--color-accent-soft)] flex items-center justify-center text-[var(--color-accent)]">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <h3 className="font-[var(--font-heading)] text-base font-semibold">
                      {stage.title}
                    </h3>
                    <ul className="flex flex-wrap justify-center gap-1.5">
                      {stage.items.map((item) => (
                        <li
                          key={item}
                          className="text-[10px] text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded-full px-2 py-1 whitespace-nowrap"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    {stage.note && (
                      <p className="text-[10px] text-[var(--color-text-secondary)]/70 italic mt-1">
                        {stage.note}
                      </p>
                    )}
                  </motion.div>
                </motion.div>

                {/* Mobile connector between stacked stages */}
                {i < ARCHITECTURE_STAGES.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="lg:hidden py-2 text-[var(--color-accent)]"
                  >
                    <ArrowDown size={16} />
                  </motion.div>
                )}

                {/* Desktop arrow between columns */}
                {i < ARCHITECTURE_STAGES.length - 1 && (
                  <span className="hidden lg:flex absolute top-[58px] -right-3 text-[var(--color-accent)] z-10">
                    <ArrowRight size={14} />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
