"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, PenTool, Video, Rocket, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services, type Service } from "@/data/services";
import { SectionHeading } from "@/components/SectionHeading";
import { Stars } from "@/components/Stars";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

/** Maps the string icon key from data to a Lucide component. */
const iconMap: Record<Service["icon"], LucideIcon> = {
  target: Target,
  pen: PenTool,
  video: Video,
  rocket: Rocket,
  users: Users,
};

const stars = [
  { top: "16%", left: "26%", size: 18, delay: 0.3 },
  { top: "10%", left: "68%", size: 22, delay: 1 },
  { top: "60%", left: "90%", size: 16, delay: 0.7 },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <Stars stars={stars} tone="muted" />
      <div className="container-x relative">
        <SectionHeading className="mb-12 text-center sm:mb-16">
          Услуги
        </SectionHeading>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.li key={service.title} variants={staggerItem}>
                <motion.a
                  href="#contacts"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex h-full flex-col rounded-4xl border border-lavender-200/70 bg-gradient-to-b from-white to-lavender-50 p-6 shadow-card"
                >
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-lavender-100 text-lavender-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-3 font-display text-lg font-bold leading-snug text-ink">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-graphite/80">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex h-9 w-9 items-center justify-center self-start rounded-full bg-ink/5 text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-milk">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </motion.a>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
