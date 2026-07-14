import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useHoldToSkim } from "@/hooks/useHoldToSkim";

const HOVER_SELECTOR = "a, button, [role='button'], .cursor-hover";
const LABEL_SELECTOR = "[data-cursor-label]";

export function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.4 });

  const raf = useRef<number | null>(null);
  const bodyRef = useRef<HTMLElement | null>(typeof document !== "undefined" ? document.body : null);
  const skimming = useHoldToSkim(bodyRef);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsTouch(!hasFinePointer);
    if (!hasFinePointer) return;

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest(HOVER_SELECTOR)));
      const labelEl = target.closest(LABEL_SELECTOR) as HTMLElement | null;
      setLabel(labelEl?.dataset.cursorLabel ?? null);
    }

    function handleDown() {
      setPressed(true);
    }

    function handleUp() {
      setPressed(false);
    }

    function handleLeaveWindow() {
      setHidden(true);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeaveWindow);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [x, y]);

  if (isTouch) return null;

  const showSkimLabel = skimming && !hovering && !label;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: hidden ? 0 : 1,
      }}
    >
      {skimming && (
        <motion.div
          initial={{ scale: 0.6, opacity: 0.6 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 m-auto rounded-full border border-white"
          style={{ width: 48, height: 48 }}
        />
      )}
      <motion.div
        className="rounded-full bg-white flex items-center justify-center overflow-hidden"
        animate={{
          width: showSkimLabel ? 96 : label ? 88 : hovering || skimming ? 48 : 10,
          height: showSkimLabel ? 96 : label ? 88 : hovering || skimming ? 48 : 10,
          scale: pressed ? 0.85 : 1,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {label && (
          <span className="text-mono-label text-[9px] text-black text-center px-2 leading-tight">
            {label}
          </span>
        )}
        {showSkimLabel && (
          <span className="text-mono-label text-[9px] text-black text-center px-2 leading-tight">
            Hold to skim
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
