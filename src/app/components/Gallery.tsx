"use client";
import { useTranslation } from '../TranslationProvider';
import { useState } from "react";

const galleryImages = [
  {
    src: "/house dirt.jpeg",
    alt: "Project 1",
  },
  {
    src: "/tree grass.jpeg",
    alt: "Project 2",
  },
  {
    src: "/wall2.jpeg",
    alt: "Project 3",
  },
];

export default function Gallery() {
  const { t } = useTranslation();
  const [enlargedIdx, setEnlargedIdx] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 bg-gradient-to-t from-sky-100 to-white">
      <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center shine-blue mx-auto w-fit">
      {t('gallery_title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative group cursor-pointer"
              onClick={() => setEnlargedIdx(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover rounded-lg shadow transition duration-200 blur-none sm:group-hover:blur-sm"
              />
              {/* Overlay: Hidden on mobile, fades in on hover desktop */}
              <div
                className="
                  absolute inset-0 hidden sm:flex items-center justify-center rounded-lg
                  bg-black/20 backdrop-blur-none sm:backdrop-blur-sm
                  opacity-0 sm:group-hover:opacity-100
                  transition-opacity
                "
              >
                <span className="text-white text-lg font-semibold drop-shadow">
                  <span className="hidden sm:block">{t('click_to_enlarge')}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {enlargedIdx !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setEnlargedIdx(null)}
          >
            <div
              className="relative max-w-2xl w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
                onClick={() => setEnlargedIdx(null)}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="absolute top-3 right-12 text-xs text-gray-200 bg-black/40 px-2 py-1 rounded shadow-sm select-none pointer-events-none">
                {t('click_outside_to_close')}
              </span>
              <img
                src={galleryImages[enlargedIdx].src}
                alt={galleryImages[enlargedIdx].alt}
                className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg object-contain bg-white"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
