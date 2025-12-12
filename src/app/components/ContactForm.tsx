"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "../TranslationProvider";

const COOLDOWN_MS = 2 * 60 * 1000; // 2 minutes
const COOLDOWN_KEY = "quote_submit_cooldown";

export default function Contact() {
  const { t, lang } = useTranslation();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownEnd, setCooldownEnd] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string | null>(null);

  // Check cooldown on mount and set up countdown interval
  useEffect(() => {
    const checkCooldown = () => {
      const lastTs = localStorage.getItem(COOLDOWN_KEY);
      if (lastTs) {
        const elapsed = Date.now() - Number(lastTs);
        if (elapsed < COOLDOWN_MS) {
          const endTime = Number(lastTs) + COOLDOWN_MS;
          setCooldownEnd(endTime);
        } else {
          localStorage.removeItem(COOLDOWN_KEY);
          setCooldownEnd(null);
        }
      }
    };

    checkCooldown();

    // Update countdown every second
    const interval = setInterval(() => {
      const lastTs = localStorage.getItem(COOLDOWN_KEY);
      if (lastTs) {
        const remaining = Number(lastTs) + COOLDOWN_MS - Date.now();
        if (remaining > 0) {
          const mins = Math.floor(remaining / 60000);
          const secs = Math.floor((remaining % 60000) / 1000);
          setTimeRemaining(`${mins}m ${secs}s`);
          setCooldownEnd(Number(lastTs) + COOLDOWN_MS);
        } else {
          localStorage.removeItem(COOLDOWN_KEY);
          setCooldownEnd(null);
          setTimeRemaining(null);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current || isSubmitting || cooldownEnd) return;

    setIsSubmitting(true);

    const form = new FormData(formRef.current);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        // Set cooldown before redirect
        localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
        setCooldownEnd(Date.now() + COOLDOWN_MS);
        // Redirect to thank-you page
        router.push("/thank-you");
      } else {
        const data = await res.json().catch(() => ({}));
        alert(
          (lang === "fr" ? "Échec de l'envoi : " : "Failed to send: ") +
            (data.error || "Unknown error")
        );
      }
    } catch (err) {
      alert(lang === "fr" ? "Erreur réseau" : "Network error");
    } finally {
      setIsSubmitting(false);
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

        {cooldownEnd && (
          <div className="mb-6 p-4 bg-sky-100 border border-sky-400 rounded-lg text-center">
            <p className="text-sky-800 font-medium">
              {t("quote_cooldown_message").replace("{{time}}", timeRemaining || "...")}
            </p>
          </div>
        )}

        {!cooldownEnd && (
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
              disabled={isSubmitting}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 rounded-lg shadow hover:from-yellow-500 hover:to-yellow-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (lang === "fr" ? "Envoi en cours..." : "Sending...") : t("send_request")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
