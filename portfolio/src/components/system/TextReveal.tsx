import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  delay?: number;
}

/**
 * Masks its content in an overflow-hidden box and slides it up into view.
 * Replays every time it re-enters the viewport (scrolling down OR back up),
 * not just once — it resets to hidden the instant it leaves view so the
 * next entrance animates fresh.
 *
 * Uses useInView (checked imperatively) instead of relying purely on
 * whileInView, plus a safety-net timeout on first mount only, so content
 * already in the viewport on first paint (e.g. the hero) always reliably
 * reveals instead of getting stuck clipped at its hidden offset.
 */
export function TextReveal({ children, as = "div", className = "", delay = 0 }: TextRevealProps) {
  const Wrapper = motion[as as "div"];
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const hasMounted = useRef(false);
  const inView = useInView(ref, { once: false, amount: 0.15, margin: "0px 0px -10% 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("show");
      hasMounted.current = true;
      return;
    }

    if (hasMounted.current) {
      // Already revealed once and now scrolled out — reset instantly (no
      // transition) so the next entrance plays the reveal animation again.
      controls.set("hidden");
      return;
    }

    // Safety net for the very first mount: if the observer never reports
    // intersection (edge cases during hydration/layout shift), reveal
    // anyway after a short delay so content is never permanently hidden.
    const timeout = setTimeout(() => {
      controls.start("show");
      hasMounted.current = true;
    }, 700);
    return () => clearTimeout(timeout);
  }, [inView, controls]);

  return (
    <div ref={ref} className="overflow-hidden">
      <Wrapper
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { y: "110%" },
          show: { y: "0%", transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] } },
        }}
        className={className}
      >
        {children}
      </Wrapper>
    </div>
  );
}
