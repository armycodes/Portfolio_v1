export interface ArchitectureStage {
  id: string;
  label: string;
  title: string;
  items: string[];
  note?: string;
}

export const ARCHITECTURE_STAGES: ArchitectureStage[] = [
  {
    id: "client",
    label: "01",
    title: "Client",
    items: ["Browser", "Mobile & Desktop"],
  },
  {
    id: "frontend",
    label: "02",
    title: "Frontend",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS v4", "Framer Motion"],
  },
  {
    id: "backend",
    label: "03",
    title: "Backend API",
    items: ["Spring Boot", "Java 21", "Spring Data JPA"],
    note: "Admin routes behind X-Admin-Key auth",
  },
  {
    id: "database",
    label: "04",
    title: "Database",
    items: ["PostgreSQL (prod, via Docker)", "H2 (dev)"],
  },
];
