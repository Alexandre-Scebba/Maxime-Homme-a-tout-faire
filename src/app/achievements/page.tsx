"use client";
import { useEffect } from "react";
import Link from "next/link";

const projects = [
  { id: "project-1", titleKey: "project_section_1", src: "/painter-covering.jpg" },
  { id: "project-2", titleKey: "project_section_2", src: "/masking-tape.jpeg" },
  { id: "project-3", titleKey: "project_section_3", src: "/wall-painting.jpg" },
  { id: "project-4", titleKey: "project_section_4", src: "/paint-cleanup.jpg" },
];

import { useTranslation } from "../TranslationProvider";

export default function Achievements() {
  const { t } = useTranslation();
  // Smooth-scroll to hash if present (works when navigating from main page /achievements#id)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;
    // Wait a tick to ensure layout is painted
    setTimeout(() => {
      const el = document.querySelector(hash) as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }, []);

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10 blue-fill-hover">
          {t('project_gallery_title')}
        </h1>

        {/* Thumbnail grid at top (optional quick nav) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {projects.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="block rounded-lg overflow-hidden shadow-lg">
              <img src={p.src} alt={t(p.titleKey)} className="w-full h-40 object-cover" draggable={false} />
              <div className="p-3 bg-white border-t">
                <div className="font-bold text-gray-800 text-sm">{t(p.titleKey)}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Detailed sections */}
        <div className="space-y-16">
          {projects.map((p) => (
            <section id={p.id} key={p.id} className="rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2">
                  <img src={p.src} alt={t(p.titleKey)} className="w-full h-80 object-cover rounded-lg shadow" draggable={false} />
                </div>
                <div className="md:col-span-1">
                  <h2 className="text-2xl font-bold mb-2">{t(p.titleKey)}</h2>
                  <p className="text-gray-700 mb-4">Brief description of the work performed, materials used, and any notable challenges or techniques. This section can be expanded later with galleries or before/after sliders.</p>
                  <Link href="/#quote" className="text-sky-600 font-semibold">{t('contact_cta') || 'Contact us about a similar project'}</Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}