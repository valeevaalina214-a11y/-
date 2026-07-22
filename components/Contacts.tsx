"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, Send, Instagram, ArrowUpRight } from "lucide-react";
import { contacts } from "@/data/contacts";
import { SectionHeading } from "@/components/SectionHeading";
import { Stars } from "@/components/Stars";
import { fadeUp, viewportOnce } from "@/lib/motion";

const contactLinks = [
  { label: contacts.phone.label, href: contacts.phone.href, Icon: Phone, external: false },
  { label: contacts.email.label, href: contacts.email.href, Icon: Mail, external: false },
  { label: contacts.telegram.label, href: contacts.telegram.href, Icon: Send, external: true },
  { label: contacts.instagram.label, href: contacts.instagram.href, Icon: Instagram, external: true },
];

const stars = [
  { top: "18%", left: "6%", size: 20, delay: 0.5 },
  { top: "12%", left: "70%", size: 26, delay: 1.2 },
  { top: "72%", left: "40%", size: 16, delay: 0.8 },
];

export function Contacts() {
  return (
    <section id="contacts" className="relative overflow-hidden py-20 sm:py-28">
      <Stars stars={stars} tone="light" />
      <div className="container-x relative">
        <SectionHeading className="mb-10 sm:mb-12">Контакты</SectionHeading>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Left: heading + contact links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className="max-w-md font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Давайте создадим проект вместе
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-graphite/80">
              Напишите нам удобным способом — обсудим задачу, подберём формат и
              предложим решение под ваш бренд.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactLinks.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 px-4 py-3 backdrop-blur-sm transition-colors hover:bg-white"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lavender-100 text-lavender-600 transition-colors group-hover:bg-ink group-hover:text-milk">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-graphite group-hover:text-ink">
                      {label}
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-graphite/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lavender-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: animated character showcase (fills the space cleanly, no form) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex justify-center lg:justify-end"
          >
            <CharacterStage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Dark rounded stage holding the black-hoodie character. The looping clip is
 * pre-composited onto the dark violet stage (its black background melts in), so
 * it plays as a plain animated image in every browser. A static frame is shown
 * when the user prefers reduced motion.
 */
function CharacterStage() {
  return (
    <div className="character relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-[#1d1b22] shadow-soft ring-1 ring-white/10">
      <span className="pointer-events-none absolute left-6 top-5 z-10 font-script text-2xl text-white/85">
        Rocket Agency
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/characters/contacts.webp"
        alt="Анимированный 3D-персонаж Rocket Agency в чёрном худи"
        loading="lazy"
        decoding="async"
        className="character-anim h-full w-full object-cover"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/characters/contacts-static.webp"
        alt=""
        aria-hidden="true"
        className="character-static h-full w-full object-cover"
      />
    </div>
  );
}
