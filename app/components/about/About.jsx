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

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="underline underline-offset-2 text-black font-serif text-3xl md:text-6xl font-bold"
        data-aos="zoom-out">
          Abo<span className="text-white underline underline-offset-2">ut Us</span>
        </h1>
      </div>
    </section>
  );
}