"use client";

import Image from "next/image";

export default function ContactImg() {
  return (
    <section className="mt-18 relative w-full h-[55vh] md:h-[70vh] lg:h-[80vh]">
      {/* Background Image */}
      <Image
        src="/contactS.jpg"  
        alt="Contact Padmatech Industries"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="underline underline-offset-2 text-black font-serif text-3xl md:text-6xl font-bold"
        data-aos="zoom-out">
          Cont<span className="text-white underline underline-offset-2">act</span>
        </h1>
      </div>
    </section>
  );
}