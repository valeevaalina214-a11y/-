"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { rocketGroup } from "@/data/rocketGroup";
import { SectionHeading } from "@/components/SectionHeading";
import { Character } from "@/components/Character";
import { Stars } from "@/components/Stars";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const stars = [
  { top: "14%", left: "12%", size: 18, delay: 0.4 },
  { top: "8%", left: "80%", size: 24, delay: 1.1 },
];

export function RocketGroup() {
  return (
    <section id="rocket-group" className="relative overflow-hidden py-20 sm:py-28">
      <Stars stars={stars} tone="muted" />
      <div className="container-x relative">
        <SectionHeading className="mb-12 sm:mb-16" eyebrow="Экосистема">
          Rocket Group
        </SectionHeading>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {rocketGroup.map((project) => (
              <motion.li key={project.name} variants={staggerItem}>
                <motion.a
                  href={project.url}
                  target={project.url.startsWith("http") ? "_blank" : undefined}
                  rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex h-full flex-col justify-between rounded-4xl border border-lavender-200/70 bg-white p-6 shadow-card"
                >
                  <div className="mb-8 flex h-12 items-start justify-between">
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt={`Логотип ${project.name}`}
                        width={120}
                        height={48}
                        loading="lazy"
                        unoptimized={project.logo.endsWith(".svg")}
                        className="h-8 w-auto object-contain"
                      />
                    ) : (
                      <span className="font-display text-lg font-extrabold uppercase tracking-tight text-ink">
                        {project.name}
                      </span>
                    )}
                    <ArrowUpRight className="h-5 w-5 text-graphite/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lavender-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-lg font-bold text-ink">
                      {project.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-graphite/75">
                      {project.description}
                    </p>
                  </div>
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Small character beside the grid */}
          <div className="mx-auto hidden w-40 lg:block xl:w-52">
            <Character
              src="/characters/hero.webp"
              staticSrc="/characters/hero-static.webp"
              alt="3D-персонаж Rocket Agency"
              width={420}
              height={619}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
