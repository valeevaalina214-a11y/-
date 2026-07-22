/**
 * "Rocket Group" section data.
 *
 *   name        — название проекта
 *   description — краткое описание
 *   logo        — путь к логотипу в /public/logos/ (или null, тогда покажем текстовый знак)
 *   url         — ссылка перехода
 *
 * ⚠️ Описания временные, реальные ссылки не выдуманы — заменить по мере поступления данных.
 */

export type RocketProject = {
  name: string;
  description: string;
  logo: string | null;
  url: string;
};

export const rocketGroup: RocketProject[] = [
  {
    name: "Rocket Records",
    description: "Музыкальный лейбл и направление по работе с артистами и релизами.",
    logo: null, // TODO: /logos/rocket-records.svg
    url: "#", // TODO: реальная ссылка
  },
  {
    name: "ONI Music",
    description: "Музыкальный лейбл и платформа для развития артистов и проектов.",
    logo: "/logos/oni-music.svg",
    url: "#", // TODO
  },
  {
    name: "Rocket Mag",
    description: "Медиа о музыке, артистах, шоу-бизнесе и культуре.",
    logo: null, // TODO
    url: "#", // TODO
  },
  {
    name: "Rocket Kids",
    description: "Детское музыкальное и продюсерское направление.",
    logo: null, // TODO
    url: "#", // TODO
  },
  {
    name: "Rocket Team",
    description: "Медийный спортивный и баскетбольный проект.",
    logo: null, // TODO
    url: "#", // TODO
  },
  {
    name: "Underground Bizne$",
    description: "Медийная баскетбольная команда и развлекательный проект.",
    logo: "/logos/underground-biznes.svg",
    url: "#", // TODO
  },
];
