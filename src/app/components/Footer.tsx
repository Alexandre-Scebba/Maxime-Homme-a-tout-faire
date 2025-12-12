"use client";
import { useTranslation } from "../TranslationProvider";

export default function Footer() {
  const { t } = useTranslation();

  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || phone;
  const email =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@maximepeinture.com";

  return (
    <footer className="w-full bg-sky-900 text-white py-4 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-1">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 hover:opacity-80">
          <img
            src="/logo.png?v=2"
            alt="Maxime Peinture Logo"
            className="w-32 object-contain"
          />
          <span className="font-bold text-lg">Maxime Peinture</span>
        </a>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-center mt-1">
          <a
            href={`tel:${phone}`}
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "conversion", {
                  send_to: "AW-16448175954/9-FMCOCU_c8bENL-jKM9",
                });
              }
            }}
            className="hover:underline"
          >
            {phoneDisplay}
          </a>

          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>

          <a
            href="https://www.instagram.com/maximepienture/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs opacity-80 mt-3">
          &copy; {new Date().getFullYear()} Maxime Peinture. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
