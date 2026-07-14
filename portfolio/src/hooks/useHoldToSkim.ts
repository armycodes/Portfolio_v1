import { useEffect, useRef, useState, type RefObject } from "react";

const INTERACTIVE_SELECTOR = "a, button, input, textarea, select, [role='button']";

/**
 * Press-and-hold-to-fast-scroll behaviour, matching pxpush's "Hold to skim"
 * cursor mechanic: holding the mouse down accelerates an auto-scroll of the
 * page for as long as it's held; releasing (or a quick tap/click) stops it
 * immediately so normal clicks/links still work. Presses that start on an
 * interactive element (links, buttons, form controls) are ignored so
 * clicking things never fights with skimming.
 *
 * Returns whether skimming is currently active, so callers (e.g. the
 * custom cursor) can reflect it visually.
 */
export function useHoldToSkim(ref: RefObject<HTMLElement | null>) {
  const [holding, setHolding] = useState(false);
  const holdingRef = useRef(false);
  const velocity = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    function tick() {
      if (!holdingRef.current) return;
      velocity.current = Math.min(velocity.current + 0.6, 22);
      window.scrollBy(0, velocity.current);
      raf.current = requestAnimationFrame(tick);
    }

    function handleDown(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest(INTERACTIVE_SELECTOR)) return;
      holdingRef.current = true;
      velocity.current = 0;
      setHolding(true);
      raf.current = requestAnimationFrame(tick);
    }

    function stop() {
      if (!holdingRef.current) return;
      holdingRef.current = false;
      velocity.current = 0;
      setHolding(false);
      if (raf.current) cancelAnimationFrame(raf.current);
    }

    el.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", stop);
    window.addEventListener("mouseleave", stop);

    return () => {
      el.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("mouseleave", stop);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [ref]);

  return holding;
}
