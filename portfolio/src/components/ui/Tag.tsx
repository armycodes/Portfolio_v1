interface TagProps {
  children: string;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="text-xs text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded-full px-3 py-1 whitespace-nowrap">
      {children}
    </span>
  );
}
