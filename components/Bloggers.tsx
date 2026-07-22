"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { bloggers } from "@/data/bloggers";
import { SectionHeading } from "@/components/SectionHeading";
import { staggerItem } from "@/lib/motion";

export function Bloggers() {
  return (
    <section
      id="bloggers"
      className="relative bg-gradient-to-b from-lavender-200 via-lavender-100 to-lavender-200 py-20 sm:py-28"
    >
      <div className="container-x relative">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 sm:mb-16">
          <SectionHeading>Наши блогеры</SectionHeading>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
            Rocket Talent
          </span>
        </div>

        {/* Per-card reveal: with a long roster the whole grid is too tall to gate
            as one container, so each card animates in as it enters the viewport. */}
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {bloggers.map((blogger) => (
            <motion.li
              key={blogger.name}
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group overflow-hidden rounded-4xl bg-white shadow-card"
              >
                {/* Whole photo links to Instagram */}
                <Link
                  href={blogger.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${blogger.name} — Instagram`}
                  className="relative block aspect-[3/4] overflow-hidden"
                >
                  <Image
                    src={blogger.image}
                    alt={`Фото блогера ${blogger.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
                    loading="lazy"
                    // SVG placeholders bypass the optimizer; real photos get optimized.
                    unoptimized={blogger.image.endsWith(".svg")}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Soft darkening gradient on hover */}
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* Instagram chip shifts up on hover */}
                  <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Instagram className="h-4 w-4" />
                  </span>
                </Link>

                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <Link
                      href={blogger.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-base font-bold uppercase tracking-tight text-ink transition-colors hover:text-lavender-600"
                    >
                      {blogger.name}
                    </Link>
                    <p className="mt-1 text-sm text-graphite/70">
                      {blogger.followers}
                    </p>
                  </div>
                  <Link
                    href={blogger.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${blogger.name} — Instagram`}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lavender-100 text-lavender-600 transition-colors hover:bg-lavender-500 hover:text-white"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
