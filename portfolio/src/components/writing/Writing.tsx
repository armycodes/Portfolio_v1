import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { WRITING_CREDITS, NOVEL_IN_PROGRESS } from "@/data/writing";
import { SOCIAL_LINKS } from "@/constants/nav";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Writing() {
  return (
    <SectionContainer id="writing">
      <SectionTitle
        index={6}
        eyebrow="Writing"
        title="Software engineer by trade, writer by nature."
        description="Outside of engineering, I write — content pieces, features, and a podcast's worth of research. It's the other half of how I think."
      />

      <div className="space-y-0 mb-14 md:mb-20">
        {WRITING_CREDITS.map((credit, i) => (
          <motion.a
            key={credit.id}
            href={credit.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-8 py-8 border-t border-[var(--color-border)] last:border-b"
          >
            <span className="text-xs text-[var(--color-accent)] border border-[var(--color-border)] rounded-full px-3 py-1 md:w-32 text-center shrink-0">
              {credit.tag}
            </span>
            <div className="flex-1">
              <h3 className="font-[var(--font-heading)] text-lg md:text-xl font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                {credit.role}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
                {credit.description}
              </p>
            </div>
            <div className="flex items-center gap-4 md:w-48 shrink-0 md:justify-end">
              <span className="text-xs text-[var(--color-text-secondary)]">
                {credit.publication}
              </span>
              <ArrowUpRight
                size={16}
                className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="grid sm:grid-cols-2 gap-6"
      >
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex items-start gap-4">
          <BookOpen size={22} className="text-[var(--color-accent)] shrink-0 mt-1" />
          <div>
            <p className="text-mono-label text-xs text-[var(--color-text-secondary)] mb-2">
              {NOVEL_IN_PROGRESS.status}
            </p>
            <p className="font-[var(--font-heading)] text-base font-semibold">
              {NOVEL_IN_PROGRESS.title}
            </p>
          </div>
        </div>

        <a
          href={SOCIAL_LINKS.writergram}
          target="_blank"
          rel="noreferrer"
          className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex items-center gap-4 transition-colors hover:border-white/16"
        >
          <InstagramIcon
            className="w-[22px] h-[22px] text-[var(--color-accent)] shrink-0 transition-transform group-hover:scale-110"
          />
          <div className="flex-1">
            <p className="text-mono-label text-xs text-[var(--color-text-secondary)] mb-2">
              Writergram
            </p>
            <p className="font-[var(--font-heading)] text-base font-semibold group-hover:text-[var(--color-accent)] transition-colors">
              Follow the writing on Instagram
            </p>
          </div>
          <ArrowUpRight
            size={16}
            className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </motion.div>
    </SectionContainer>
  );
}
