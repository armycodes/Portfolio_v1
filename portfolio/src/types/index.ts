export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  practices: string[];
  learnings: string[];
  impact: string;
}

export interface ProjectDetail {
  problem: string;
  architecture: string[];
  challenges: string[];
  tradeoffs: string[];
  lessons: string[];
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: "live" | "in-progress" | "coming-soon";
  technologies: string[];
  overview: string;
  detail?: ProjectDetail;
  github?: string;
  demo?: string;
}

export interface WritingCredit {
  id: string;
  role: string;
  publication: string;
  description: string;
  tag: string;
  href: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface WorkflowStep {
  label: string;
  description: string;
}

export interface EngineeringPrinciple {
  title: string;
  description: string;
}
