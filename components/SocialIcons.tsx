"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Instagram, Mail } from "lucide-react";
import { contacts } from "@/data/contacts";

const links = [
  { label: "Telegram", href: contacts.telegram.href, Icon: Send },
  { label: "Instagram", href: contacts.instagram.href, Icon: Instagram },
  { label: "Email", href: contacts.email.href, Icon: Mail },
];

/** Minimal round social icons used on the hero and contacts sections. */
export function SocialIcons({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const chip =
    tone === "dark"
      ? "bg-ink text-milk hover:bg-graphite"
      : "bg-white text-ink card-outline hover:bg-lavender-100";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ label, href, Icon }) => (
        <motion.div key={label} whileHover={{ y: -3, rotate: -6 }} whileTap={{ scale: 0.9 }}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${chip}`}
          >
            <Icon className="h-5 w-5" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
