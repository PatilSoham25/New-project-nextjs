"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ServicesSlider() {
  const services = [
    { title: "Automation", img: "/services/s1.jpg" },
    { title: "Electrical Site Installation", img: "/services/s2.jpg" },
    { title: "Operation & Maintenance", img: "/services/s3.jpg" },
    { title: "Consulting", img: "/services/s4.jpg" },
    { title: "Erection & Commissioning Service", img: "/services/s5.jpg" },
    { title: "Laser Cutting Services", img: "/services/s6.jpg" },
    { title: "Operation & Maintenance", img: "/services/s7.jpg" },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-white text-4xl font-bold mb-12"
        data-aos="fade-down">
          Our Services
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}   // ✅ infinite continuous
          autoplay={{
            delay: 1000,   // 1 second
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="servicesSwiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded overflow-hidden">

                {/* Image */}
                <div className="relative w-full h-72">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="text-center py-8 px-4">
                  {/* ✅ title visible */}
                  <h3 className="text-gray-800 text-lg font-semibold mb-4">
                    {service.title}
                  </h3>

                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded transition">
                    Read More →
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Move dots down */}
      <style jsx global>{`
        .servicesSwiper .swiper-pagination {
          position: relative;
          margin-top: 30px;
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
}