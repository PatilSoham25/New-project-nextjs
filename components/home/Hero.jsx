"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const slides = [
    "/hero/Hero.jpg",
    "/hero/Hero2.jpg",
    "/hero/Hero3.jpg",
    "/hero/Hero4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current]})` }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center h-full">
        <div className="text-white max-w-3xl">
          <h1
            className="text-lg md:text-xl mb-4"
            data-aos="fade-right"
          >
            Leading process equipment manufacturer for chemical, pharma, API,
            biotech and petrochemical industries.
          </h1>

          <p
            className="font-bold text-3xl md:text-6xl"
            data-aos="fade-right"
          >
            &quot;Your Trusted Partner for Growth&quot;
          </p>
        </div>
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white z-20"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white z-20"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}