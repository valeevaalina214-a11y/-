/**
 * "Услуги" (Services) section data.
 * Icons come from lucide-react — change the `icon` key to any exported Lucide icon name
 * that is mapped in components/Services.tsx.
 */

export type Service = {
  title: string;
  description: string;
  /** Key mapped to a Lucide icon in components/Services.tsx */
  icon: "target" | "pen" | "video" | "rocket" | "users";
};

export const services: Service[] = [
  {
    title: "Стратегия продвижения",
    description:
      "Разработка эффективной стратегии продвижения брендов и продуктов за счёт индивидуального подхода и объёмной маркетинговой поверхности внутри группы.",
    icon: "target",
  },
  {
    title: "Визуальные концепции и дизайн",
    description:
      "Разработка визуальных концепций и дизайн-систем для брендов-партнёров.",
    icon: "pen",
  },
  {
    title: "Видео- и аудиоконтент",
    description:
      "Создание видео- и аудиоконтента, необходимого для продвижения, силами внутреннего продакшена группы компаний.",
    icon: "video",
  },
  {
    title: "Маркетинговые кампании под ключ",
    description:
      "Реализация маркетинговой кампании от идеи до запуска с предоставлением подробной отчётности и сопровождением персонального менеджера.",
    icon: "rocket",
  },
  {
    title: "Подбор блогеров",
    description:
      "Подбор блогеров под задачи бренда, тематику проекта, целевую аудиторию и бюджет.",
    icon: "users",
  },
];
