import { EXPERIENCES } from "@/data/experience";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TimelineEntry } from "./Timeline";

export function Experience() {
  return (
    <SectionContainer id="experience">
      <SectionTitle
        index={2}
        eyebrow="Experience"
        title="Evidence, not a résumé."
        description="A record of how I've worked — the responsibilities I've held, the practices I've followed, and what each role taught me."
      />
      <div>
        {EXPERIENCES.map((exp, i) => (
          <TimelineEntry
            key={exp.id}
            experience={exp}
            isLast={i === EXPERIENCES.length - 1}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
