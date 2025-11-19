"use client";

import { useTranslation } from '../TranslationProvider';
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { t } = useTranslation();
  // smaller offset keeps the image more centered and reduces visible gaps during parallax
  // adjusted to -100 to move the image slightly lower on desktop
  const initialOffset = -100;
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable parallax on mobile
    
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            // reduce the parallax multiplier so the background moves less aggressively
            // use a smaller multiplier for a subtler effect
            const y = initialOffset + window.scrollY * 0.45;
            sectionRef.current.style.backgroundPosition = `center ${y}px`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

    return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/max-banner.jpg')",
        backgroundPosition: isMobile ? "center center" : `center ${initialOffset}px`,
        backgroundSize: "cover",
        backgroundAttachment: isMobile ? "scroll" : "fixed"
      }}
      id="home"
    >
      {/* Overlay */}
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow shine-blue-slow text-center mx-auto w-fit">
          {t('hero_title')}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-medium drop-shadow">
          {t('hero_subtitle')}
        </p>
        <a
          href="#quote"
          className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg text-lg sm:text-xl hover:from-yellow-500 hover:to-yellow-700 transition"
        >
          {t('request_quote')}
        </a>
      </div>
    </section>
  );
}
