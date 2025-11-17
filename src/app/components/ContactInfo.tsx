"use client";
import { useTranslation } from "../TranslationProvider";

export default function ContactInfo() {
    const { t } = useTranslation();
    return (
      <section id="contact" className="py-16 bg-gradient-to-t from-sky-100 to-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center shine-blue mx-auto w-fit">
            {t('contact_info_title') || 'Contact Information'}
          </h2>
          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Address */}
            <a
              href="/globe.svg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-2xl transition"
            >
              <span className="text-lg font-bold mb-2 text-gray-700">{t('address_label')}</span>
              <span className="text-gray-700">{t('address_value')}</span>
            </a>
            {/* Phone */}
            <a
              href="tel:0000000000"
              className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-2xl transition"
            >
              <span className="text-lg font-bold mb-2 text-gray-700">{t('phone_label')}</span>
              <span className="text-gray-700">000-000-0000</span>
            </a>
         {/* Instagram */}
            <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-2xl transition"
            >
            <span className="text-lg font-bold mb-2 text-gray-700">{t('instagram_label')}</span>
            <span className="text-pink-600">@placeholder_company</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-2xl transition"
            >
              <span className="text-lg font-bold mb-2 text-gray-700">{t('facebook_label')}</span>
              <span className="text-sky-700">@placeholder_company</span>
            </a>
          </div>
          {/* Google Maps Embed */}
          <div className="mb-6 text-center text-lg md:text-xl font-semibold text-sky-900">
            {t('mont_serve_area')}
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg flex justify-center items-center bg-white">
            <img
              src="/globe.svg"
              alt="Map placeholder"
              style={{ width: '100%', maxWidth: 600, height: 300, objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    );
  }
  