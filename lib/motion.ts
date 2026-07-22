import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion variants.
 * Components use these together with `useReducedMotion()` so that everything
 * degrades gracefully when the user prefers reduced motion.
 */

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + rise for a section as it scrolls into view. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Container that reveals its children one after another. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/** A single card / item inside a staggered container. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Word / line reveal used for large headings. */
export const lineReveal: Variants = {
  hidden: { opacity: 0, y: "0.4em" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay: 0.1 * i },
  }),
};

/** Shared viewport config so sections trigger consistently. */
export const viewportOnce = { once: true, amount: 0.25 } as const;
