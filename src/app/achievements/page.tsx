"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

import { useTranslation } from "../TranslationProvider";

export default function Achievements() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number | null>(null);
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

  // NOTE: The original 'prep' category is commented out for later editing.
  /*
  { id: 'prep', titleKey: 'project_section_1', imgs: [
    '/Prep/kitchen-prep-1.jpg','/Prep/kitchen-prep-2.jpg','/Prep/prep-1.jpg','/Prep/prep-2.jpg','/Prep/stairwell-dropcloth-1.jpg','/Prep/stairwell-dropcloth-2.jpg'
  ] },
  */

  // Categories: surface prep and wall repair (moved up), products, paint (includes finished merged), wall-repair removed
  const categories: { id: string; titleKey: string; imgs: string[] }[] = [
   {
      id: "surface-prep",
      titleKey: "surface_prep",
      imgs: [

        // Prep images
        "/Prep/kitchen-prep-1.jpg",
        "/Prep/kitchen-prep-2.jpg",
        "/Prep/prep-1.jpg",
        "/Prep/prep-2.jpg",
        "/Prep/latter-floor-prep.jpg",
        "/Prep/stairwell-dropcloth-1.jpg",
        "/Prep/stairwell-dropcloth-2.jpg",
        "/Paint/long-room-window-before-1.jpg",

      ],
    },
    {
      id: "wall-repair",
      titleKey: "wall_repair",
      imgs: [

        // Wall Repair images
        "/Wall Repair/wall-repair-brick.jpg",
        "/Wall Repair/wall-repair-frames-before-after.jpg",
        "/Wall Repair/water-damage-repair-before-after.jpg",
       "/Wall Repair/water-damage-repair-before-after-2.jpg",
        "/Wall Repair/20250504_173537-COLLAGE.jpg",
        "/Wall Repair/20250704_090024-COLLAGE.jpg",
        "/Wall Repair/long-ceiling.jpg",
        "/Wall Repair/ceiling-repair-3-panel.jpg",
        
      ],
    },
    /* { id: 'products', titleKey: 'project_section_2', imgs: [
      '/Products/DUL7700-1GL-Z.jpg','/Products/Dulux-kitchen-and-bath-fr.png','/Products/DULUX-XPERT-WATERBORNE-primersealer-FR.png'
    ] }, */
{
      id: "paint",
      titleKey: "project_section_3",
      imgs: [

        // Paint images plus Finished (final cleanup) merged here
        "/Paint/2-white-doors-before-after.jpg",
        "/Finished/20250102_131929.jpg",
        "/Finished/20250102_131935.jpg",
        "/Paint/bathroom-tub-before-after.jpg",
        "/Paint/bedroom-green-before-after.jpg",
        "/Paint/big-window-green-room-before-after.jpg",
        "/Paint/black-pillar-before-after.jpg",
        "/Paint/hallway-doors-before-after.jpg",
       
        // Merged from Finished
        "/Finished/white-living-room-finished.jpg",
        "/Finished/kitchen-white-finished.jpg",
        "/Finished/living-room-white-finished.jpg",
        "/Finished/white-cabinet-1.jpg",
        "/Wall Repair/closet-wall-before-after.jpg",
        "/Finished/bathroom-finished.jpg",
        "/Finished/black-wall-lights-finished.jpg",
        "/Paint/black-ceiling-before-after.jpg",
        "/Paint/black-walls-finished.jpg",
        "/Finished/closet-door-finished.jpg",
        "/Paint/green-stairs.jpg",
        "/Paint/stairs-green-before-after.jpg",
        "/Paint/yellow-hall-before-after.jpg",
        "/Finished/yellow-hallway-doors-1.jpg",
        "/Finished/yellow-hallway-doors-2.jpg",
        "/Finished/yellow-hallway-doors-3.jpg",
        "/Finished/yellow-hallway-doors-4.jpg",
        "/Finished/20250210_180105.jpg",
        "/Finished/20250102_131836.jpg",
        "/Finished/20250102_131841.jpg",
        "/Finished/20250102_132041.jpg",

    ] }
  ];

  // Flatten images for lightbox index mapping and include category title for each image
  const flat: { src: string; title: string }[] = categories.flatMap((c) =>
    c.imgs.map((s) => ({ src: s, title: t(c.titleKey) || c.titleKey }))
  );

  // Helper: get flat index from category and image index
  function flatIndex(catIdx: number, imgIdx: number) {
    let idx = 0;
    for (let i = 0; i < catIdx; i++) idx += categories[i].imgs.length;
    return idx + imgIdx;
  }

  const open = useCallback((catIdx: number, imgIdx: number) => setSelected(flatIndex(catIdx, imgIdx)), []);
  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
      if (selected !== null) {
        if (e.key === 'ArrowRight') setSelected((s) => (s === null ? 0 : Math.min(flat.length - 1, s + 1)));
        if (e.key === 'ArrowLeft') setSelected((s) => (s === null ? 0 : Math.max(0, s - 1)));
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10 blue-fill-hover">{t('project_gallery_title')}</h1>

        <p className="text-center text-gray-600 mb-8">Click any section or image to enlarge — use left/right or arrows to navigate.</p>

        {categories.map((cat, ci) => (
          <section id={cat.id} key={cat.id} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t(cat.titleKey) || cat.titleKey}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {cat.imgs.map((src, ii) => (
                <button key={src + ii} onClick={() => open(ci, ii)} className="block bg-gray-100 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <img src={src} alt={`Project ${ci}-${ii+1}`} className="w-full h-28 object-cover" draggable={false} />
                </button>
              ))}
            </div>
          </section>
        ))}

        {/* Lightbox Modal */}
        {selected !== null && (
          // Clicking the overlay (outside the centered inner container) closes the lightbox
          <div onClick={close} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div onClick={(e) => e.stopPropagation()} className="max-w-[90vw] max-h-[90vh] relative">
              <button onClick={close} className="absolute top-3 right-3 text-white text-2xl">✕</button>

              <div className="flex items-center justify-center gap-4">
                {/* Left bar outside the image - fixed width, matches max image height */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelected((s) => (s === null ? 0 : Math.max(0, s - 1))); }}
                    aria-label="Previous"
                    className="h-[80vh] w-20 sm:w-28 flex items-center justify-center text-white transition-colors duration-150 hover:bg-white/10 rounded-l-md"
                  >
                    <span className="text-4xl">‹</span>
                  </button>
                </div>

                {/* Image container */}
                <div className="flex items-center justify-center">
                  <img src={flat[selected].src} alt={flat[selected].title || `Image ${selected+1}`} className="max-w-[80vw] max-h-[80vh] object-contain rounded-md" />
                </div>

                {/* Right bar outside the image - fixed width, matches max image height */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelected((s) => (s === null ? 0 : Math.min(flat.length - 1, s + 1))); }}
                    aria-label="Next"
                    className="h-[80vh] w-20 sm:w-28 flex items-center justify-center text-white transition-colors duration-150 hover:bg-white/10 rounded-r-md"
                  >
                    <span className="text-4xl">›</span>
                  </button>
                </div>
              </div>

              <div className="mt-3 text-center text-white font-semibold">{flat[selected].title}</div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/#quote" className="text-sky-600 font-semibold">{t('contact_cta') || 'Contact us about a similar project'}</Link>
        </div>

      </div>
    </main>
  );
}