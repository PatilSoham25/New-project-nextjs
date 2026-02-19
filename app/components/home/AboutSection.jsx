"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="w-full bg-gray-100 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative" data-aos="fade-right">
          
          {/* Top Decoration */}
          <div className="absolute -top-4 left-20 w-32 h-4 bg-teal-500 hidden md:block"></div>

          {/* Bottom Decoration */}
          <div className="absolute -bottom-4 left-0 w-24 h-4 bg-teal-500 hidden md:block"></div>

          {/* Experience Badge */}
          <div
            className="absolute -top-10 right-0 md:right-10 bg-teal-500 text-white w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3 className="text-2xl font-bold">20+</h3>
            <p className="text-xs text-center leading-tight">
              Years Of <br /> Experience
            </p>
          </div>

          <Image
            src="/factory.jpg"
            alt="factory"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Heading */}
          <h2
            className="text-4xl font-bold text-teal-600 mb-6"
            data-aos="fade-up"
          >
            About Us
          </h2>

          {/* Paragraph */}
          <p
            className="text-gray-700 leading-7 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Established in 2005, Padmatech Industries is a premier EPC company
            specializing in turnkey equipment supply, process equipment
            manufacturers, and EPC projects for industries such as Chemical,
            Pharmaceutical, API, Bulk Drugs, Bio-Tech, Petrochemicals,
            Beverages, Refineries, Oil & Gas, and Foundry Chemicals. Our
            experience spans 2 decades and over 700 contracts.
          </p>

          {/* Button */}
          <button
            className="bg-teal-600 hover:bg-teal-700 transition text-white px-6 py-3 rounded-lg shadow-md"
          >
            Read More
          </button>

        </div>

      </div>
    </section>
  );
}