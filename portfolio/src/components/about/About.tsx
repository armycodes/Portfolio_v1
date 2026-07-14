import { SectionContainer } from "@/components/ui/SectionContainer";
import { ScrollFillText } from "@/components/system/ScrollFillText";

const ABOUT_BLOCKS = [
  {
    heading: "Who I am",
    body:
      "I'm Siri — a software engineer who cares more about whether a system is understood than whether it merely works. My path into engineering started with a simple discomfort: watching software get built on assumptions nobody had written down, and watching those assumptions eventually break something.",
  },
  {
    heading: "Why backend engineering",
    body:
      "I'm drawn to the parts of a system a user never sees — the data model, the pipeline, the contract between services — because that's where the real design decisions live. Backend work rewards precision, and I find that satisfying in a way that's hard to explain to people who haven't felt a bad schema decision come back to bite them six months later.",
  },
  {
    heading: "Why writing",
    body:
      "Writing is how I think, not just how I communicate. A design doc I write before implementation almost always changes the implementation — the act of writing surfaces the questions I would otherwise have discovered the hard way, in production.",
  },
  {
    heading: "Current mission",
    body:
      "Right now, I'm focused on building systems that turn messy, real-world source data into something rigorous and trustworthy — and getting better, every project, at knowing the difference between a shortcut and a decision I'll regret.",
  },
];

export function About() {
  return (
    <SectionContainer id="about">
      <p className="text-mono-label text-xs text-[var(--color-text-secondary)] mb-10 md:mb-14 flex items-center gap-2">
        <span>Nº001</span>
        <span>/</span>
        <span>About</span>
      </p>

      <div className="mb-16 md:mb-24 max-w-3xl">
        <ScrollFillText
          as="blockquote"
          text={`"Every meaningful system begins with understanding the problem."`}
          className="editorial-quote text-3xl md:text-5xl leading-snug block"
        />
      </div>

      <div className="space-y-14 md:space-y-20 max-w-3xl">
        {ABOUT_BLOCKS.map((block) => (
          <div key={block.heading}>
            <ScrollFillText
              as="h3"
              text={block.heading}
              className="text-2xl md:text-3xl font-[var(--font-heading)] font-semibold uppercase tracking-tight mb-4 block"
              dimColor="#4B4B52"
              fillColor="#7FA98B"
            />
            <ScrollFillText
              as="p"
              text={block.body}
              className="text-lg md:text-xl leading-relaxed block"
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
