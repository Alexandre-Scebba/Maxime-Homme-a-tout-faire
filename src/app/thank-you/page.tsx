"use client";

import Link from "next/link";
import { useTranslation } from "../TranslationProvider";

export default function ThankYou() {
  const { t, lang } = useTranslation();

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-white py-16 px-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success checkmark or icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Thank you message */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          {lang === "fr" ? "Merci !" : "Thank You!"}
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-6">
          {t("response_time_message")}
        </p>

        <p className="text-base md:text-lg text-gray-600 mb-8">
          {lang === "fr"
            ? "Nous avons reçu votre demande de soumission et nous vous répondrons bientôt."
            : "We've received your quote request and will be in touch soon."}
        </p>

        {/* Navigation button */}
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-sky-400 to-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:from-sky-500 hover:to-sky-700 transition"
        >
          {lang === "fr" ? "Retour à l'accueil" : "Back to Home"}
        </Link>
      </div>
    </main>
  );
}
