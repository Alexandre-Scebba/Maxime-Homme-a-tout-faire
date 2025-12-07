"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../TranslationProvider";

export default function Header() {
  const { lang, setLang, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const phoneRaw = process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "";


  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-sky-200 py-2 px-4 flex items-center justify-between text-sm text-gray-900 font-sans">
        {/* Left side - Marketing text */}
        <div className="flex items-center gap-4">
          <span className="font-bold text-yellow-600">Get a Free Quote Today!</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Professional painting services</span>
        </div>
        {/* Right side - Contact info */}
        <div className="flex items-center gap-4">
        <a
          href={`tel:${phoneRaw}`}
          className="font-bold text-yellow-600 hover:text-yellow-700 transition"
        >
          Call Now: {phoneDisplay}
        </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/maximepienture/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Header Bar */}
      <header className="w-full bg-gray-100 shadow-md sticky top-0 z-50">
        <div className="w-full flex items-center justify-between py-4 px-4 lg:px-8 flex-wrap gap-2">
          {/* Logo - Home Button - Always visible */}
          <Link href="/" className="flex items-center flex-shrink-0 group" prefetch={false}>
            <img
              src="/logo.png?v=2"
              alt="Maxime Peinture logo"
              className="h-12 sm:h-14 md:h-16 object-contain"
              loading="eager"
              decoding="async"
            />
            <span className="sr-only">Maxime Peinture</span>
          </Link>

          {/* Center Navigation - Hidden on smaller screens */}
          <nav className="hidden lg:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link
            href={isHome ? "#" : "/#"}
              className="text-base font-bold px-2 transition text-gray-900 hover:text-sky-600 hover:underline blue-fill-hover"
            >
              {t("nav_home")}
            </Link>
            <Link
              href={isHome ? "#services" : "/#services"}
              className={`text-base font-bold px-2 transition ${
                pathname === "/#services" ? "text-sky-600 underline" : "text-gray-900"
              } hover:text-sky-600 hover:underline blue-fill-hover`}
            >
              {t("nav_services")}
            </Link>
            <Link
              href={isHome ? "#gallery" : "/#gallery"}
              className="text-base font-bold px-2 transition text-gray-900 hover:text-sky-600 hover:underline blue-fill-hover"
            >
              {t("nav_gallery")}
            </Link>
            <Link
              href={isHome ? "#products" : "/#products"}
              className="text-base font-bold px-2 transition text-gray-900 hover:text-sky-600 hover:underline blue-fill-hover"
            >
              {t("nav_products")}
            </Link>
            <Link
              href={isHome ? "#contact" : "/#contact"}
              className="text-base font-bold px-2 transition text-gray-900 hover:text-sky-600 hover:underline blue-fill-hover"
            >
              {t("nav_contact")}
            </Link>
          </nav>

          {/* Right side - Get Quote Button + Language Toggle */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={isHome ? "#quote" : "/#quote"}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-2 px-3 sm:px-4 md:px-5 rounded-lg shadow hover:from-yellow-500 hover:to-yellow-700 transition text-center whitespace-nowrap text-sm sm:text-base"
              style={{ lineHeight: 1.2 }}
            >
              {t("nav_get_a_quote")}
            </a>
            <button
              onClick={() => {
                console.debug("[Header] toggle clicked, before ->", lang);
                setLang(lang === "en" ? "fr" : "en");
              }}
              className="flex items-center font-bold text-sm select-none focus:outline-none bg-transparent border-none p-1 sm:p-2 rounded hover:bg-sky-100 transition"
              aria-label="Toggle language"
            >
              <span className={lang === "en" ? "text-yellow-400" : "text-gray-700"}>EN</span>
              <span className="mx-1 font-bold text-gray-500">/</span>
              <span className={lang === "fr" ? "text-yellow-400" : "text-gray-700"}>FR</span>
            </button>
            {/* <div className="ml-2 px-2 py-0.5 rounded-md text-xs font-semibold bg-gray-100 border border-gray-200 text-gray-700">
              {lang.toUpperCase()}
            </div> */}
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="lg:hidden flex items-center p-2 rounded hover:bg-sky-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
            <span className="ml-2 text-sm font-medium text-gray-800 select-none">
              {menuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>

        {/* Mobile Slide-out Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-[100] transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } xl:hidden`}
        >
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-7 h-7 text-gray-900" />
          </button>
          <nav className="flex flex-col items-center mt-32 space-y-6">
            <a
              href="#home"
              className="text-gray-900 text-lg font-medium hover:text-sky-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav_home")}
            </a>
            <a
              href="#services"
              className="text-gray-900 text-lg font-medium hover:text-sky-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav_services")}
            </a>
            <a
              href="#gallery"
              className="text-gray-900 text-lg font-medium hover:text-sky-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav_gallery")}
            </a>
            <a
              href="#products"
              className="text-gray-900 text-lg font-medium hover:text-sky-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav_products")}
            </a>
            <a
              href="#contact"
              className="text-gray-900 text-lg font-medium hover:text-sky-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav_contact")}
            </a>
          </nav>
        </div>

        {/* Background overlay when menu is open */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-[99] lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
        )}
      </header>
    </>
  );
}
