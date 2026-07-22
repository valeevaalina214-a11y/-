"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, Send, Instagram, CheckCircle2 } from "lucide-react";
import { contacts } from "@/data/contacts";
import { SectionHeading } from "@/components/SectionHeading";
import { Mascot } from "@/components/Mascot";
import { Stars } from "@/components/Stars";
import { fadeUp, viewportOnce } from "@/lib/motion";

type FormState = {
  name: string;
  company: string;
  phone: string;
  contact: string;
  task: string;
};

const empty: FormState = { name: "", company: "", phone: "", contact: "", task: "" };

const contactLinks = [
  { label: contacts.phone.label, href: contacts.phone.href, Icon: Phone, external: false },
  { label: contacts.email.label, href: contacts.email.href, Icon: Mail, external: false },
  { label: contacts.telegram.label, href: contacts.telegram.href, Icon: Send, external: true },
  { label: contacts.instagram.label, href: contacts.instagram.href, Icon: Instagram, external: true },
];

const stars = [
  { top: "18%", left: "6%", size: 20, delay: 0.5 },
  { top: "12%", left: "70%", size: 26, delay: 1.2 },
  { top: "72%", left: "40%", size: 16, delay: 0.8 },
];

export function Contacts() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Укажите имя";
    if (!values.contact.trim()) next.contact = "Укажите почту или Telegram";
    if (!values.task.trim()) next.task = "Опишите задачу";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    // DEMO submit handler — no backend yet.
    // TODO: подключите отправку заявки к вашему API или сервису форм здесь,
    // например: await fetch("/api/lead", { method: "POST", body: JSON.stringify(values) });
    // Пока просто имитируем успешную отправку без перезагрузки страницы.
    await new Promise((r) => setTimeout(r, 400));
    setSent(true);
    setValues(empty);
  };

  return (
    <section id="contacts" className="relative overflow-hidden bg-gradient-to-b from-lavender-200 to-lavender-300 py-20 sm:py-28">
      <Stars stars={stars} tone="light" />
      <div className="container-x relative">
        <SectionHeading className="mb-10 sm:mb-12">
          Контакты
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: heading + contacts + mascot */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <h3 className="max-w-md font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Давайте создадим проект вместе
            </h3>

            <ul className="mt-8 space-y-3">
              {contactLinks.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-3 text-graphite transition-colors hover:text-ink"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-lavender-600 transition-colors group-hover:bg-ink group-hover:text-milk">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-base font-medium">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pointer-events-none absolute -bottom-10 right-0 hidden w-40 sm:block lg:w-48">
              <Mascot variant="black" />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-4xl border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur-sm sm:p-8"
          >
            {sent ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="mb-4 h-14 w-14 text-lavender-500" />
                <p className="font-display text-2xl font-bold text-ink">Заявка отправлена!</p>
                <p className="mt-2 max-w-sm text-graphite/80">
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-milk transition-colors hover:bg-graphite"
                >
                  Отправить ещё одну
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-4">
                <Field
                  label="Имя *"
                  name="name"
                  value={values.name}
                  onChange={update("name")}
                  error={errors.name}
                  placeholder="Как вас зовут"
                />
                <Field
                  label="Название компании"
                  name="company"
                  value={values.company}
                  onChange={update("company")}
                  placeholder="Необязательно"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Телефон"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={update("phone")}
                    placeholder="+7 ..."
                  />
                  <Field
                    label="Почта или Telegram *"
                    name="contact"
                    value={values.contact}
                    onChange={update("contact")}
                    error={errors.contact}
                    placeholder="@username / mail@…"
                  />
                </div>
                <Field
                  label="Описание задачи *"
                  name="task"
                  as="textarea"
                  value={values.task}
                  onChange={update("task")}
                  error={errors.task}
                  placeholder="Коротко о проекте и целях"
                />

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-milk transition-colors hover:bg-graphite"
                >
                  Отправить заявку
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Labelled input / textarea with inline validation message. */
function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  as = "input",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
}) {
  const base =
    "w-full rounded-2xl border bg-white/90 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-graphite/40 focus:border-lavender-500";
  const border = error ? "border-red-400" : "border-lavender-200";

  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-graphite/70">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          aria-invalid={!!error}
          className={`${base} ${border} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={`${base} ${border}`}
        />
      )}
      {error ? <span className="mt-1 block text-xs text-red-500">{error}</span> : null}
    </label>
  );
}
