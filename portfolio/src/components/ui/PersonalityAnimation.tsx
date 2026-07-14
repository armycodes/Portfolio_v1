import { motion } from "framer-motion";

/**
 * A small looping animation built with framer-motion + SVG — no external
 * animation library required, so it can't fail to load or break the build.
 * Swap this out for a real Lottie file later if you want; this keeps things
 * dependency-free and crash-proof in the meantime.
 */
export function PersonalityAnimation({ className = "" }: { className?: string }) {
  const dots = [
    { cx: 60, delay: 0 },
    { cx: 100, delay: 0.2 },
    { cx: 140, delay: 0.4 },
  ];

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
    >
      <motion.circle
        cx="100"
        cy="100"
        r="75"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeDasharray="6 10"
        strokeOpacity={0.35}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 100px" }}
      />
      {dots.map((dot) => (
        <motion.circle
          key={dot.cx}
          cx={dot.cx}
          cy="100"
          r="14"
          fill="var(--color-accent)"
          initial={{ scale: 0.65, opacity: 0.35 }}
          animate={{ scale: [0.65, 1.15, 0.65], opacity: [0.35, 1, 0.35] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
          style={{ transformOrigin: `${dot.cx}px 100px` }}
        />
      ))}
    </svg>
  );
}
