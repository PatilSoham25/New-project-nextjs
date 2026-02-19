"use client";

import Image from "next/image";
import { Linkedin, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-5 py-16">

        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14"
        data-aos="fade-down">
          
          {/* Logo */}
          <Image
            src="/logo.webp"
            alt="Padmatech Logo"
            width={160}
            height={60}
            className="object-contain"
          />

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="cursor-pointer bg-lime-400 hover:bg-lime-300 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition">
              Contact Us <ArrowRight size={18} />
            </button>

            <button className="cursor-pointer bg-lime-400 hover:bg-lime-300 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition">
              Find a Partner <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm border-t border-white/40 pt-10"
        data-aos="fade-up">
          
          {/* ABOUT */}
          <div className="space-y-3">
            <h3 className="font-bold uppercase">About</h3>
            <p>Company Info</p>
            <p>Vision, Mission & Values</p>
            <p>Why Padmatech?</p>
            <p>Investors</p>
            <p>Global Locations</p>
          </div>

          {/* DISCOVER */}
          <div className="space-y-3">
            <h3 className="font-bold uppercase">Discover</h3>
            <p>Industry</p>
            <p>Products</p>
            <p>Services</p>
            <p>Success Stories</p>
            <p>Resource Library</p>
          </div>

          {/* SUPPORT */}
          <div className="space-y-3">
            <h3 className="font-bold uppercase">Support</h3>
            <p>Support & Downloads</p>
            <p>Contact Support</p>
            <p>Request a Repair</p>
            <p>Warranty Information</p>
            <p>Developer Portal</p>
          </div>

          {/* NEWSLETTER */}
          <div className="space-y-5">
            <h3 className="font-bold uppercase">Stay up to date</h3>
            <p>Sign up for our newsletter.</p>

            <button className="cursor-pointer bg-white text-black px-5 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition">
              Register Now <ArrowRight size={18} />
            </button>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a className="cursor-pointer w-9 h-9 flex items-center justify-center border border-white hover:bg-white hover:text-teal-700 transition">
                <Linkedin size={18} />
              </a>
              <a className="cursor-pointer w-9 h-9 flex items-center justify-center border border-white hover:bg-white hover:text-teal-700 transition">
                <Facebook size={18} />
              </a>
              <a className="cursor-pointer w-9 h-9 flex items-center justify-center border border-white hover:bg-white hover:text-teal-700 transition">
                <Instagram size={18} />
              </a>
              <a className="cursor-pointer w-9 h-9 flex items-center justify-center border border-white hover:bg-white hover:text-teal-700 transition">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/40 mt-12 pt-6 text-xs flex flex-col md:flex-row gap-4 justify-between">
          <p>
            © 2026 Padmatech Industries Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex gap-4">
            <p>Legal</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Supply Chain Transparency</p>
          </div>
        </div>

      </div>
    </footer>
  );
}