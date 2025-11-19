"use client";
import { useTranslation } from '../TranslationProvider';

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center shine-blue mx-auto w-fit">
      {t('testimonials_title')}
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-50 rounded-xl p-6 shadow text-center">
            <p className="text-lg text-gray-700 mb-4">
              {t('testimonial_1')}
            </p>
            <div className="font-bold text-sky-700">— {t('testimonial_author_1')}</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow text-center">
            <p className="text-lg text-gray-700 mb-4">
              {t('testimonial_2')}
            </p>
            <div className="font-bold text-sky-700">— {t('testimonial_author_2')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
  