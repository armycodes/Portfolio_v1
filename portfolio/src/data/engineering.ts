import type { WorkflowStep, EngineeringPrinciple } from "@/types";

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { label: "Requirements", description: "Understand the actual problem before naming a solution." },
  { label: "Architecture", description: "Decide the shape of the system before writing implementation code." },
  { label: "Documentation", description: "Write down the design so ambiguity surfaces before it costs time." },
  { label: "Implementation", description: "Build to the design, using AI to accelerate — not replace — judgment." },
  { label: "Testing", description: "Validate against real data and real constraints, not just green checks." },
  { label: "Iteration", description: "Revise based on what testing revealed, not what looked convenient." },
  { label: "Deployment", description: "Ship with observability in place, not as an afterthought." },
];

export const PERSONALITY_TRAITS: EngineeringPrinciple[] = [
  {
    title: "Curious by default.",
    description: "I ask 'why' before 'how' — it's the same instinct whether I'm debugging a pipeline or reading a chapter twice.",
  },
  {
    title: "Calm under ambiguity.",
    description: "Unclear requirements and blank pages don't rattle me; I'd rather sit with the uncertainty than rush past it.",
  },
  {
    title: "Genuinely easy to work with.",
    description: "I ask questions early, say when I'm stuck, and take feedback as information, not a verdict.",
  },
];

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    title: "Documentation before coding.",
    description:
      "A design doc is where the hard questions get asked cheaply, before they're expensive to answer.",
  },
  {
    title: "Architecture before implementation.",
    description:
      "The shape of a system should be a decision, not an accident of the order features were built in.",
  },
  {
    title: "Maintainability over shortcuts.",
    description:
      "A shortcut that saves an hour today can cost a week later — I weigh both sides before taking it.",
  },
  {
    title: "AI accelerates implementation but never replaces engineering judgment.",
    description:
      "I use AI heavily to move faster on execution, while keeping architectural and correctness decisions mine.",
  },
  {
    title: "Systems thinking before framework thinking.",
    description:
      "I reach for the right abstraction because the problem calls for it, not because a framework encourages it.",
  },
];
