"use client";

import Image from "next/image";

const logos = [
  "/logos/1.jpg",
  "/logos/2.webp",
  "/logos/3.jpg",
  "/logos/4.webp",
  "/logos/5.jpg",
  "/logos/6.jpg",
  "/logos/7.jpg",
  "/logos/8.jpg",
  "/logos/9.svg",
  "/logos/10.jpg",
  "/logos/11.jpg",
  "/logos/12.jpg",
  "/logos/13.jpg",
  "/logos/14.jpg",
];

const firstRow = logos.slice(0, 7);
const secondRow = logos.slice(7, 14);

export default function OurCustomers() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-teal-600 text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Valued Customers
        </h2>

        {/* Row 1 */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 mb-8">
            <div className="overflow-hidden">
                <div className="flex gap-12 animate-marquee-right w-max">
                {[...firstRow, ...firstRow].map((logo, i) => (
                    <div
                    key={i}
                    className="relative w-[120px] h-[60px] md:w-[150px] md:h-[70px] flex-shrink-0"
                    >
                    <Image src={logo} alt="customer" fill className="object-contain" />
                    </div>
                ))}
                </div>
            </div>
        </div>

        {/* Row 2 */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="overflow-hidden">
                <div className="flex gap-12 animate-marquee-left w-max">
                {[...secondRow, ...secondRow].map((logo, i) => (
                    <div
                    key={i}
                    className="relative w-[120px] h-[60px] md:w-[150px] md:h-[70px] flex-shrink-0"
                    >
                    <Image src={logo} alt="customer" fill className="object-contain" />
                    </div>
                ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}