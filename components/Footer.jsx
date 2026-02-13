"use client";

import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 py-16">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          
          <h1
            className="font-bold text-xl md:text-2xl max-w-md"
            data-aos="fade-right"
          >
            Your Trusted Partner for Growth...
          </h1>

          <img
            src="/logo.webp"
            alt="logo"
            className="h-16 md:h-20 w-auto"
            data-aos="fade-left"
          />
        </div>

        {/* LINE */}
        <div className="border-t border-white mb-10"></div>

        {/* GRID */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm"
          data-aos="fade-down"
        >
          {/* PRODUCTS */}
          <div className="space-y-4">
            <h3 className="font-bold">PRODUCTS</h3>
            <div className="space-y-2">
              <p>Pre-sale FAQs</p>
              <p>Submit a Ticket</p>
            </div>
          </div>

          {/* SERVICES */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">SERVICES</h3>
              <p>Theme Tweak</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">CONTACT US</h3>
              <p>Form</p>
              <p>Locations</p>
            </div>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="font-bold mb-2">ABOUT US</h3>
            <div className="space-y-2">
              <p>Company Info</p>
              <p>Vision, Mission & Values</p>
              <p>Why Padmatech?</p>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="flex gap-4 mt-12" data-aos="fade-up">
          <a className="w-10 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-white transition">
            <Facebook size={18} />
          </a>
          <a className="w-10 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-white transition">
            <Instagram size={18} />
          </a>
          <a className="w-10 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-white transition">
            <Linkedin size={18} />
          </a>
          <a className="w-10 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-white transition">
            <Youtube size={18} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="mt-8 text-sm font-semibold">
          Copyright © 2026 – Padmatech Industries Pvt. Ltd. | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}