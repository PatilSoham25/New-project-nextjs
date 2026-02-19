"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const slides = [
    {
      image: "/hero/Hero.jpg",
      subtitle:
        "Leading process equipment manufacturer for chemical, pharma, API, biotech and petrochemical industries.",
      title: '"Your Trusted Partner for Growth"',
    },
    {
      image: "/hero/Hero2.jpg",
      subtitle:
        "Delivering innovative engineering solutions with precision and reliability.",
      title: '"Engineering Excellence Since Day One"',
    },
    {
      image: "/hero/Hero3.jpg",
      subtitle:
        "Advanced technology tailored for modern industrial needs.",
      title: '"Innovation That Drives Performance"',
    },
    {
      image: "/hero/Hero4.jpg",
      subtitle:
        "Committed to quality, safety and sustainable growth.",
      title: '"Building the Future Together"',
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center h-full">
        <div
          key={current}
          className="text-white max-w-3xl animate-fadeUp"
        >
          <h1 className="text-lg md:text-xl mb-4 opacity-90">
            {slides[current].subtitle}
          </h1>

          <p className="font-bold text-3xl md:text-6xl leading-tight">
            {slides[current].title}
          </p>
        </div>
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white z-20 transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white z-20 transition"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}