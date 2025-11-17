"use client";
import { useState } from "react";
import { motion } from "framer-motion";
//import Header from "../components/Header";



const jobs = [
  {
    title: "Job #1",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",

      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"

    ],
  },
  {
    title: "Job #2",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",

      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"

    ],
  },
];


export default function Achievements() {
  // Track revealed images as a set of "jobIdx-imageIdx" keys
  const [revealed, setRevealed] = useState<{ [key: string]: boolean }>({});

  const handleReveal = (jIdx: number, iIdx: number) => {
    setRevealed((prev) => ({
      ...prev,
      [`${jIdx}-${iIdx}`]: true,
    }));
  };

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      {/* Under Construction Banner */}
      <div className="flex flex-col items-center mb-8">
        {/* Placeholder for excavator gif/icon */}
        <span className="text-4xl mb-2">🚧</span>
        <div className="text-xl font-bold text-yellow-600">Under Construction</div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10 blue-fill-hover">
          Achievements
        </h1>
      </div>
      <div className="max-w-6xl mx-auto space-y-16">
        {jobs.map((job, jIdx) => (
          <section key={jIdx}>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 blue-fill-hover mx-auto w-fit">{job.title}</h2>
            <div className="mb-4 text-sm text-gray-600 italic text-center">
              Wave your mouse over the images to reveal them!
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {job.images.map((img, iIdx) => {
                const revealedKey = `${jIdx}-${iIdx}`;
                return (
                  <motion.div
                    key={iIdx}
                    initial={false}
                    animate={{
                      opacity: revealed[revealedKey] ? 1 : 0.08,
                      scale: revealed[revealedKey] ? 1.03 : 0.92,
                      filter: revealed[revealedKey] ? "none" : "brightness(0.8) grayscale(1)",
                    }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    className="rounded-xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer"
                    onMouseEnter={() => handleReveal(jIdx, iIdx)}
                  >
                    <img
                      src={img}
                      alt={`Job ${jIdx + 1} - Image ${iIdx + 1}`}
                      className="w-full h-64 object-cover"
                      draggable={false}
                    />
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}