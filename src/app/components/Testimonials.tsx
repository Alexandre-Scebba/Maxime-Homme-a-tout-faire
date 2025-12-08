"use client";
import { useTranslation } from "../TranslationProvider";

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center shine-blue mx-auto w-fit">
          {t("testimonials_title")}
        </h2>

        <p className="text-center text-gray-600 mb-6">
          {t("reviews_blurb") ||
            "See what customers are saying about our work."}
        </p>

        {/* Google Maps embed showing reviews */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178787.81912808729!2d-73.71187334999999!3d45.5591827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x650755dbe05bb3d7%3A0x5337aa01f437853!2sMaxime%20Peinture!5e0!3m2!1sen!2sca!4v1765218357934!5m2!1sen!2sca"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

        <p className="text-center mt-4 text-sm text-gray-700">
          {t("leave_review") ||
            "Click inside the map to read our reviews or leave a 5-star review if you enjoyed our service!"}
        </p>
      </div>
    </section>
  );
}
