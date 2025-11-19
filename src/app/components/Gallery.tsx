"use client";
import { useTranslation } from '../TranslationProvider';
import Link from 'next/link';

const galleryImages = [
  { id: 'project-1', src: '/painter-covering.jpg', titleKey: 'project_section_1' },
  { id: 'project-2', src: '/masking-tape.jpeg', titleKey: 'project_section_2' },
  { id: 'project-3', src: '/wall-painting.jpg', titleKey: 'project_section_3' },
  { id: 'project-4', src: '/paint-cleanup.jpg', titleKey: 'project_section_4' },
];

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-16 bg-gradient-to-t from-sky-100 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center shine-blue mx-auto w-fit">
          {t('gallery_title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img) => (
            <Link
              key={img.id}
              href={`/achievements#${img.id}`}
              className="group block rounded-lg overflow-hidden shadow-lg"
              prefetch={false}
            >
              <img
                src={img.src}
                alt={img.titleKey}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                draggable={false}
              />
              <div className="p-2 bg-white">
                <div className="text-sm font-semibold text-gray-800 text-center">{t(img.titleKey)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
