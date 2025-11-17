"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "../TranslationProvider";
import { Facebook } from "lucide-react";

export default function TopBar() {
  const { lang, setLang } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`w-full bg-sky-200 flex items-center justify-between px-4 fixed top-0 left-0 z-[100] transition-all duration-200
        ${scrolled ? "py-0.5 min-h-[28px]" : "py-2 min-h-[40px]"}`}
      style={{
        fontSize: scrolled ? "0.85rem" : "1rem",
        height: scrolled ? "28px" : "40px",
      }}
    >
      {/* EN/FR Toggle */}
      <button
        onClick={() => setLang(lang === "en" ? "fr" : "en")}
        className="flex items-center font-bold select-none focus:outline-none bg-transparent border-none p-0"
        aria-label="Toggle language"
        style={{ background: "none", boxShadow: "none", fontSize: "inherit" }}
      >
        <span className={lang === "en" ? "text-yellow-400" : "text-black"}>EN</span>
        <span className="mx-1 font-bold text-gray-500">/</span>
        <span className={lang === "fr" ? "text-yellow-400" : "text-black"}>FR</span>
      </button>
      {/* Phone and Facebook */}
      <div className="flex items-center gap-4">
        <a
          href="tel:0000000000"
          className="font-bold text-yellow-600 hover:text-yellow-700 transition"
          style={{ fontSize: "inherit" }}
        >
          Call Now: 000-000-0000
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:text-blue-800"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
