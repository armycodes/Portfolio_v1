import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-1 focus-visible:outline-[var(--color-accent)]";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[#090909] hover:bg-[var(--color-accent-dim)]",
  secondary:
    "border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  ghost:
    "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]",
};

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  variant?: Variant;
  children: ReactNode;
}

interface ButtonAsLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
  variant?: Variant;
  children: ReactNode;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ as = "button", variant = "primary", className = "", children, ...rest }: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (as === "a") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={styles} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
