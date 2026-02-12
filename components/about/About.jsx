"use client";

import Image from "next/image";

export default function AboutImg() {
  return (
    <section className="relative w-full h-[55vh] md:h-[70vh] lg:h-[80vh]">
      {/* Background Image */}
      <Image
        src="/About.avif"  
        alt="About Padmatech Industries"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-black text-3xl md:text-6xl font-bold tracking-wide">
          About Us
        </h1>
      </div>
    </section>
  );
}