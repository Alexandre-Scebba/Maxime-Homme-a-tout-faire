"use client";
import { Gem, Sprout, Layers3, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from '../TranslationProvider';

type Service = {
  title: string;
  description: string;
  icon: React.ElementType; // <--- store the icon COMPONENT, not JSX!
};

const services: Record<"en" | "fr", Service[]> = {
  en: [
    {
      title: "Interior Painting",
      description: "Professional interior painting services focused on clean work, precise finishes and minimal disruption to your home.",
      icon: Gem,
    },
    {
      title: "Wall Repairs",
      description: "Minor wall repairs and surface preparation to ensure a smooth, long-lasting paint finish.",
      icon: Sprout,
    },
    {
      title: "Caulking",
      description: "Expert caulking for windows, trim and gaps to protect finishes and improve appearance.",
      icon: Layers3,
    },
    {
      title: "Exterior Painting",
      description: "Durable exterior painting using quality products to protect and refresh your property’s exterior surfaces.",
      icon: Truck,
    },
  ],
  fr: [
    {
      title: "Peinture intérieure",
      description: "Services professionnels de peinture intérieure axés sur la propreté, des finitions précises et un minimum de perturbation.",
      icon: Gem,
    },
    {
      title: "Réparations de murs",
      description: "Réparations mineures des murs et préparation des surfaces pour garantir une finition de peinture lisse et durable.",
      icon: Sprout,
    },
    {
      title: "Calfeutrage",
      description: "Calfeutrage professionnel pour fenêtres, moulures et joints afin de protéger les finitions et améliorer l'apparence.",
      icon: Layers3,
    },
    {
      title: "Peinture extérieure",
      description: "Peinture extérieure durable utilisant des produits de qualité pour protéger et rafraîchir les surfaces extérieures.",
      icon: Truck,
    },
  ],
};

export default function Services() {
  const { lang, t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];
    const intervalId = setInterval(runSequence, 4000); // time between effect
    

    function runSequence() {
      setIsAnimating(true);
      for (let i = 0; i < services[lang].length; i++) {
        timeoutIds.push(
          setTimeout(() => setActiveIndex(i), i * 120) // interval pop effeect delay between cards
        );
      }
      // Reset after the last one
      timeoutIds.push(
        setTimeout(() => {
          setActiveIndex(null);
          setIsAnimating(false);
        }, services[lang].length * 120 + 120)
      );
    }


    return () => {
      timeoutIds.forEach(clearTimeout);
      clearInterval(intervalId);
    };
  }, [lang]);

  const bgImages = [
    '/pipe.jpeg',
    '/grass.jpeg',
    '/hill.jpeg',
    '/gravel.jpeg',
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-sky-300 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center shine-blue mx-auto w-fit">
          {t('services_title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services[lang].map((service, i) => {
  const Icon = service.icon;
  return (
    <div
      key={i}
      className={
        "group bg-white rounded-xl shadow-2xl p-0 flex flex-col items-center transition transform relative overflow-hidden min-h-[220px] sm:min-h-[320px] " +
        ((isAnimating && i === activeIndex)
          ? " scale-105 -translate-y-1 shadow-[0_8px_32px_rgba(0,0,0,0.25)] z-20"
          : " group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]")
      }
                style={{
                  backgroundImage: `url('${bgImages[i]}')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Overlay for readability */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-0" /> */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 w-full">
                  <Icon className="w-12 h-12 text-yellow-400 mb-2 drop-shadow-lg" />
                  <h3
                    className="text-xl font-bold mb-2 text-white text-center"
                    style={{
                      textShadow: "2px 4px 12px rgba(0,0,0,0.85), 0 1px 0 #000"
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-white text-center"
                    style={{
                      textShadow: "2px 4px 12px rgba(0,0,0,0.85), 0 1px 0 #000"
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
