"use client";

import Image from "next/image";

export default function ContactImg() {
  return (
    <section className="relative w-full h-[55vh] md:h-[70vh] lg:h-[80vh]">
      {/* Background Image */}
      <Image
        src="/contactImg.jpg"  
        alt="Contact Padmatech Industries"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}