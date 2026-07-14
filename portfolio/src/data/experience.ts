import type { Experience } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    id: "vge",
    company: "VGE — Geotechnical Automation Platform",
    role: "AI / ML Research Intern",
    duration: "2026 — Present",
    summary:
      "Building the automation layer that turns raw soil investigation PDF reports into structured, design-ready geotechnical parameters.",
    responsibilities: [
      "Own the statistical modeling layer that derives characteristic design parameters from raw lab and field data.",
      "Built a linear regression pipeline across multiple SPT borehole experiments to correlate N-values with depth.",
      "Translate regression outputs into Cohesion and Friction Angle estimates used downstream in design workflows.",
      "Validate model output against real lab reports — triaxial and direct-shear test data — before sign-off.",
      "Collaborate with the lead engineer to resolve domain-specific ambiguities before implementation is finalized.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "NumPy",
      "Pandas",
      "Next.js",
      "TypeScript",
    ],
    practices: [
      "Write a short design document before writing implementation code, especially where a formula or engineering definition is ambiguous.",
      "Prototype against real, messy source data — not synthetic data — before generalizing a module.",
      "Treat unresolved domain questions as blockers worth surfacing early, not edge cases to patch later.",
    ],
    learnings: [
      "A regression that is statistically correct can still be physically meaningless — model output has to be checked against domain constraints, not just R².",
      "Unit mismatches are silent and expensive; a formula that is off by an order of magnitude often means the input basis was wrong, not the model.",
    ],
    impact:
      "The regression module is one part of a platform intended to replace manual extraction and calculation from soil investigation reports, cutting a multi-hour manual process down to minutes once validated.",
  },
  {
    id: "pipebit",
    company: "Pipebit",
    role: "Backend Engineering Intern",
    duration: "2025",
    summary:
      "Worked across API design, data pipelines, and service reliability in a small, fast-moving backend team.",
    responsibilities: [
      "Designed and shipped REST endpoints consumed by internal and partner-facing services.",
      "Improved query performance on high-traffic tables through indexing and query restructuring.",
      "Added structured logging and monitoring to reduce time-to-diagnosis on production incidents.",
      "Paired with senior engineers on code review, learning to reason about failure modes before shipping.",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "AWS"],
    practices: [
      "Write the API contract and review it with the team before implementation begins.",
      "Treat tests as documentation of expected behavior, not a formality to pass CI.",
      "Default to boring, well-understood solutions over novel ones unless there's a clear reason not to.",
    ],
    learnings: [
      "Most production incidents trace back to an assumption that was never written down — documentation is a reliability tool, not just a courtesy.",
      "Shipping fast and shipping carefully aren't opposites once you build the right checks into the workflow.",
    ],
    impact:
      "Reduced average incident diagnosis time by improving observability on core services, and contributed endpoints that became part of the primary partner integration surface.",
  },
];
