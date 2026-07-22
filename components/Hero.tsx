"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/Button";
import { Stars } from "@/components/Stars";
import { Character } from "@/components/Character";
import { SocialIcons } from "@/components/SocialIcons";
import { EASE } from "@/lib/motion";

const heroStars = [
  { top: "12%", left: "4%", size: 26, delay: 0.2 },
  { top: "30%", left: "40%", size: 16, delay: 1.1 },
  { top: "8%", left: "62%", size: 34, delay: 0.6 },
  { top: "58%", left: "56%", size: 18, delay: 1.6 },
  { top: "70%", left: "8%", size: 22, delay: 0.9 },
  { top: "20%", left: "88%", size: 28, delay: 0.4 },
  { top: "78%", left: "82%", size: 16, delay: 1.3 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-12"
    >
      <Stars stars={heroStars} tone="light" />

      <div className="container-x relative grid w-full items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <div className="relative z-10">
          {/* Top-right discuss link (aligned to hero on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="absolute -top-16 right-0 hidden lg:block"
          >
            <Link
              href="#contacts"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink"
            >
              {site.hero.topLink}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Big title with script overlay */}
          <div className="relative">
            <h1 className="font-display font-extrabold uppercase leading-[0.86] tracking-tight text-milk">
              {site.hero.titleLines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.15, ease: EASE }}
                    className="block text-[18vw] sm:text-[15vw] lg:text-[10.5vw] xl:text-[9rem]"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.span
              initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -8, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              className="pointer-events-none absolute left-[38%] top-[42%] font-script text-3xl text-ink sm:text-4xl lg:text-5xl"
            >
              {site.hero.scriptAccent}
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
            className="mt-6 max-w-md text-base leading-relaxed text-graphite sm:text-lg"
          >
            {site.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button href="#contacts" variant="solid">
              {site.hero.primaryCta}
            </Button>
            <Button href="#services" variant="outline" withArrow={false}>
              {site.hero.secondaryCta}
            </Button>
          </motion.div>
        </div>

        {/* Right: character + social icons */}
        <div className="relative z-0 flex flex-col items-center lg:items-end">
          <Character
            src="/characters/hero.webp"
            staticSrc="/characters/hero-static.webp"
            alt="Анимированный 3D-персонаж Rocket Agency в лавандовом худи"
            width={420}
            height={619}
            priority
            className="w-[62%] max-w-[380px] sm:w-1/2 lg:w-[86%] lg:max-w-none"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: EASE }}
            className="mt-6 lg:absolute lg:bottom-2 lg:right-0"
          >
            <SocialIcons tone="dark" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
