"use client";
import { useTranslation } from "../TranslationProvider";

export default function ContactInfo() {
    const { t } = useTranslation();
  const phone = (process.env.NEXT_PUBLIC_PHONE as string) || "000-000-0000";
    return (
      <section id="contact" className="py-16 bg-gradient-to-t from-sky-100 to-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center shine-blue mx-auto w-fit">
            {t('contact_info_title') || 'Contact Information'}
          </h2>
          {/* Two primary contact cards: Phone + Instagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Phone */}
            <a
              href={`tel:${phone}`}
              className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-2xl transition"
            >
              <span className="text-lg font-bold mb-2 text-gray-700">{t('phone_label')}</span>
              <span className="text-gray-700">{phone}</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/maximepeinture/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-2xl transition"
            >
              <span className="text-lg font-bold mb-2 text-gray-700">{t('instagram_label')}</span>
              <span className="text-pink-600">@maximepeinture</span>
            </a>
          </div>
          {/* Google Maps Embed */}
          <div className="mb-6 text-center text-lg md:text-xl font-semibold text-sky-900">
            {t('mont_serve_area')}
          </div>
          <div className="w-full flex justify-center">
            <div className="rounded-xl shadow-lg p-2 bg-white/5 border-2 border-sky-600">
              <a href="/montmap.jpeg" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg">
                <img
                  src="/montmap.jpeg"
                  alt={t('map_alt') || 'Montreal service area map'}
                  className="block w-full max-w-[520px] h-auto object-contain rounded-md"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  