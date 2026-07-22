/**
 * Global site copy & navigation.
 * Edit brand name, hero text and nav labels here — nothing hard-coded in components.
 */

export const site = {
  brand: "ROCKET AGENCY",
  hero: {
    scriptAccent: "Creative Blogger Agency",
    titleLines: ["ROCKET", "AGENCY"],
    description:
      "Rocket Agency — креативное блогерское агентство широкого спектра услуг на базе медийных возможностей Rocket Group.",
    primaryCta: "Обсудить проект",
    secondaryCta: "Узнать больше",
    topLink: "Обсудить проект",
  },
} as const;

export type NavItem = { label: string; href: string };

/** Header navigation — `href` matches the `id` of each section on the page. */
export const navItems: NavItem[] = [
  { label: "Услуги", href: "#services" },
  { label: "Блогеры", href: "#bloggers" },
  { label: "Rocket Group", href: "#rocket-group" },
  { label: "Контакты", href: "#contacts" },
];
