/**
 * "Наши блогеры" (Our bloggers) section data.
 *
 * ⚠️ PLACEHOLDER DATA — replace with the real values from the Word document.
 *   name          — имя или псевдоним блогера
 *   followers     — количество подписчиков (строкой, как показывать на карточке)
 *   image         — путь к фото в /public/bloggers/ (положите файлы туда)
 *   instagramUrl  — ссылка на Instagram (открывается в новой вкладке)
 *
 * HOW TO ADD REAL DATA:
 *   1. Скопируйте фото блогеров в /public/bloggers/ (одинаковое соотношение сторон, напр. 3:4).
 *   2. Впишите name, followers и instagramUrl из документа.
 *   3. Укажите image как "/bloggers/имя-файла.webp".
 * Не придумывайте несуществующих блогеров, ссылки или число подписчиков —
 * оставляйте заглушки, пока нет реальных данных.
 */

export type Blogger = {
  name: string;
  followers: string;
  image: string;
  instagramUrl: string;
};

export const bloggers: Blogger[] = [
  {
    name: "DIMASBLOG", // TODO: реальное имя из документа
    followers: "2.1M подписчиков", // TODO
    image: "/bloggers/placeholder-1.svg", // TODO: /bloggers/dimasblog.webp
    instagramUrl: "#", // TODO: реальная ссылка на Instagram
  },
  {
    name: "KATE STAR",
    followers: "1.8M подписчиков",
    image: "/bloggers/placeholder-2.svg",
    instagramUrl: "#",
  },
  {
    name: "PLAYMAKER",
    followers: "950K подписчиков",
    image: "/bloggers/placeholder-3.svg",
    instagramUrl: "#",
  },
  {
    name: "VIKA VIBES",
    followers: "1.3M подписчиков",
    image: "/bloggers/placeholder-4.svg",
    instagramUrl: "#",
  },
  {
    name: "YOUNG V",
    followers: "780K подписчиков",
    image: "/bloggers/placeholder-5.svg",
    instagramUrl: "#",
  },
];
