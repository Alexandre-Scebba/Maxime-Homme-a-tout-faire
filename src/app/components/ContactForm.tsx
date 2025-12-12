"use client";

import { useRef, useState } from "react";
import { useTranslation } from "../TranslationProvider";

export default function Contact() {
  const { t, lang } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formSent, setFormSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    const form = new FormData(formRef.current);
    const payload = Object.fromEntries(form.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setFormSent(true);
    } else {
      const data = await res.json().catch(() => ({}));
      alert(
        (lang === "fr" ? "Échec de l'envoi : " : "Failed to send: ") +
          (data.error || "Unknown error")
      );
    }
  }

  return (
    <section
      id="quote"
      className="scroll-mt-24 py-16 bg-gradient-to-b from-sky-100 to-white"
    >
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center shine-blue mx-auto w-fit">
          {t("request_quote")}
        </h2>

        {formSent && (
          <div className="fixed inset-0 flex items-center justify-center bg-sky-200/95 z-50">
            <div className="bg-sky-400 text-white p-8 rounded-xl shadow-xl text-center max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold mb-4">
                {lang === "fr"
                  ? `Merci! ${t("response_time_message")}`
                  : `Thank you! ${t("response_time_message")}`}
              </h3>
              <button
                onClick={() => setFormSent(false)}
                className="mt-4 bg-white text-sky-600 font-bold py-2 px-6 rounded shadow hover:bg-sky-100 transition"
              >
                {lang === "fr" ? "Fermer" : "Close"}
              </button>
            </div>
          </div>
        )}

        {!formSent && (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col space-y-5"
          >
            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                {t("your_name")}
                <span className="text-red-500">*</span>
              </span>
              <input
                name="user_name"
                type="text"
                placeholder={t("your_name")}
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-sky-400 placeholder-gray-400"
                required
                aria-required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                {t("email_label")}
                <span className="text-red-500">*</span>
              </span>
              <input
                name="user_email"
                type="email"
                placeholder={t("email_placeholder")}
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-sky-400 placeholder-gray-400"
                required
                aria-required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                {t("your_phone")}
              </span>
              <input
                name="user_phone"
                type="tel"
                placeholder={t("your_phone")}
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-sky-400 placeholder-gray-400"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                {t("how_can_we_help")}
                <span className="text-red-500">*</span>
              </span>
              <textarea
                name="message"
                placeholder={t("how_can_we_help")}
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-sky-400 resize-none min-h-[100px] placeholder-gray-400"
                required
                aria-required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                {t("square_footage")}
              </span>
              <input
                name="square_footage"
                type="text"
                placeholder={t("square_footage_placeholder")}
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-sky-400 placeholder-gray-400"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                {t("num_rooms")}
              </span>
              <input
                name="num_rooms"
                type="number"
                min={0}
                placeholder={t("num_rooms_placeholder")}
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-sky-400 placeholder-gray-400"
              />
            </label>

            <fieldset className="flex items-center gap-4">
              <legend className="text-sm font-medium text-gray-700">
                {t("major_wall_repair")}
              </legend>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="major_wall_repair"
                  value="yes"
                  className="h-4 w-4 accent-sky-600"
                />
                <span className="text-sm text-gray-800 font-medium">
                  {t("yes")}
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="major_wall_repair"
                  value="no"
                  defaultChecked
                  className="h-4 w-4 accent-sky-600"
                />
                <span className="text-sm text-gray-800 font-medium">
                  {t("no")}
                </span>
              </label>
            </fieldset>

            <input type="hidden" name="site_lang" value={lang} />

            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 rounded-lg shadow hover:from-yellow-500 hover:to-yellow-700 transition"
            >
              {t("send_request")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
