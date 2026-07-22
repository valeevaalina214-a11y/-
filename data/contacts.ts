/**
 * "Контакты" (Contacts) section data.
 *
 * ⚠️ PLACEHOLDER контактные данные — замените на реальные Rocket Agency.
 * Не выдумывайте настоящие адреса/телефоны, если их нет.
 */

export const contacts = {
  heading: "Давайте создадим проект вместе",
  phone: {
    label: "+7 (000) 000-00-00", // TODO: реальный телефон
    href: "tel:+70000000000",
  },
  email: {
    label: "hello@rocketagency.ru", // TODO: реальная почта
    href: "mailto:hello@rocketagency.ru",
  },
  telegram: {
    label: "@rocketagency", // TODO
    href: "https://t.me/rocketagency",
  },
  instagram: {
    label: "@rocketagency", // TODO
    href: "https://instagram.com/rocketagency",
  },
} as const;
