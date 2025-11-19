"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Facebook } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../TranslationProvider";

export default function Header() {
  const { lang, setLang, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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
            href="tel:0000000000"
            className="font-bold text-yellow-600 hover:text-yellow-700 transition"
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
      {/* Main Header Bar */}
      <header className="w-full bg-gray-100 shadow-md sticky top-0 z-50">
        <div className="w-full flex items-center justify-between py-4 px-4 lg:px-8 flex-wrap gap-2">
          {/* Logo - Home Button - Always visible */}
          <Link href="/" className="flex items-center flex-shrink-0 group" prefetch={false}>
              <Image
                src="/logo-char.jpg"
                alt="Maxime Peinture logo"
                width={56}
                height={56}
                className="bg-white border border-gray-200 shadow group-hover:opacity-80 transition w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded-md"
                priority
              />
              {/* visually-hidden brand name for accessibility (removed from visual header) */}
              <span className="sr-only">Maxime Peinture</span>
          </Link>

          {/* Center Navigation - Hidden on smaller screens */}
          <nav className="hidden xl:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href={isHome ? "#home" : "/#home"}
              className="text-base font-bold px-2 transition text-gray-900 hover:text-sky-600 hover:underline blue-fill-hover"
            >
              {t('nav_home')}
            </Link>
            <Link
              href={isHome ? "#services" : "/#services"}
              className={`text-base font-bold px-2 transition ${
                pathname === "/#services" ? "text-sky-600 underline" : "text-gray-900"
              } hover:text-sky-600 hover:underline blue-fill-hover`}
            >
              {t('nav_services')}
            </Link>
            <Link
              href={isHome ? "#gallery" : "/#gallery"}
              className="text-base font-bold px-2 transition text-gray-900 hover:text-sky-600 hover:underline blue-fill-hover"
            >
              {t('nav_gallery')}
            </Link>
            <Link
              href="/achievements"
              className="text-base font-bold px-2 transition text-gray-900 hover:text-sky-600 hover:underline blue-fill-hover"
            >
              {t('nav_achievements')}
            </Link>
            <Link
              href={isHome ? "#contact" : "/#contact"}
              className="text-base font-bold px-2 transition text-gray-900 hover:text-sky-600 hover:underline blue-fill-hover"
            >
              {t('nav_contact')}
            </Link>
          </nav>

          {/* Right side - Get Quote Button + Language Toggle - Always visible */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Get a Quote Button - Always visible */}
            <a
              href={isHome ? "#quote" : "/#quote"}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-2 px-3 sm:px-4 md:px-5 rounded-lg shadow hover:from-yellow-500 hover:to-yellow-700 transition text-center whitespace-nowrap text-sm sm:text-base"
              style={{ lineHeight: 1.2 }}
            >
              {t('nav_get_a_quote')}
            </a>
            {/* Language Toggle */}
            <button
              onClick={() => {
                console.debug('[Header] toggle clicked, before ->', lang);
                setLang(lang === 'en' ? 'fr' : 'en');
              }}
              className="flex items-center font-bold text-sm select-none focus:outline-none bg-transparent border-none p-1 sm:p-2 rounded hover:bg-sky-100 transition"
              aria-label="Toggle language"
            >
              <span className={lang === 'en' ? 'text-yellow-400' : 'text-gray-700'}>EN</span>
              <span className="mx-1 font-bold text-gray-500">/</span>
              <span className={lang === 'fr' ? 'text-yellow-400' : 'text-gray-700'}>FR</span>
            </button>
            {/* Debug badge: shows current language (visible during troubleshooting) */}
            <div className="ml-2 px-2 py-0.5 rounded-md text-xs font-semibold bg-gray-100 border border-gray-200 text-gray-700">{lang.toUpperCase()}</div>
          </div>
          
          {/* Hamburger Button (Mobile) - Only for navigation links */}
          <button
            className="xl:hidden flex items-center p-2 rounded hover:bg-sky-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              {t('nav_home')}
            </a>
            <a
              href="#services"
              className="text-gray-900 text-lg font-medium hover:text-sky-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav_services')}
            </a>
            <a
              href="#gallery"
              className="text-gray-900 text-lg font-medium hover:text-sky-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav_gallery')}
            </a>
            <a
              href="/achievements"
              className="text-gray-900 text-lg font-medium hover:text-sky-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav_achievements')}
            </a>
            <a
              href="#contact"
              className="text-gray-900 text-lg font-medium hover:text-sky-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav_contact')}
            </a>
          </nav>
        </div>
        {/* Background overlay when menu is open */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-[99] xl:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
        )}
      </header>
    </>
  );
}
