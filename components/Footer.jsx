"use client";

import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cyan-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* TOP AREA */}
        <div 
          className="grid md:grid-cols-5 gap-10"
          data-aos="fade-up"
          >
          
          {/* LOGO */}
          <div className="h-18 w-30">
            <img src="/logo.webp" className="h-full w-full" />
          </div>

          {/* COLUMN 1 */}
          <div className="space-y-2 font-semibold text-sm text-white">
            <p>Products</p>
            <p>Pre-sale FAQs</p>
            <p>Submit a Ticket</p>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-2 font-semibold text-sm text-white">
            <p>Services</p>
            <p>Theme Tweak</p>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-2 font-semibold text-sm text-white">
            <p>Showcase</p>
            <p>Widgetkit</p>
            <p>Support</p>
          </div>

          {/* COLUMN 4 */}
          <div className="space-y-2 font-semibold text-sm text-white">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Affiliates</p>
            <p>Resources</p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 my-10"></div>

        {/* SOCIAL */}
        <div className="flex justify-center gap-4"
        data-aos="fade-down">
          <a className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-900 hover:border-white transition">
            <Facebook size={18} />
          </a>
          <a className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-900 hover:border-white transition">
            <Instagram size={18} />
          </a>
          <a className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-900 hover:border-white transition">
            <Linkedin size={18} />
          </a>
          <a className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-900 hover:border-white transition">
            <Youtube size={18} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center font-semibold text-white text-sm mt-6">
          Copyright © 2026 – Padmatech Industries Pvt. Ltd. | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}