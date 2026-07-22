/**
 * "Наши блогеры" (Our bloggers) section data.
 *
 * Источник: два PDF из документов — список блогеров (подписчики + Instagram)
 * и маппинг «ник → имя / сценическое имя».
 *   name          — имя / сценическое имя (отображается в карточке)
 *   handle        — Instagram-ник (для справки; ссылка строится из него)
 *   followers     — количество подписчиков в Instagram
 *   image         — путь к фото в /public/bloggers/ (сейчас SVG-заглушки)
 *   instagramUrl  — ссылка на Instagram (открывается в новой вкладке)
 *
 * КАК ДОБАВИТЬ РЕАЛЬНЫЕ ФОТО:
 *   1. Положите фото в /public/bloggers/ (соотношение 3:4, лучше .webp).
 *   2. Замените значение `image`, напр. "/bloggers/dimasblog.webp".
 * Имена, ники, ссылки и подписчики взяты из документов — не менять произвольно.
 */

export type Blogger = {
  name: string;
  handle: string;
  followers: string;
  image: string;
  instagramUrl: string;
};

export const bloggers: Blogger[] = [
  { name: "Аслан Шукаша", handle: "aslanshukasha", followers: "382K подписчиков", image: "/bloggers/aslanshukasha.webp", instagramUrl: "https://www.instagram.com/aslanshukasha" },
  { name: "Джамиля", handle: "djami.lyalya", followers: "537K подписчиков", image: "/bloggers/djami-lyalya.webp", instagramUrl: "https://www.instagram.com/djami.lyalya" },
  { name: "Дворецкий", handle: "dvoretsky11", followers: "615K подписчиков", image: "/bloggers/dvoretsky11.webp", instagramUrl: "https://www.instagram.com/dvoretsky11" },
  { name: "Лиза Зогуб", handle: "lizogu.b", followers: "182K подписчиков", image: "/bloggers/lizogu-b.webp", instagramUrl: "https://www.instagram.com/lizogu.b" },
  { name: "Герман Глас", handle: "germanglas", followers: "707K подписчиков", image: "/bloggers/germanglas.webp", instagramUrl: "https://www.instagram.com/germanglas" },
  { name: "Юлия Гаврилина", handle: "julia.gavrilina", followers: "5.2M подписчиков", image: "/bloggers/julia-gavrilina.webp", instagramUrl: "https://www.instagram.com/julia.gavrilina" },
  { name: "Катя Голышева", handle: "katya_golyshevaa", followers: "1.3M подписчиков", image: "/bloggers/katya-golyshevaa.webp", instagramUrl: "https://www.instagram.com/katya_golyshevaa" },
  { name: "Мехрона Шарипова", handle: "mekhrona_18", followers: "573K подписчиков", image: "/bloggers/mekhrona-18.webp", instagramUrl: "https://www.instagram.com/mekhrona_18" },
  { name: "Анастасия Парамонова", handle: "paramonova_as", followers: "404K подписчиков", image: "/bloggers/paramonova-as.webp", instagramUrl: "https://www.instagram.com/paramonova_as" },
  { name: "Sleepy Princess", handle: "sleepy.princess.8", followers: "853K подписчиков", image: "/bloggers/sleepy-princess-8.webp", instagramUrl: "https://www.instagram.com/sleepy.princess.8" },
  { name: "Симка (Симона Ли)", handle: "simka.le", followers: "507K подписчиков", image: "/bloggers/simka-le.webp", instagramUrl: "https://www.instagram.com/simka.le" },
  { name: "Амина Мирзоева (Tenderlybae)", handle: "tenderlybae", followers: "3.9M подписчиков", image: "/bloggers/tenderlybae.webp", instagramUrl: "https://www.instagram.com/tenderlybae" },
  { name: "KLVRRR", handle: "klvrrrr", followers: "154K подписчиков", image: "/bloggers/klvrrrr.webp", instagramUrl: "https://www.instagram.com/klvrrrr" },
  { name: "Mibreoo", handle: "mibreoo", followers: "154K подписчиков", image: "/bloggers/mibreoo.webp", instagramUrl: "https://www.instagram.com/mibreoo" },
  { name: "KateSi", handle: "im_katesi", followers: "615K подписчиков", image: "/bloggers/im-katesi.webp", instagramUrl: "https://www.instagram.com/im_katesi" },
  { name: "Карина Карнавал", handle: "karna.val", followers: "7.2M подписчиков", image: "/bloggers/karna-val.webp", instagramUrl: "https://www.instagram.com/karna.val" },
  { name: "Дима Масленников", handle: "dimasblog", followers: "1.9M подписчиков", image: "/bloggers/dimasblog.webp", instagramUrl: "https://www.instagram.com/dimasblog" },
  { name: "Аня Ищук", handle: "anyaischuk", followers: "3.2M подписчиков", image: "/bloggers/anyaischuk.webp", instagramUrl: "https://www.instagram.com/anyaischuk" },
  { name: "Амиран Сардаров", handle: "amiran696969", followers: "809K подписчиков", image: "/bloggers/amiran696969.webp", instagramUrl: "https://www.instagram.com/amiran696969" },
  { name: "Тамби Масаев", handle: "tambi_masaev", followers: "1.3M подписчиков", image: "/bloggers/tambi-masaev.webp", instagramUrl: "https://www.instagram.com/tambi_masaev" },
  { name: "Илья Макаров", handle: "ilia._.makarov", followers: "661K подписчиков", image: "/bloggers/ilia-makarov.webp", instagramUrl: "https://www.instagram.com/ilia._.makarov" },
  { name: "Катя Голден", handle: "katyaa_golden", followers: "957K подписчиков", image: "/bloggers/katyaa-golden.webp", instagramUrl: "https://www.instagram.com/katyaa_golden" },
  { name: "Rauwil", handle: "rauwil", followers: "1M подписчиков", image: "/bloggers/rauwil.webp", instagramUrl: "https://www.instagram.com/rauwil" },
  { name: "Astavmenya", handle: "astavmenya", followers: "417K подписчиков", image: "/bloggers/astavmenya.webp", instagramUrl: "https://www.instagram.com/astavmenya" },
  { name: "Icer", handle: "ic3333r", followers: "516K подписчиков", image: "/bloggers/ic3333r.webp", instagramUrl: "https://www.instagram.com/ic3333r" },
  { name: "Мемоборона", handle: "memoboron", followers: "212K подписчиков", image: "/bloggers/memoboron.webp", instagramUrl: "https://www.instagram.com/memoboron" },
  { name: "Пилягин", handle: "pilyaginzhara", followers: "652K подписчиков", image: "/bloggers/pilyaginzhara.webp", instagramUrl: "https://www.instagram.com/pilyaginzhara" },
  { name: "Виолетта Чиковани", handle: "chikovanivita", followers: "732K подписчиков", image: "/bloggers/chikovanivita.webp", instagramUrl: "https://www.instagram.com/chikovanivita" },
  { name: "Redgi Singer", handle: "redgisinger", followers: "1.1M подписчиков", image: "/bloggers/redgisinger.webp", instagramUrl: "https://www.instagram.com/redgisinger" },
  { name: "Кубанок", handle: "kubanok", followers: "475K подписчиков", image: "/bloggers/kubanok.webp", instagramUrl: "https://www.instagram.com/kubanok" },
  { name: "Сабик", handle: "whatsabik", followers: "464K подписчиков", image: "/bloggers/whatsabik.webp", instagramUrl: "https://www.instagram.com/whatsabik" },
  { name: "Карен Макаранян", handle: "karena_macarena", followers: "927K подписчиков", image: "/bloggers/karena-macarena.webp", instagramUrl: "https://www.instagram.com/karena_macarena" },
  { name: "RealMoneyKen", handle: "realmoneyken", followers: "1.6M подписчиков", image: "/bloggers/realmoneyken.webp", instagramUrl: "https://www.instagram.com/realmoneyken" },
  { name: "Джиган", handle: "iamgeegun", followers: "5.1M подписчиков", image: "/bloggers/iamgeegun.webp", instagramUrl: "https://www.instagram.com/iamgeegun" },
  { name: "Дарья Зотеева (Instasamka)", handle: "instasamka", followers: "5.1M подписчиков", image: "/bloggers/instasamka.webp", instagramUrl: "https://www.instagram.com/instasamka" },
  { name: "Михаил Маргарян (Konfuz)", handle: "konfuz_music", followers: "310K подписчиков", image: "/bloggers/konfuz-music.webp", instagramUrl: "https://www.instagram.com/konfuz_music" },
  { name: "DONI (Дониёр Исламов)", handle: "doni.blackstar", followers: "1M подписчиков", image: "/bloggers/doni-blackstar.webp", instagramUrl: "https://www.instagram.com/doni.blackstar" },
  { name: "DJ Smash (Андрей Ширман)", handle: "djsmash", followers: "423K подписчиков", image: "/bloggers/djsmash.webp", instagramUrl: "https://www.instagram.com/djsmash" },
  { name: "Группа «Градусы»", handle: "gradusy_band", followers: "105K подписчиков", image: "/bloggers/gradusy-band.webp", instagramUrl: "https://www.instagram.com/gradusy_band" },
  { name: "Амирхан Батабаев (Amirchik)", handle: "amirchiiik_", followers: "573K подписчиков", image: "/bloggers/amirchiiik.webp", instagramUrl: "https://www.instagram.com/amirchiiik_" },
  { name: "Bearwolf (Валерия)", handle: "valeriya_bearwolf", followers: "2.1M подписчиков", image: "/bloggers/valeriya-bearwolf.webp", instagramUrl: "https://www.instagram.com/valeriya_bearwolf" },
];
