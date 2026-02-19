"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      name: "API Plant",
      image: "/projects/p1.jpg",
      desc: "Chemical plant requires specialized equipment, units, and technology in the manufacturing process. We are a leading chemical equipment manufacturer (API) based in Pune and offer our quality manufacturing services at the Pan India level.",
    },
    {
      name: "Distillery/Brewery/Winery Plant",
      image: "/projects/p2.png",
      desc: "Complete design, manufacturing and installation solutions for distillery, brewery and winery projects with modern automation and control systems.",
    },
    {
      name: "MEE Plant",
      image: "/projects/p3.png",
      desc: "We deliver highly efficient multiple effect evaporator systems for industrial processing with optimized energy usage.",
    },
    {
      name: "Material Handling Systems",
      image: "/projects/p4.png",
      desc: "Advanced material handling systems designed for safe, reliable and automated movement of materials.",
    },
    {
      name: "Microbrewery Plant",
      image: "/projects/p5.webp",
      desc: "Turnkey microbrewery solutions from concept to commissioning with world-class equipment.",
    },
    {
      name: "Powder Granulation Solutions",
      image: "/projects/p6.jpg",
      desc: "Granulation systems designed for precision, efficiency and high output production.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-4xl font-bold text-teal-600 mb-12"
        >
          Our Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT MENU */}
          <div className="space-y-4">
            {projects.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`rounded font-semibold w-full text-left px-6 py-4 shadow transition font-medium transform hover:-translate-y-1
                ${
                  active === index
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
                style={{
                  transform: `translateY(${index * 2}px)`,
                }}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] mb-6"
            >
              <Image
                src={projects[active].image}
                alt={projects[active].name}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4 text-black">
              {projects[active].name}
            </h3>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {projects[active].desc}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}