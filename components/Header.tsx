"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/data/site";

/**
 * Sticky header. Turns opaque after a small scroll, collapses into a
 * dropdown menu on small screens. All links smooth-scroll to their section
 * (handled by `scroll-behavior: smooth` + section scroll-margin in globals.css).
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: reduce ? 0 : -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-lavender-100/70 shadow-[0_1px_0_rgba(127,87,230,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <Link
          href="#top"
          className="font-display text-sm font-extrabold uppercase leading-none tracking-tight text-ink"
          aria-label="Rocket Agency — на главную"
        >
          <span className="block">Rocket</span>
          <span className="block">Agency</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative text-sm font-medium text-graphite transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-lavender-500 after:transition-all after:duration-300 hover:text-ink hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#contacts"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-milk transition-colors hover:bg-graphite md:inline-flex"
          >
            {site.hero.topLink} →
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full card-outline bg-white/60 text-ink md:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-lavender-200/60 bg-lavender-100/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-graphite hover:bg-lavender-100 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contacts"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-milk"
                >
                  {site.hero.topLink} →
                </Link>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
