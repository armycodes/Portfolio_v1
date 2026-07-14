import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { GithubIcon } from "@/components/ui/icons";

interface ProjectRowProps {
  project: Project;
  index: number;
}

export function ProjectRow({ project, index }: ProjectRowProps) {
  const [hovered, setHovered] = useState(false);
  const isComingSoon = project.status === "coming-soon";

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="index-row group relative grid md:grid-cols-12 items-center gap-3 md:gap-6 py-7 md:py-9"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="md:col-span-1 text-mono-label text-xs text-[var(--color-text-secondary)]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="md:col-span-6 flex items-center gap-4">
        <motion.h3
          animate={{ x: hovered ? 8 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`font-[var(--font-heading)] text-2xl md:text-4xl font-semibold tracking-tight transition-colors duration-300 ${
            hovered ? "text-[var(--color-accent)]" : "text-[var(--color-text-primary)]"
          }`}
        >
          {project.name}
        </motion.h3>
        {isComingSoon && (
          <span className="text-mono-label text-[10px] text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded-full px-2 py-1">
            In development
          </span>
        )}
      </div>

      <p className="md:col-span-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
        {project.tagline}
      </p>

      <div className="md:col-span-2 flex items-center justify-start md:justify-end gap-3">
        <div className="hidden lg:flex flex-wrap gap-2 justify-end">
          {project.technologies.slice(0, 2).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        {project.github && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(project.github, "_blank", "noreferrer");
            }}
            aria-label={`${project.name} on GitHub`}
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </button>
        )}
        <motion.span
          animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0 }}
          className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors"
        >
          <ArrowUpRight size={18} />
        </motion.span>
      </div>
    </motion.div>
  );

  if (isComingSoon) {
    return <div className="cursor-default">{inner}</div>;
  }

  return (
    <Link to={`/projects/${project.slug}`} className="block cursor-hover">
      {inner}
    </Link>
  );
}
