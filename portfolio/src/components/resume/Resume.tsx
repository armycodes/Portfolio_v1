import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export function Resume() {
  return (
    <SectionContainer id="resume">
      <SectionTitle index={8} eyebrow="Resume" title="The short version, on paper." />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        <div className="w-20 h-20 rounded-xl bg-[var(--color-accent-soft)] flex items-center justify-center shrink-0">
          <FileText className="text-[var(--color-accent)]" size={32} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-[var(--font-heading)] text-xl font-semibold mb-2">
            Siri Mahalaxmi Vemula — Resume
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            A concise summary of experience, projects, and technical skills — one page, kept current.
          </p>
        </div>
        <Button as="a" href="/resume.pdf" download variant="primary" className="shrink-0">
          <Download size={16} />
          Download PDF
        </Button>
      </motion.div>
    </SectionContainer>
  );
}
