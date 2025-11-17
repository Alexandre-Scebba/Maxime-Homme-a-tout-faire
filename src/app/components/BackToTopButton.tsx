"use client";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-6 z-50 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-full shadow-lg transition-all duration-200"
      aria-label="Back to top"
    >
      ↑ Top
    </button>
  );
} 