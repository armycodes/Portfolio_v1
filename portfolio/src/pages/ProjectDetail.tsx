import { useParams, Navigate } from "react-router-dom";
import { PROJECTS } from "@/data/projects";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return <ProjectCaseStudy project={project} />;
}
