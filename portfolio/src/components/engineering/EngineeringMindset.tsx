import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PersonalityAnimation } from "@/components/ui/PersonalityAnimation";
import { ENGINEERING_PRINCIPLES, PERSONALITY_TRAITS, WORKFLOW_STEPS } from "@/data/engineering";

export function EngineeringMindset() {
  return (
    <SectionContainer id="engineering-mindset">
      <SectionTitle
        index={4}
        eyebrow="Engineering Mindset"
        title="How I approach a problem, in order."
        description="This is the sequence I default to on any non-trivial piece of work — not a rigid process, but a discipline I rarely skip."
      />

      <div className="mb-20 md:mb-28">
        {WORKFLOW_STEPS.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group border-b border-[var(--color-border)] py-6 md:py-10 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10"
          >
            <span className="text-mono-label text-xs md:text-sm text-[var(--color-accent)] shrink-0 md:w-14">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-display text-[13vw] md:text-[5.5rem] leading-[0.9] flex-1 transition-all duration-300 group-hover:text-stroke">
              {step.label}
            </h3>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed md:max-w-xs shrink-0">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {ENGINEERING_PRINCIPLES.map((principle, i) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="border-t border-[var(--color-border)] pt-6"
          >
            <h3 className="font-[var(--font-heading)] text-base font-semibold mb-2">
              {principle.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 md:mt-28 pt-14 md:pt-20 border-t border-[var(--color-border)] grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
        <div>
          <p className="text-mono-label text-xs text-[var(--color-accent)] mb-4">
            Beyond the process
          </p>
          <h3 className="text-2xl md:text-3xl font-[var(--font-heading)] font-semibold mb-5 text-balance">
            The process is only half of it — here's the person running it.
          </h3>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl mb-10">
            Behind the checklist above is someone who's genuinely curious, stays steady when
            things are unclear, and enjoys the work enough to keep showing up for it.
          </p>
          <div className="grid sm:grid-cols-3 gap-x-8 gap-y-8">
            {PERSONALITY_TRAITS.map((trait) => (
              <div key={trait.title}>
                <h4 className="font-[var(--font-heading)] text-sm font-semibold mb-2">
                  {trait.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <PersonalityAnimation
          className="w-40 h-40 md:w-56 md:h-56 shrink-0 justify-self-center"
        />
      </div>
    </SectionContainer>
  );
}
