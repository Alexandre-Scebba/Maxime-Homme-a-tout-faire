"use client";

import { useTranslation } from "../TranslationProvider";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { t } = useTranslation();
  const initialOffset = -100;
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        if (sectionRef.current) {
          const y = initialOffset + window.scrollY * 0.45;
          sectionRef.current.style.backgroundPosition = `center ${y}px`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/max-banner-4791.jpg')",
        backgroundPosition: isMobile ? "center center" : `center ${initialOffset}px`,
        backgroundSize: "cover",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
      }}
      id="home"
    >
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="sr-only">{t("hero_h1_seo")}</h1>

        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow shine-blue-slow mx-auto w-fit">
          {t("hero_title")}
        </p>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-medium drop-shadow">
          {t("hero_subtitle")}
        </p>

        <div className="flex flex-col items-center gap-3">
          <a
            href="#quote"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg text-lg sm:text-xl hover:from-yellow-500 hover:to-yellow-700 transition"
          >
            {t("request_quote")}
          </a>

          {/* Reviews pill */}
          <div className="bg-sky-100/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <a
              href="https://www.google.com/search?q=Maxime+Peinture&stick=H4sIAAAAAAAA_-NgU1IxqDAzNTA3NU1JSjUwTUoyTjG3MqgwNTY2T0w0MEwzMTa3MDVexMrvm1iRmZuqEJCamVdSWpQKAKGHvb06AAAA&hl=en&mat=Cdz3Y4_KZLE-ElcBTVDHnj4SbAE0tbgZCQWgleXgDsPZXeU6pHKk0IrRcqwIJZFDszWDBSPyYf7Y9evzw7MQ-jF9j4W-cLJpZK3ev6d3QSY_9_nNF9ScSMfIhLIq-Q1BLNs&authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-sky-900 hover:text-sky-700"
            >
              {/* Google G inline SVG */}
              <svg viewBox="0 0 48 48" className="h-4 w-4 shrink-0">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.725 32.657 29.273 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.053 6.053 29.303 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917Z"/>
                <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 16.108 19.002 12 24 12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.053 6.053 29.303 4 24 4 16.318 4 9.656 8.337 6.306 14.691Z"/>
                <path fill="#4CAF50" d="M24 44c5.201 0 9.86-1.989 13.409-5.219l-6.19-5.238C29.141 35.091 26.715 36 24 36c-5.252 0-9.689-3.318-11.277-7.946l-6.52 5.022C9.51 39.556 16.227 44 24 44Z"/>
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.761 2.169-2.2 4.024-4.084 5.238h.003l6.19 5.238C36.971 39.092 44 34 44 24c0-1.341-.138-2.651-.389-3.917Z"/>
              </svg>

              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="h-4 w-4 stroke-current fill-none"
                    strokeWidth="2"
                  >
                    <path d="M12 2l2.9 6 6.6.6-5 4.3 1.5 6.5L12 16l-6 3.4 1.5-6.5-5-4.3 6.6-.6z" />
                  </svg>
                ))}
              </span>

              <span className="underline underline-offset-2">
                  {t("google_reviews_cta")}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
