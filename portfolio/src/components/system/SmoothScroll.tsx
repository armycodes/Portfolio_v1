import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Wraps the app in an inertia-based smooth scroll (the "heavy, buttery"
 * scroll feel on sites like ard.dev / raycast) instead of native instant
 * scrolling. Respects reduced-motion preference.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
