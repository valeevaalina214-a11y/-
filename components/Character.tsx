"use client";

import { motion } from "framer-motion";

/**
 * Animated 3D character (transparent looping WebP built from the uploaded clip).
 * A static frame is shown instead when the user prefers reduced motion.
 * Plain <img> is used so the animated WebP plays untouched (no optimizer re-encode);
 * width/height keep the aspect ratio so the character is never stretched.
 */
export function Character({
  src,
  staticSrc,
  alt,
  width,
  height,
  priority = false,
  className = "",
}: {
  src: string;
  staticSrc: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={`character select-none ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="character-anim h-auto w-full object-contain drop-shadow-[0_30px_45px_rgba(79,60,140,0.32)]"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={staticSrc}
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        className="character-static h-auto w-full object-contain drop-shadow-[0_30px_45px_rgba(79,60,140,0.32)]"
      />
    </motion.div>
  );
}
