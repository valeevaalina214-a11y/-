"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Rocket Agency 3D mascot.
 *
 * Drop the real renders into /public/characters/ keeping these file names:
 *   hero.webp      — большой персонаж на первом экране
 *   group.webp     — небольшой персонаж рядом с Rocket Group
 *   contacts.webp  — персонаж рядом с контактами
 * Placeholders (*.svg) are used until the real images are added.
 */

type CharacterProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  /** Small vertical float loop for a lively feel. */
  float?: boolean;
};

export function Character({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  float = true,
}: CharacterProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`select-none ${className}`}
      initial={{ opacity: 0, y: 60, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={
          float && !reduce ? { y: [0, -14, 0] } : { y: 0 }
        }
        transition={
          float && !reduce
            ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          // SVG placeholders bypass the optimizer; real raster renders get optimized.
          unoptimized={src.endsWith(".svg")}
          className="h-auto w-full drop-shadow-[0_30px_45px_rgba(79,60,140,0.35)]"
        />
      </motion.div>
    </motion.div>
  );
}
