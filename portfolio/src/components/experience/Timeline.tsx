import { motion } from "framer-motion";
import type { Experience } from "@/types";
import { Tag } from "@/components/ui/Tag";

interface TimelineEntryProps {
  experience: Experience;
  isLast: boolean;
}

export function TimelineEntry({ experience, isLast }: TimelineEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 md:pl-14"
    >
      <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
      {!isLast && (
        <span className="absolute left-[4.5px] top-5 bottom-[-3.5rem] w-px bg-[var(--color-border)]" />
      )}

      <div className="pb-14">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
          <h3 className="font-[var(--font-heading)] text-xl md:text-2xl font-semibold">
            {experience.role}
          </h3>
          <span className="text-sm text-[var(--color-text-secondary)]">
            {experience.duration}
          </span>
        </div>
        <p className="text-[var(--color-accent)] text-sm font-medium mb-4">
          {experience.company}
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-2xl">
          {experience.summary}
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)] mb-3">
              Responsibilities
            </h4>
            <ul className="space-y-2">
              {experience.responsibilities.map((r) => (
                <li key={r} className="text-sm text-[var(--color-text-secondary)] leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)] mb-3">
              Engineering Practices
            </h4>
            <ul className="space-y-2">
              {experience.practices.map((p) => (
                <li key={p} className="text-sm text-[var(--color-text-secondary)] leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)] mb-3">
            Key Learnings
          </h4>
          <ul className="space-y-2">
            {experience.learnings.map((l) => (
              <li key={l} className="editorial-quote text-base text-[var(--color-text-primary)] leading-relaxed">
                “{l}”
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          <span className="text-[var(--color-text-primary)] font-medium">Impact — </span>
          {experience.impact}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
