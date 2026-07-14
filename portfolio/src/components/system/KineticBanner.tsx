import { useRef } from "react";
import { motion } from "framer-motion";
import { useHoldToSkim } from "@/hooks/useHoldToSkim";

interface KineticBannerProps {
  /** The phrase repeated to fill the banner, e.g. "WORKS" */
  text: string;
  /** How many times to repeat the phrase vertically. pxpush repeats 8x. */
  repeat?: number;
  /** Direction the marquee drifts */
  direction?: "left" | "right";
  className?: string;
}

/**
 * A tall stack of oversized, repeating headline text that drifts sideways
 * as it enters view — the "●On–Demand Design Department" banner treatment.
 * Press-and-hold fast-scrolls the page (pxpush's "Hold to skim" cursor).
 */
export function KineticBanner({
  text,
  repeat = 8,
  direction = "left",
  className = "",
}: KineticBannerProps) {
  const rows = Array.from({ length: repeat });
  const ref = useRef<HTMLDivElement>(null);
  useHoldToSkim(ref);

  return (
    <div
      ref={ref}
      data-cursor-label="Hold to skim"
      className={`select-none overflow-hidden py-6 md:py-8 cursor-hover ${className}`}
    >
      {rows.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: direction === "left" ? 40 : -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center whitespace-nowrap"
        >
          <span
            className={`text-mono-label inline-block w-3 h-3 md:w-4 md:h-4 rounded-full mr-4 md:mr-6 shrink-0 ${
              i % 3 === 0 ? "bg-[var(--color-accent)]" : "bg-[var(--color-text-primary)]/20"
            }`}
          />
          <span
            className={`text-display text-[9vw] leading-[0.92] md:text-[4.5rem] ${
              i % 2 === 1 ? "text-stroke" : ""
            }`}
            style={{ opacity: 1 - i * 0.08 }}
          >
            {text}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
