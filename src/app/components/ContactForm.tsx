"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from '../TranslationProvider';

export default function Contact() {
  const { t, lang } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formSent, setFormSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "REDACTED_SERVICE_ID";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "REDACTED_TEMPLATE_ID";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "REDACTED_PUBLIC_KEY";

    emailjs.sendForm(
      serviceId,
      templateId,
      formRef.current,
      publicKey
    ).then(
      () => setFormSent(true),
      (error) => alert((lang === "fr" ? "Échec de l'envoi : " : "Failed to send: ") + error.text)
    );
  }

  return (
    <section id="quote" className="py-16 bg-gradient-to-b from-sky-100 to-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center shine-blue mx-auto w-fit">
          {t('request_quote')}
        </h2>
        {/* Overlay after send */}
        {formSent && (
          <div className="fixed inset-0 flex items-center justify-center bg-sky-200/95 z-50">
            <div className="bg-sky-400 text-white p-8 rounded-xl shadow-xl text-center max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold mb-4">
                {lang === "fr"
                  ? "Merci! Votre demande a été envoyée. Vous recevrez une réponse dans quelques jours."
                  : "Thank you! Your request was sent. You should receive a response in a few days."}
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
        {/* Form */}
        {!formSent && (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col space-y-5"
          >
            <input
              name="user_name"
              type="text"
              placeholder={t('your_name')}
              className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-sky-400 placeholder-gray-400"
              required
            />
            <input
              name="user_email"
              type="email"
              placeholder={t('your_email')}
              className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-sky-400 placeholder-gray-400"
              required
            />
            <input
              name="user_phone"
              type="tel"
              placeholder={t('your_phone')}
              className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-sky-400 placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder={t('how_can_we_help')}
              className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-sky-400 resize-none min-h-[100px] placeholder-gray-400"
              required
            />
            {/* Hidden language field */}
            <input type="hidden" name="site_lang" value={lang} />
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 rounded-lg shadow hover:from-yellow-500 hover:to-yellow-700 transition"
            >
              {t('send_request')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
