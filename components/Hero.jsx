import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Hero.jpg')" }}
      />

      {/* Dark + Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center h-full">
        <div className="text-white max-w-3xl">
          
          <h1 className="text-lg md:text-xl mt-4 mb-4 space-y-4"
          data-aos="fade-left"
          >
            Leading process equipment manufacturer for chemical, pharma, API, biotech and petrochemical industries.
          </h1>
          
          <p className="font-bold text-3xl md:text-6xl"
          data-aos="fade-left"
          >&quot;Your Trusted Partner for Growth&quot;</p>
          
        </div>
      </div>

      {/* Slider Arrows */}
      {/* <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
        <ChevronLeft size={40} />
      </button>

      <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white">
        <ChevronRight size={40} />
      </button> */}

    </section>
  );
}