import { PROJECTS } from "@/data/projects";

/**
 * A continuous horizontal strip of stacked project cards — the visual
 * equivalent of pxpush's scrolling "Works" image gallery, built from
 * typography/color since this portfolio has no project photography.
 */
export function WorksMarquee() {
  const cards = [...PROJECTS, ...PROJECTS];

  return (
    <div className="overflow-hidden border-y border-[var(--color-border)] py-8 md:py-10 mb-16 md:mb-20">
      <div className="marquee-track" style={{ animationDuration: "38s" }}>
        {[0, 1].map((groupIdx) => (
          <div className="marquee-group gap-5 md:gap-6 pr-5 md:pr-6" key={groupIdx} aria-hidden={groupIdx === 1}>
            {cards.map((project, i) => (
              <div
                key={`${groupIdx}-${project.id}-${i}`}
                className="cursor-hover shrink-0 w-[260px] md:w-[320px] aspect-[4/5] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-7 flex flex-col justify-between hover:border-[var(--color-accent)] transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-mono-label text-[10px] text-[var(--color-text-secondary)]">
                    {String((i % PROJECTS.length) + 1).padStart(2, "0")}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                </div>

                <div>
                  <p className="text-mono-label text-[10px] text-[var(--color-accent)] mb-2">
                    {project.status === "live" ? "LIVE" : "IN DEVELOPMENT"}
                  </p>
                  <h4 className="text-2xl md:text-3xl font-semibold font-[var(--font-heading)] tracking-tight mb-2">
                    {project.name}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-snug">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-mono-label text-[9px] text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded-full px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
