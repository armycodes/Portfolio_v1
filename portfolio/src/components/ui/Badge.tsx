interface BadgeProps {
  status: "live" | "in-progress" | "coming-soon";
}

const LABELS: Record<BadgeProps["status"], string> = {
  live: "Live",
  "in-progress": "In Progress",
  "coming-soon": "Coming Soon",
};

export function Badge({ status }: BadgeProps) {
  const isLive = status === "live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 ${
        isLive
          ? "text-[var(--color-accent)] bg-[var(--color-accent-soft)]"
          : "text-[var(--color-text-secondary)] bg-white/5"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-[var(--color-accent)]" : "bg-[var(--color-text-secondary)]"}`}
      />
      {LABELS[status]}
    </span>
  );
}
