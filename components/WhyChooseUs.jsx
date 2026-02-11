"use client";

import Image from "next/image";
import { Award, DollarSign, Wrench, Lightbulb } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "High-Quality Products",
      desc: "We provide unique, high-quality process equipment and services to our customers worldwide.",
    },
    {
      icon: DollarSign,
      title: "Low Running Costs",
      desc: "Our energy-efficient process equipment solutions help the products to function at a low running cost.",
    },
    {
      icon: Wrench,
      title: "Reliable Service Backup",
      desc: "We understand the importance of reliable support for your operations. That’s why we offer comprehensive backup services to ensure uninterrupted performance.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Technology",
      desc: "Our innovative approach includes high technology industrial solutions for process equipment.",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-white text-4xl font-bold mb-12">
          Why Choose Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            {/* border frame */}
            <div className="absolute w-[90%] h-[90%] border-4 border-white top-6 left-6"></div>

            {/* bouncing image */}
            <div className="relative w-full h-[400px] sm:h-[500px] animate-bounce-slow">
              <Image
                src="/whychoose.webp" 
                alt="why choose us"
                fill
                className="object-cover shadow-xl"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-10">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-6">
                  {/* icon */}
                  <div className="bg-teal-500 p-5 flex items-center justify-center shrink-0">
                    <Icon className="text-white w-8 h-8" />
                  </div>

                  {/* text */}
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200">{item.desc}</p>

                    {/* divider */}
                    {index !== features.length - 1 && (
                      <div className="border-b border-gray-300/40 mt-6"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* custom animation */}
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </section>
  );
}