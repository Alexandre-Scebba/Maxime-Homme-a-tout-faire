"use client";
import { useTranslation } from "../TranslationProvider";

export default function ContactInfo() {
  const { t } = useTranslation();

  // Use the same pattern as in Header
  const phoneRaw = process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
  const phoneDisplay =
    process.env.NEXT_PUBLIC_PHONE_DISPLAY || phoneRaw || "";

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 bg-gradient-to-t from-sky-100 to-white"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center shine-blue mx-auto w-fit">
          {t("contact_info_title") || "Contact Information"}
        </h2>

        {/* Two primary contact cards: Phone + Instagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Phone */}
          <a
            href={phoneRaw ? `tel:${phoneRaw}` : undefined}
            className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-2xl transition"
          >
            <span className="text-lg font-bold mb-2 text-gray-700">
              {t("phone_label")}
            </span>
            <span className="text-gray-700">{phoneDisplay}</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/maximepienture/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-2xl transition"
          >
            <span className="text-lg font-bold mb-2 text-gray-700">
              {t("instagram_label")}
            </span>
            <span className="text-pink-600">@maximepienture</span>
          </a>
        </div>

        {/* Service area tagline */}
        <div className="text-center text-lg md:text-xl font-semibold text-sky-900">
          {t("mont_serve_area")}
        </div>
      </div>
    </section>
  );
}
