# Rocket Agency — сайт креативного блогерского агентства

Полностью адаптивный одностраничный сайт на **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons**.

Сайт состоит из пяти блоков: **титульный экран**, **услуги**, **наши блогеры**, **Rocket Group**, **контакты**.

---

## 🚀 Запуск

```bash
npm install        # установка зависимостей
npm run dev        # запуск в режиме разработки → http://localhost:3000
npm run build      # production-сборка
npm run start      # запуск production-сборки
npm run lint       # проверка ESLint
```

Требуется Node.js 18.18+ (проверено на Node 22).

---

## 📁 Структура проекта

```
.
├── app/
│   ├── layout.tsx          # корневой layout, подключение шрифтов (Plus Jakarta Sans + Caveat)
│   ├── page.tsx            # сборка страницы из 5 секций
│   └── globals.css         # базовые стили, контейнер, prefers-reduced-motion
│
├── components/
│   ├── Header.tsx          # прилипающая шапка + мобильное меню
│   ├── Hero.tsx            # титульный экран
│   ├── Services.tsx        # блок «Услуги»
│   ├── Bloggers.tsx        # блок «Наши блогеры»
│   ├── RocketGroup.tsx     # блок «Rocket Group»
│   ├── Contacts.tsx        # блок «Контакты» + форма
│   ├── SectionHeading.tsx  # анимированный заголовок секции
│   ├── Button.tsx          # брендовая кнопка со стрелкой
│   ├── SocialIcons.tsx     # соц-иконки (Telegram / Instagram / Email)
│   ├── Character.tsx       # 3D-персонаж (next/image + плавающая анимация)
│   └── Stars.tsx           # декоративные звёзды
│
├── data/                   # ⭐ ВСЕ ТЕКСТЫ И ДАННЫЕ ЗДЕСЬ — правьте только их
│   ├── site.ts             # бренд, тексты hero, пункты навигации
│   ├── services.ts         # карточки услуг
│   ├── bloggers.ts         # блогеры (имя, подписчики, фото, Instagram)
│   ├── rocketGroup.ts      # проекты Rocket Group
│   └── contacts.ts         # телефон, почта, Telegram, Instagram
│
├── lib/
│   └── motion.ts           # переиспользуемые варианты Framer Motion
│
└── public/
    ├── characters/         # изображения 3D-персонажей (hero / group / contacts)
    ├── bloggers/           # фотографии блогеров
    └── logos/              # логотипы проектов Rocket Group
```

---

## ✏️ Где что менять

| Что нужно изменить | Файл |
| --- | --- |
| **Данные блогеров** (имя, подписчики, ссылка Instagram) | `data/bloggers.ts` |
| **Фотографии блогеров** | положить в `public/bloggers/`, путь указать в `data/bloggers.ts` (поле `image`) |
| **Проекты Rocket Group** (название, описание, ссылка, логотип) | `data/rocketGroup.ts` |
| **Логотипы Rocket Group** | положить в `public/logos/`, путь указать в поле `logo` |
| **Персонаж-маскот** | `components/Mascot.tsx` — векторный анимированный персонаж (моргает + машет). Цвет через `variant="lavender" | "black"`. Реальные 3D-рендеры можно подключить через `components/Character.tsx` (но статичный PNG не моргает — нужен спрайт/Lottie) |
| **Услуги** | `data/services.ts` |
| **Контактные данные** (телефон, почта, TG, IG) | `data/contacts.ts` |
| **Тексты hero / навигация / название бренда** | `data/site.ts` |
| **Обработчик формы (подключение API)** | `components/Contacts.tsx`, функция `handleSubmit` (см. комментарий `TODO`) |

### Блогеры

Данные хранятся в массиве `bloggers` (`data/bloggers.ts`) со структурой:

```ts
{ name: string; followers: string; image: string; instagramUrl: string }
```

Сейчас это **заглушки** — замените значениями из Word-документа.
В карточке показываются только фото, имя и количество подписчиков; фото, имя и
иконка Instagram кликабельны и ведут на Instagram в новой вкладке
(`target="_blank"` + `rel="noopener noreferrer"`).

### Фотографии

- Кладите в `public/bloggers/` с **одинаковым соотношением сторон 3:4**.
- Предпочтительно `.webp` / `.avif` (используется `next/image`, `object-fit: cover`).
- Временные заглушки (`.svg`) отдаются без оптимизации; реальные растровые фото
  оптимизируются автоматически.

### Форма обратной связи

`components/Contacts.tsx` → функция `handleSubmit`. Сейчас это демонстрационный
обработчик (имитация отправки без перезагрузки). Подключение реального API
отмечено комментарием `TODO`:

```ts
// TODO: await fetch("/api/lead", { method: "POST", body: JSON.stringify(values) });
```

Форма проверяет обязательные поля (имя, почта/Telegram, описание задачи),
показывает ошибки и сообщение об успешной отправке.

---

## 🎨 Дизайн и анимации

- **Палитра:** светло-лавандовый, пастельно-фиолетовый, молочно-белый, чёрный,
  тёмно-серый (`tailwind.config.ts` → `colors`).
- **Шрифты:** Plus Jakarta Sans (крупный гротеск) + Caveat (рукописный акцент),
  подключены через `next/font`.
- **Анимации** (Framer Motion): появление hero по строкам, въезд персонажа,
  мерцание звёзд, поочерёдное появление карточек при прокрутке, hover-эффекты.
- **Доступность:** учитывается `prefers-reduced-motion` — при отключённой
  анимации сайт остаётся полностью удобным.

---

## ✅ Проверки

- `npm run build` — сборка проходит без ошибок.
- `npm run lint` — без предупреждений ESLint.
- Нет горизонтального скролла на десктопе, планшете и смартфоне.
- Все изображения через `next/image` с `alt`, `sizes` и lazy-loading
  (кроме главного изображения первого экрана — `priority`).
