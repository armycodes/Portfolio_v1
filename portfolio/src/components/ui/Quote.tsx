interface QuoteProps {
  children: string;
  attribution?: string;
}

export function Quote({ children, attribution }: QuoteProps) {
  return (
    <blockquote className="max-w-2xl">
      <p className="editorial-quote text-2xl md:text-3xl leading-snug text-[var(--color-text-primary)]">
        “{children}”
      </p>
      {attribution && (
        <cite className="block mt-4 text-sm not-italic text-[var(--color-text-secondary)]">
          — {attribution}
        </cite>
      )}
    </blockquote>
  );
}
