import { useRef, type RefObject } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface ScrollFillTextProps {
  text: string;
  className?: string;
  as?: "p" | "h3" | "h2" | "blockquote";
  /** Dim color words start at (defaults to secondary text token) */
  dimColor?: string;
  /** Bright color words fill to as they scroll into place */
  fillColor?: string;
}

function FillWord({
  children,
  progress,
  range,
  dimColor,
  fillColor,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  dimColor: string;
  fillColor: string;
}) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const color = useTransform(progress, range, [dimColor, fillColor]);

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em] will-change-[opacity]">
      {children}
    </motion.span>
  );
}

/**
 * Splits text into words and fills each one in — from dim to full
 * brightness — as the block scrolls through the viewport, so the
 * copy visually "fills up" while the user scrolls past it.
 */
export function ScrollFillText({
  text,
  className = "",
  as = "p",
  dimColor = "#A1A1AA",
  fillColor = "#FAFAFA",
}: ScrollFillTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement>,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");
  const Wrapper = motion[as as "p"];

  return (
    <div ref={ref}>
      <Wrapper className={className}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = (i + 1) / words.length;
          return (
            <FillWord
              key={`${word}-${i}`}
              progress={scrollYProgress}
              range={[start, end]}
              dimColor={dimColor}
              fillColor={fillColor}
            >
              {word}
            </FillWord>
          );
        })}
      </Wrapper>
    </div>
  );
}
