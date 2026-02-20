"use client";

import { useState } from "react";
import Image from "next/image";
import { Target, Rocket, Gem } from "lucide-react";

export default function VMV() {
  const tabs = [
    {
      id: "vision",
      label: "Our Vision",
      icon: Target,
      content:
        "To be the most successful company in the world to provide energy efficient and environment friendly solutions that help the environment to go green.",
    },
    {
      id: "mission",
      label: "Our Mission",
      icon: Rocket,
      content:
        "To provide innovative turnkey solutions for EPC projects and process equipment with commitment to advance technology and on time delivery with best quality.",
    },
    {
      id: "values",
      label: "Core Values",
      icon: Gem,
      content:
        "Integrity, innovation, commitment, safety and excellence drive every project we execute and every relationship we build.",
    },
  ];

  const [active, setActive] = useState("vision");

  const current = tabs.find((t) => t.id === active) || tabs[0];
  const Icon = current.icon;

  return (
    <section className="relative py-20 text-white bg-blue-800 overflow-hidden">
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 z-0"></div>

      {/* Watermark Factory Image */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none hidden md:block z-0">
        <Image
          src="/Work-time.png"
          alt="factory illustration"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="absolute right-50 top-0 opacity-9 pointer-events-none hidden md:block z-0">
        <Image
          src="/Manufacturing-3.png"
          alt="factory illustration"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="absolute left-0 top-0 opacity-5 pointer-events-none hidden md:block z-0">
        <Image
          src="/Manufacturing-2.png"
          alt="factory illustration"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="absolute left-40 top-80 opacity-5 pointer-events-none hidden md:block z-0">
        <Image
          src="/Processing-2.png"
          alt="factory illustration"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* TAB BUTTONS */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative px-8 md:px-14 py-4 font-semibold transition duration-300 shadow-md
                ${
                  active === tab.id
                    ? "bg-teal-500 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-200"
                }`}
            >
              {tab.label}

              {active === tab.id && (
                <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-teal-500 rotate-45"></span>
              )}
            </button>
          ))}
        </div>

        {/* CONTENT BOX */}
        <div className="relative max-w-3xl mx-auto border border-white/40 bg-white/10 backdrop-blur-md p-10 md:p-14 text-center rounded-lg shadow-xl">
          
          {/* Icon Circle */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full p-4 shadow-lg">
            <Icon className="text-teal-600 w-8 h-8" />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-6 mt-4">
            {current.label}
          </h3>

          <p className="text-gray-100 text-lg leading-relaxed">
            {current.content}
          </p>
        </div>

      </div>
    </section>
  );
}