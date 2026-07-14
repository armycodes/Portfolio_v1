import type { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}

export function SectionContainer({
  id,
  children,
  className = "",
  bordered = true,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${bordered ? "border-t border-[var(--color-border)]" : ""} ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
