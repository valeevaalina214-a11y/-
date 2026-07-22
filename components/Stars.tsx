"use client";

import { motion, useReducedMotion } from "framer-motion";

type Star = {
  top: string;
  left: string;
  size: number;
  delay: number;
};

/** Decorative four-point sparkle. */
function Sparkle({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Floating decorative stars. Positions are given in percentages so the field
 * scales with its container. Set `tone` to control colour on light/dark areas.
 */
export function Stars({
  stars,
  tone = "light",
  className = "",
}: {
  stars: Star[];
  tone?: "light" | "muted";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const color = tone === "light" ? "text-white" : "text-lavender-300";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {stars.map((star, i) => (
        <motion.span
          key={i}
          className={`absolute ${color}`}
          style={{ top: star.top, left: star.left }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={
            reduce
              ? { opacity: 0.7, scale: 1 }
              : {
                  opacity: [0.3, 1, 0.3],
                  scale: [0.85, 1.1, 0.85],
                  rotate: [0, 8, 0],
                }
          }
          transition={
            reduce
              ? { duration: 0.4 }
              : {
                  duration: 4 + star.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: star.delay,
                }
          }
        >
          <Sparkle size={star.size} />
        </motion.span>
      ))}
    </div>
  );
}
