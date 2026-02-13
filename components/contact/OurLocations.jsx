"use client";

import { Factory, MapPin, Phone, Mail } from "lucide-react";

export default function OurLocations() {
  const locations = [
    {
      name: "Head Office & Factory Unit-I",
      address:
        "Plot No. 219, Sector No.10, P. C. N. T. D. A, MIDC, Bhosari, Pune – 411026, Maharashtra, India.",
      phone: "+91 9146140044",
      email: "padmatechindustries@gmail.com",
    },
    {
      name: "Factory Unit-II",
      address:
        "Plot No. 239A, Sector No. 7, P. C. N. T. D. A, MIDC, Bhosari, Pune – 411026, Maharashtra, India.",
      phone: "+91 9822552882",
      email: "marketing1@padmatech.in",
    },
    {
      name: "Factory Unit-III",
      address:
        "Plot No. A-10, Newasa Industrial Area, Village. Shingve Tukai, District – Ahilyanagar 414607, Maharashtra, India.",
      phone: "+91 9822552882",
      email: "marketing@padmatechindustries.com",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12"
        data-aos="fade-down">
          Our Company Locations
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-5 sm:p-6 hover:scale-105 transition duration-300 flex flex-col"
              data-aos="zoom-in"
            >
              {/* Title */}
              <div className="flex items-start gap-3 mb-5">
                <Factory className="text-teal-600 w-6 h-6 mt-1 shrink-0" />
                <h3 className="text-base sm:text-lg text-black font-semibold">
                  {loc.name}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-gray-600 w-5 h-5 mt-1 shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  {loc.address}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-gray-600 w-5 h-5 shrink-0" />
                <p className="text-gray-700 text-sm break-all">
                  {loc.phone}
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="text-gray-600 w-5 h-5 shrink-0" />
                <p className="text-gray-700 text-sm break-all">
                  {loc.email}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}