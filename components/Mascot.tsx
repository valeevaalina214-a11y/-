"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Rocket Agency mascot — an inline SVG character that actually blinks and
 * waves (unlike a flat image, which can't). Two colourways match the brand
 * references: a lavender hoodie and a black hoodie.
 *
 * Want to use the real 3D renders instead? Drop them into /public/characters/
 * and use <Character/> — but note a still PNG can only float/sway, not blink.
 * True blink/wave needs a sprite sheet, Lottie, or transparent-bg rig.
 */
export function Mascot({
  variant = "lavender",
  className = "",
  priority: _priority,
}: {
  variant?: "lavender" | "black";
  className?: string;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();

  const hoodie = variant === "black" ? "#201f2a" : "#ab97fb";
  const hoodieShade = variant === "black" ? "#15141b" : "#8a68ec";
  const hoodieText = variant === "black" ? "#f6f1ea" : "#ffffff";

  // Blink: eyelids stay open, then a quick double-close on a loop.
  const blink = reduce
    ? {}
    : {
        animate: { scaleY: [0, 0, 1, 0, 0, 0, 1, 0] },
        transition: {
          duration: 6,
          times: [0, 0.45, 0.48, 0.51, 0.7, 0.86, 0.89, 0.92],
          repeat: Infinity,
          ease: "linear" as const,
        },
      };

  // Wave: the right arm rocks back and forth, then rests.
  const wave = reduce
    ? {}
    : {
        animate: { rotate: [0, 16, -4, 16, -4, 12, 0] },
        transition: {
          duration: 2.4,
          times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
          repeat: Infinity,
          repeatDelay: 2.2,
          ease: "easeInOut" as const,
        },
      };

  return (
    <motion.div
      className={`select-none ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 320 420"
          className="h-auto w-full drop-shadow-[0_30px_45px_rgba(79,60,140,0.35)]"
          role="img"
          aria-label="Анимированный 3D-персонаж Rocket Agency"
        >
          <defs>
            <linearGradient id={`skin-${variant}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f6e8da" />
              <stop offset="1" stopColor="#e7cfb6" />
            </linearGradient>
            <linearGradient id={`hoodie-${variant}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={hoodie} />
              <stop offset="1" stopColor={hoodieShade} />
            </linearGradient>
          </defs>

          {/* Legs — black cargo */}
          <rect x="128" y="300" width="28" height="96" rx="13" fill="#1c1b22" />
          <rect x="164" y="300" width="28" height="96" rx="13" fill="#1c1b22" />
          <rect x="118" y="292" width="40" height="26" rx="10" fill="#25232f" />
          <rect x="162" y="292" width="40" height="26" rx="10" fill="#25232f" />

          {/* Shoes — white with lavender detail */}
          <g>
            <rect x="118" y="388" width="46" height="20" rx="10" fill="#f6f1ea" />
            <rect x="156" y="388" width="46" height="20" rx="10" fill="#f6f1ea" />
            <rect x="118" y="399" width="46" height="9" rx="4.5" fill="#ab97fb" />
            <rect x="156" y="399" width="46" height="9" rx="4.5" fill="#ab97fb" />
          </g>

          {/* Left arm (in pocket, static) */}
          <path d="M104 196c-14 8-20 40-14 70l20-4c-2-26 2-46 10-58z" fill={`url(#hoodie-${variant})`} />

          {/* Body — hoodie */}
          <rect x="98" y="180" width="124" height="130" rx="42" fill={`url(#hoodie-${variant})`} />
          {/* Hood behind neck */}
          <ellipse cx="160" cy="180" rx="82" ry="30" fill={`url(#hoodie-${variant})`} />
          {/* Pocket */}
          <rect x="128" y="250" width="64" height="34" rx="14" fill={hoodieShade} opacity="0.55" />
          {/* Drawstrings */}
          <line x1="150" y1="196" x2="146" y2="230" stroke={hoodieText} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <line x1="170" y1="196" x2="174" y2="230" stroke={hoodieText} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          {/* Brand text */}
          <text x="160" y="222" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill={hoodieText} opacity="0.9">ROCKET</text>
          <text x="160" y="237" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill={hoodieText} opacity="0.9">AGENCY</text>

          {/* Right arm — waves. transformBox+origin pivots at the shoulder. */}
          <motion.g
            style={{ transformBox: "fill-box", transformOrigin: "50% 8%" }}
            {...wave}
          >
            <path d="M214 190c16 4 28 22 30 44 1 12-1 22-4 30l-19-6c3-20 1-40-13-52z" fill={`url(#hoodie-${variant})`} />
            {/* Waving hand */}
            <circle cx="236" cy="262" r="13" fill={`url(#skin-${variant})`} />
          </motion.g>

          {/* Head */}
          <g>
            {/* Ears */}
            <circle cx="112" cy="110" r="12" fill={`url(#skin-${variant})`} />
            <circle cx="208" cy="110" r="12" fill={`url(#skin-${variant})`} />
            {/* Face */}
            <circle cx="160" cy="104" r="62" fill={`url(#skin-${variant})`} />
            {/* Hair — messy black */}
            <path d="M100 100c0-40 27-68 60-68s60 28 60 68c0 10-3 18-3 18-8-22-20-32-20-32-16 16-44 18-72 4 0 0-12 8-22 30-2-6-3-12-3-20z" fill="#1c1b22" />
            <path d="M150 34c-6-6-2-14 6-14M176 33c7-5 16-2 16 7" stroke="#1c1b22" strokeWidth="7" strokeLinecap="round" fill="none" />

            {/* Eyes */}
            <g>
              <circle cx="140" cy="108" r="13" fill="#ffffff" />
              <circle cx="180" cy="108" r="13" fill="#ffffff" />
              <circle cx="142" cy="110" r="7.5" fill="#1c1b22" />
              <circle cx="182" cy="110" r="7.5" fill="#1c1b22" />
              <circle cx="145" cy="107" r="2.4" fill="#ffffff" />
              <circle cx="185" cy="107" r="2.4" fill="#ffffff" />
              {/* Eyelids — scaleY 0 (open) → 1 (closed) to blink */}
              <motion.circle
                cx="140" cy="108" r="13.5" fill={`url(#skin-${variant})`}
                style={{ transformBox: "fill-box", transformOrigin: "50% 0%" }}
                initial={{ scaleY: 0 }}
                {...blink}
              />
              <motion.circle
                cx="180" cy="108" r="13.5" fill={`url(#skin-${variant})`}
                style={{ transformBox: "fill-box", transformOrigin: "50% 0%" }}
                initial={{ scaleY: 0 }}
                {...blink}
              />
            </g>

            {/* Brows */}
            <path d="M130 90c6-4 14-4 20 0" stroke="#1c1b22" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M170 90c6-4 14-4 20 0" stroke="#1c1b22" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Nose + smile */}
            <path d="M158 118c2 3 4 3 6 0" stroke="#c99a76" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M146 134c8 8 20 8 28 0" stroke="#b07a5a" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
