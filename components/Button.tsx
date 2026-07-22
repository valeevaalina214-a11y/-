"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Variant = "solid" | "outline";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender-500";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-milk hover:bg-graphite",
  outline: "card-outline bg-white/40 text-ink hover:bg-white",
};

/** Small animated arrow that nudges right on hover. */
function Arrow() {
  return (
    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  );
}

/**
 * Brand button. Renders an anchor (for in-page smooth-scroll links) with an
 * optional trailing arrow. `motion` adds a subtle lift on hover / tap.
 */
export function Button({
  href,
  children,
  variant = "solid",
  withArrow = true,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
        {withArrow ? <Arrow /> : null}
      </Link>
    </motion.div>
  );
}
