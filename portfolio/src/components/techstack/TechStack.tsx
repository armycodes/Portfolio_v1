import { motion } from "framer-motion";
import { Code2, Layout, Server, Cloud, Wrench } from "lucide-react";
import { TECH_STACK } from "@/data/techstack";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";

const CATEGORY_ICON: Record<string, typeof Code2> = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  Cloud: Cloud,
  "Developer Tools": Wrench,
};

const CATEGORY_NOTE: Record<string, string> = {
  Backend: "Flexible beyond this — I pick what the project actually needs.",
};

export function TechStack() {
  return (
    <SectionContainer id="tech-stack">
      <SectionTitle
        index={7}
        eyebrow="Tech Stack"
        title="Tools I reach for, and why."
        description="Grouped by where they sit in a system — not ranked, since the right tool depends entirely on the problem."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TECH_STACK.map((group, i) => {
          const Icon = CATEGORY_ICON[group.category] ?? Code2;
          const note = CATEGORY_NOTE[group.category];
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-7 transition-colors duration-300 hover:border-[var(--color-accent)]/40"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[var(--color-accent-soft)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-border)] text-[var(--color-accent)] transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent-soft)]">
                  <Icon size={16} />
                </span>
                <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {group.category}
                </h3>
              </div>

              <div className="relative flex flex-wrap gap-2 mb-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-[var(--color-text-primary)] bg-white/[0.03] border border-[var(--color-border)] rounded-full px-3.5 py-1.5 whitespace-nowrap transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {note && (
                <p className="relative mt-4 text-xs text-[var(--color-text-secondary)] italic leading-relaxed">
                  {note}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
