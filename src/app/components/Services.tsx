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
      title: "All Types of Excavation",
      description: "Expert excavation services for any residential or commercial project.",
      icon: Gem,
    },
    {
      title: "Land Leveling & Sod Installation",
      description: "Professional land grading and beautiful, durable sod installation for your property.",
      icon: Sprout,
    },
    {
      title: "Retaining Walls & Rock Walls",
      description: "Strong, attractive retaining walls and natural rock walls to support and enhance your landscape.",
      icon: Layers3,
    },
    {
      title: "Bulk Transport of Stone, Sand, and Topsoil",
      description: "Fast, reliable delivery of stone, sand, topsoil, and other materials for your construction or landscaping needs.",
      icon: Truck,
    },
  ],
  fr: [
    {
      title: "Excavation tous genres",
      description: "Services d'excavation experts pour tous types de projets résidentiels ou commerciaux.",
      icon: Gem,
    },
    {
      title: "Nivellement de terrain & pose de tourbe",
      description: "Nivellement professionnel du terrain et installation de tourbe durable et esthétique pour votre propriété.",
      icon: Sprout,
    },
    {
      title: "Murs de soutènement & murs de roche",
      description: "Murs de soutènement solides et murs de roche naturels pour soutenir et embellir votre aménagement paysager.",
      icon: Layers3,
    },
    {
      title: "Transport en vrac de pierre, sable et terre végétale",
      description: "Livraison rapide et fiable de pierre, sable, terre végétale et autres matériaux pour vos besoins en construction ou en aménagement paysager.",
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
