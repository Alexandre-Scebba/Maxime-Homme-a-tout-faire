"use client";
import { useTranslation } from '../TranslationProvider';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-sky-300">
      <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center shine-blue mx-auto w-fit">
      {t('about_title')}
        </h2>
        <p className="text-lg text-gray-700">
          {t('about_text')}
        </p>
      </div>
    </section>
  );
}
  