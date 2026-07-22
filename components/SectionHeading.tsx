"use client";

import { motion } from "framer-motion";
import { lineReveal, staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * Large section heading that reveals word-by-word on scroll.
 */
export function SectionHeading({
  children,
  className = "",
  eyebrow,
}: {
  children: string;
  className?: string;
  eyebrow?: string;
}) {
  const words = children.split(" ");

  return (
    <div className={className}>
      {eyebrow ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-lavender-500"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-wrap gap-x-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span custom={i} variants={lineReveal} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
    </div>
  );
}
