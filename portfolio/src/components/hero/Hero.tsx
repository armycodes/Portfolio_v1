import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { TextReveal } from "@/components/system/TextReveal";
import { Magnetic } from "@/components/system/Magnetic";

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const MARQUEE_WORDS = [
  "SOFTWARE ENGINEER",
  "BUILDER",
  "WRITER",
  "SYSTEMS THINKER",
  "OPEN TO WORK",
];

export function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-0 grain overflow-hidden">
      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8 md:mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] shrink-0" />
          <span className="text-mono-label text-xs md:text-sm tracking-[0.35em] text-[var(--color-text-secondary)]">
            Software Engineer
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={item}
          className="flex items-center justify-between text-mono-label text-[11px] text-[var(--color-text-secondary)] mb-10 md:mb-14"
        >
          <span>v.01 &mdash;&mdash;&mdash; Welcome &mdash;&mdash;&mdash; //</span>
          <span className="hidden sm:inline">Based in India</span>
        </motion.div>

        <h1 className="text-display text-[15vw] md:text-[7.2rem] text-balance">
          <TextReveal as="span" className="block">
            Siri
          </TextReveal>
          <TextReveal as="span" className="block text-stroke" delay={0.08}>
            Mahalaxmi
          </TextReveal>
        </h1>

        <motion.div
          initial="hidden"
          animate="show"
          variants={item}
          transition={{ delay: 0.3 }}
          className="mt-8 md:mt-10 grid md:grid-cols-12 gap-6 md:gap-10 items-end"
        >
          <p className="md:col-span-7 editorial-quote text-2xl md:text-4xl leading-snug text-[var(--color-text-primary)]">
            I build software with engineering discipline &mdash; and write
            about how I got there.
          </p>

          <div className="md:col-span-5 flex md:justify-end gap-3">
            <Magnetic>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] text-[#090909] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-accent-dim)]"
              >
                View Work
                <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Resume
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-10 mt-16 md:mt-24 border-y border-[var(--color-border)] py-4 md:py-5 overflow-hidden"
      >
        <div className="marquee-track">
          {[0, 1].map((groupIdx) => (
            <div className="marquee-group" key={groupIdx} aria-hidden={groupIdx === 1}>
              {MARQUEE_WORDS.map((word, i) => (
                <span key={`${groupIdx}-${i}`} className="flex items-center">
                  <span className="text-mono-label text-xs md:text-sm px-6 md:px-8 text-[var(--color-text-secondary)]">
                    {word}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-col items-center gap-3 py-8 md:py-10 text-[var(--color-text-secondary)]"
      >
        <span className="text-mono-label text-[10px]">Scroll Down &mdash; Or Hold to Skim</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-10% 0px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mt-4 md:mt-8 py-6 md:py-8 flex items-center justify-center gap-4 md:gap-6"
      >
        <span className="hidden sm:block h-px flex-1 bg-[var(--color-border)]" />
        <span className="editorial-quote text-2xl md:text-4xl text-[var(--color-text-secondary)] whitespace-nowrap">
          Siri Mahalaxmi
        </span>
        <span className="hidden sm:block h-px flex-1 bg-[var(--color-border)]" />
      </motion.div>
    </section>
  );
}
