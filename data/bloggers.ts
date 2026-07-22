/**
 * "Наши блогеры" (Our bloggers) section data.
 *
 * Источник: PDF со списком блогеров (Instagram-хендлы + число подписчиков).
 *   name          — псевдоним (Instagram-хендл), в карточке отображается заглавными
 *   followers     — количество подписчиков в Instagram
 *   image         — путь к фото в /public/bloggers/ (сейчас SVG-заглушки)
 *   instagramUrl  — ссылка на Instagram (открывается в новой вкладке)
 *
 * КАК ДОБАВИТЬ РЕАЛЬНЫЕ ФОТО:
 *   1. Положите фото в /public/bloggers/ (соотношение 3:4, лучше .webp).
 *   2. Замените значение `image`, напр. "/bloggers/dimasblog.webp".
 * Ссылки и подписчики взяты из документа — не менять без обновления данных.
 */

export type Blogger = {
  name: string;
  followers: string;
  image: string;
  instagramUrl: string;
};

export const bloggers: Blogger[] = [
  { name: "aslanshukasha", followers: "382K подписчиков", image: "/bloggers/aslanshukasha.svg", instagramUrl: "https://www.instagram.com/aslanshukasha" },
  { name: "djami.lyalya", followers: "537K подписчиков", image: "/bloggers/djami-lyalya.svg", instagramUrl: "https://www.instagram.com/djami.lyalya" },
  { name: "dvoretsky11", followers: "615K подписчиков", image: "/bloggers/dvoretsky11.svg", instagramUrl: "https://www.instagram.com/dvoretsky11" },
  { name: "lizogu.b", followers: "182K подписчиков", image: "/bloggers/lizogu-b.svg", instagramUrl: "https://www.instagram.com/lizogu.b" },
  { name: "germanglas", followers: "707K подписчиков", image: "/bloggers/germanglas.svg", instagramUrl: "https://www.instagram.com/germanglas" },
  { name: "julia.gavrilina", followers: "5.2M подписчиков", image: "/bloggers/julia-gavrilina.svg", instagramUrl: "https://www.instagram.com/julia.gavrilina" },
  { name: "katya_golyshevaa", followers: "1.3M подписчиков", image: "/bloggers/katya-golyshevaa.svg", instagramUrl: "https://www.instagram.com/katya_golyshevaa" },
  { name: "mekhrona_18", followers: "573K подписчиков", image: "/bloggers/mekhrona-18.svg", instagramUrl: "https://www.instagram.com/mekhrona_18" },
  { name: "paramonova_as", followers: "404K подписчиков", image: "/bloggers/paramonova-as.svg", instagramUrl: "https://www.instagram.com/paramonova_as" },
  { name: "sleepy.princess.8", followers: "853K подписчиков", image: "/bloggers/sleepy-princess-8.svg", instagramUrl: "https://www.instagram.com/sleepy.princess.8" },
  { name: "simka.le", followers: "507K подписчиков", image: "/bloggers/simka-le.svg", instagramUrl: "https://www.instagram.com/simka.le" },
  { name: "tenderlybae", followers: "3.9M подписчиков", image: "/bloggers/tenderlybae.svg", instagramUrl: "https://www.instagram.com/tenderlybae" },
  { name: "klvrrrr", followers: "154K подписчиков", image: "/bloggers/klvrrrr.svg", instagramUrl: "https://www.instagram.com/klvrrrr" },
  { name: "mibreoo", followers: "154K подписчиков", image: "/bloggers/mibreoo.svg", instagramUrl: "https://www.instagram.com/mibreoo" },
  { name: "im_katesi", followers: "615K подписчиков", image: "/bloggers/im-katesi.svg", instagramUrl: "https://www.instagram.com/im_katesi" },
  { name: "karna.val", followers: "7.2M подписчиков", image: "/bloggers/karna-val.svg", instagramUrl: "https://www.instagram.com/karna.val" },
  { name: "dimasblog", followers: "1.9M подписчиков", image: "/bloggers/dimasblog.svg", instagramUrl: "https://www.instagram.com/dimasblog" },
  { name: "anyaischuk", followers: "3.2M подписчиков", image: "/bloggers/anyaischuk.svg", instagramUrl: "https://www.instagram.com/anyaischuk" },
  { name: "amiran696969", followers: "809K подписчиков", image: "/bloggers/amiran696969.svg", instagramUrl: "https://www.instagram.com/amiran696969" },
  { name: "tambi_masaev", followers: "1.3M подписчиков", image: "/bloggers/tambi-masaev.svg", instagramUrl: "https://www.instagram.com/tambi_masaev" },
  { name: "ilia._.makarov", followers: "661K подписчиков", image: "/bloggers/ilia-makarov.svg", instagramUrl: "https://www.instagram.com/ilia._.makarov" },
  { name: "katyaa_golden", followers: "957K подписчиков", image: "/bloggers/katyaa-golden.svg", instagramUrl: "https://www.instagram.com/katyaa_golden" },
  { name: "rauwil", followers: "1M подписчиков", image: "/bloggers/rauwil.svg", instagramUrl: "https://www.instagram.com/rauwil" },
  { name: "astavmenya", followers: "417K подписчиков", image: "/bloggers/astavmenya.svg", instagramUrl: "https://www.instagram.com/astavmenya" },
  { name: "ic3333r", followers: "516K подписчиков", image: "/bloggers/ic3333r.svg", instagramUrl: "https://www.instagram.com/ic3333r" },
  { name: "memoboron", followers: "212K подписчиков", image: "/bloggers/memoboron.svg", instagramUrl: "https://www.instagram.com/memoboron" },
  { name: "pilyaginzhara", followers: "652K подписчиков", image: "/bloggers/pilyaginzhara.svg", instagramUrl: "https://www.instagram.com/pilyaginzhara" },
  { name: "chikovanivita", followers: "732K подписчиков", image: "/bloggers/chikovanivita.svg", instagramUrl: "https://www.instagram.com/chikovanivita" },
  { name: "redgisinger", followers: "1.1M подписчиков", image: "/bloggers/redgisinger.svg", instagramUrl: "https://www.instagram.com/redgisinger" },
  { name: "kubanok", followers: "475K подписчиков", image: "/bloggers/kubanok.svg", instagramUrl: "https://www.instagram.com/kubanok" },
  { name: "whatsabik", followers: "464K подписчиков", image: "/bloggers/whatsabik.svg", instagramUrl: "https://www.instagram.com/whatsabik" },
  { name: "karena_macarena", followers: "927K подписчиков", image: "/bloggers/karena-macarena.svg", instagramUrl: "https://www.instagram.com/karena_macarena" },
  { name: "realmoneyken", followers: "1.6M подписчиков", image: "/bloggers/realmoneyken.svg", instagramUrl: "https://www.instagram.com/realmoneyken" },
  { name: "iamgeegun", followers: "5.1M подписчиков", image: "/bloggers/iamgeegun.svg", instagramUrl: "https://www.instagram.com/iamgeegun" },
  { name: "instasamka", followers: "5.1M подписчиков", image: "/bloggers/instasamka.svg", instagramUrl: "https://www.instagram.com/instasamka" },
  { name: "konfuz_music", followers: "310K подписчиков", image: "/bloggers/konfuz-music.svg", instagramUrl: "https://www.instagram.com/konfuz_music" },
  { name: "doni.blackstar", followers: "1M подписчиков", image: "/bloggers/doni-blackstar.svg", instagramUrl: "https://www.instagram.com/doni.blackstar" },
  { name: "djsmash", followers: "423K подписчиков", image: "/bloggers/djsmash.svg", instagramUrl: "https://www.instagram.com/djsmash" },
  { name: "gradusy_band", followers: "105K подписчиков", image: "/bloggers/gradusy-band.svg", instagramUrl: "https://www.instagram.com/gradusy_band" },
  { name: "amirchiiik_", followers: "573K подписчиков", image: "/bloggers/amirchiiik.svg", instagramUrl: "https://www.instagram.com/amirchiiik_" },
  { name: "valeriya_bearwolf", followers: "2.1M подписчиков", image: "/bloggers/valeriya-bearwolf.svg", instagramUrl: "https://www.instagram.com/valeriya_bearwolf" },
];
