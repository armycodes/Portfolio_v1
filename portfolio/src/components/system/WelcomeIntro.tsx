import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

const LINES = ["Software Engineer.", "Writer.", "Systems Thinker."];
const TOP_THRESHOLD = 80; // px — how close to the very top counts as "back at section one"
const PLAY_DURATION = 2400; // ms the intro stays on screen before auto-hiding

/**
 * A full-screen typographic welcome moment. Plays the instant the site
 * loads, then auto-hides. It isn't a once-per-session thing — scrolling
 * back up to the very top (section one / Hero) replays it again, every
 * time, for as long as the user keeps returning to the top.
 */
export function WelcomeIntro() {
  const [visible, setVisible] = useState(true);
  const hasLeftTop = useRef(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useLockBodyScroll(visible);

  // Auto-hide after each play.
  useEffect(() => {
    if (!visible) return;
    hideTimer.current = setTimeout(() => setVisible(false), PLAY_DURATION);
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [visible]);

  // Watch scroll position: once the user has scrolled away from the top,
  // arm the replay; the next time they scroll back up to the top, play
  // the welcome moment again.
  useEffect(() => {
    let raf: number | null = null;

    function handleScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const atTop = window.scrollY < TOP_THRESHOLD;

        if (!atTop) {
          hasLeftTop.current = true;
          return;
        }

        if (atTop && hasLeftTop.current) {
          hasLeftTop.current = false;
          setVisible(true);
        }
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome-intro"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--color-bg)] overflow-hidden"
        >
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-mono-label text-[10px] md:text-xs text-[var(--color-text-secondary)] tracking-[0.4em]"
            >
              Welcome
            </motion.span>

            <div className="text-center">
              {LINES.map((line, i) => (
                <div key={line} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.25 + i * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-display text-[10vw] md:text-[3.6rem] leading-[1.05]"
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="h-px w-40 md:w-56 bg-[var(--color-accent)] mt-2"
            />

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-mono-label text-[10px] text-[var(--color-text-secondary)]"
            >
              Siri Mahalaxmi
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
