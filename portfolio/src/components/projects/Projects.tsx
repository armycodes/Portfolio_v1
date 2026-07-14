import { PROJECTS } from "@/data/projects";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectRow } from "./ProjectRow";

export function Projects() {
  return (
    <SectionContainer id="projects">
      <div className="flex items-end justify-between gap-6 mb-14 md:mb-16">
        <SectionTitle
          index={3}
          eyebrow="Projects"
          title="Case studies, not showcases."
          description="Each project below is a record of a real problem, the architecture I chose, and the trade-offs that came with it."
        />
        <span className="hidden md:block text-mono-label text-xs text-[var(--color-text-secondary)] mb-14 md:mb-16">
          {PROJECTS.length} PROJECTS
        </span>
      </div>

      <div>
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionContainer>
  );
}
