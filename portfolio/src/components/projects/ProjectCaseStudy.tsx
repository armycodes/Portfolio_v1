import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/icons";

interface ProjectCaseStudyProps {
  project: Project;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-60px" }}
      variants={fadeUp}
      className="py-10 border-t border-[var(--color-border)]"
    >
      <h2 className="text-xs tracking-[0.15em] uppercase text-[var(--color-accent)] mb-4">
        {title}
      </h2>
      {children}
    </motion.div>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <article className="pt-32 pb-24">
      <div className="container-page max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <Badge status={project.status} />
        </div>

        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl font-semibold mb-4 text-balance">
          {project.name}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="flex gap-4 mb-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <ArrowUpRight size={16} /> Live Demo
            </a>
          )}
        </div>

        <Block title="Overview">
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {project.overview}
          </p>
        </Block>

        {project.detail && (
          <>
            <Block title="Problem">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {project.detail.problem}
              </p>
            </Block>

            <Block title="Architecture">
              <ul className="space-y-3">
                {project.detail.architecture.map((a) => (
                  <li
                    key={a}
                    className="text-[var(--color-text-secondary)] leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-accent)]"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Challenges">
              <ul className="space-y-3">
                {project.detail.challenges.map((c) => (
                  <li
                    key={c}
                    className="text-[var(--color-text-secondary)] leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-accent)]"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Trade-offs">
              <ul className="space-y-3">
                {project.detail.tradeoffs.map((t) => (
                  <li
                    key={t}
                    className="text-[var(--color-text-secondary)] leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-accent)]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Lessons Learned">
              <ul className="space-y-4">
                {project.detail.lessons.map((l) => (
                  <li key={l} className="editorial-quote text-lg text-[var(--color-text-primary)] leading-relaxed">
                    “{l}”
                  </li>
                ))}
              </ul>
            </Block>
          </>
        )}
      </div>
    </article>
  );
}
