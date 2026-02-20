"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CompanyIntro() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative bg-gray-200 py-28 overflow-hidden">

      {/* Background Illustration Left */}
      <div className="absolute left-0 top-0 opacity-5 pointer-events-none hidden md:block">
        <Image
          src="/Processing.png"
          alt="factory illustration"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>

      {/* Background Illustration Right */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none hidden md:block">
        <Image
          src="/manufacturing.png"
          alt="factory illustration"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <h1
          className="text-3xl md:text-4xl font-bold text-black mb-10"
          data-aos="fade-up"
        >
          About Padmatech Industries
        </h1>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed text-justify">

          <p data-aos="fade-up" data-aos-delay="100">
            Established in 2005, Padmatech Industries is a premier EPC company
            specializing in turnkey equipment supply, process equipment
            manufacturing, and EPC projects for industries such as chemicals,
            pharmaceuticals, APIs, bulk drugs, biotech, petrochemicals,
            beverages, refineries, oil and gas, and foundry chemicals. Our
            experience spans two decades and over 700 contracts.
          </p>

          <p data-aos="fade-up" data-aos-delay="200">
            Padmatech Industries Pvt. Ltd. has 20 years of extensive experience
            in the field of process equipment manufacturing. We offer a wide
            range of industrial processing equipment, heating and cooling
            systems, powder granulation equipment, liquid and powder mixing
            equipment, fermenters, special-purpose machines, and material
            handling systems.
          </p>

          <p data-aos="fade-up" data-aos-delay="300">
            Our qualified team, driven by a vision to deliver the best industry
            solutions, enables us to provide optimized results with best-in-class
            industrial-quality designs and energy-efficient systems.
          </p>

          <p data-aos="fade-up" data-aos-delay="400">
            Our services are carried out in state-of-the-art facilities equipped
            with the latest technology and operated by skilled professionals.
            We strictly follow legal and regulatory standards, ensuring
            reliability, compliance, and long-term customer satisfaction.
          </p>

        </div>
      </div>
    </section>
  );
}