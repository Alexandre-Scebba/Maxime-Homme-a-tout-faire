"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

const translations: Record<"en" | "fr", Record<string, string>> = { en, fr };
type Lang = "en" | "fr";

const TranslationContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}>({
  lang: "fr",
  setLang: () => {},
  t: (key) => key,
});

export function useTranslation() {
  return useContext(TranslationContext);
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  // On mount, check localStorage or browser language
  useEffect(() => {
    // Check localStorage
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem("lang") : null;
    if (storedLang === "en" || storedLang === "fr") {
      setLangState(storedLang);
      return;
    }
    // Detect browser language
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language || (navigator.languages && navigator.languages[0]);
      if (browserLang && browserLang.toLowerCase().startsWith("fr")) {
        setLangState("fr");
      } else {
        setLangState("en");
      }
    }
  }, []);

  // Save language to localStorage when changed
  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem("lang", newLang);
    }
  };

  const t = (key: string) => translations[lang][key] || key;

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
} 