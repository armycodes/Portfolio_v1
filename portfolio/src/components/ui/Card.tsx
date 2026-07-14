import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = "", hoverable = true }: CardProps) {
  return (
    <div
      className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        hoverable ? "hover:border-white/16 hover:-translate-y-1" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
