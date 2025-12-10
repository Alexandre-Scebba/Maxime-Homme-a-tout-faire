"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

type Lang = "en" | "fr";

const translations: Record<Lang, Record<string, string>> = { en, fr };

const TranslationContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}>({
  lang: "fr",
  setLang: () => {},
  t: (key) => key,
});

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1) URL parameter has top priority: ?lang=en or ?lang=fr
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang === "en" || urlLang === "fr") {
      setLangState(urlLang);
      localStorage.setItem("lang", urlLang);
      return;
    }

    // 2) Then localStorage
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "en" || storedLang === "fr") {
      setLangState(storedLang);
      return;
    }

    // 3) Finally, browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("fr")) {
      setLangState("fr");
    } else {
      setLangState("en");
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
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

export const useTranslation = () => useContext(TranslationContext);
