"use client";

import { useState } from "react";
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
        "To provide innovative turnkey solutions for EPC projects and process equipment with commitment to advance technology and on time delivery with best quality",
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

  const current = tabs.find((t) => t.id === active);
  const Icon = current.icon;

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* TAB BUTTONS */}
        <div className="flex flex-wrap justify-center gap-9 mb-16"
        data-aos="fade-down">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative px-6 md:px-15 py-4 font-semibold transition cursor-pointer
                ${
                  active === tab.id
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-white"
                }`}
            >
              {tab.label}

              {/* small pointer */}
              {active === tab.id && (
                <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-teal-500 rotate-45"></span>
              )}
            </button>
          ))}
        </div>

        {/* CONTENT BOX */}
        <div className="relative max-w-3xl mx-auto border border-white/40 p-8 md:p-12 text-center"
        data-aos="fade-up">
          {/* circle icon */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full p-4"
          data-aos="zoom-in">
            <Icon className="text-teal-600 w-8 h-8" />
          </div>

          <h3 className="text-3xl font-bold mb-6 mt-4">
            {current.label}
          </h3>

          <p className="text-gray-200 leading-relaxed">
            {current.content}
          </p>
        </div>
      </div>
    </section>
  );
}