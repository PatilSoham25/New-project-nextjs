"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full h-[55vh] md:h-[70vh] lg:h-[80vh]">
      
      {/* Background Image */}
      <Image
        src="/abouT.jpg"
        alt="About Padmatech Industries"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/80"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1
          className="underline underline-offset-4 text-black font-serif text-3xl md:text-6xl font-bold"
          data-aos="zoom-out"
        >
          Abo
          <span className="underline underline-offset-4 text-white">
            ut Us
          </span>
        </h1>
      </div>
    </section>
  );
}