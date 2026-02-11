"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const links = [
    "Home",
    "About Us",
    "Products",
    "EPC Projects",
    "Services",
    "Blog",
    "Contact Us",
  ];

  return (
    <footer className="bg-[#0b1c2d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          
          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Padmatech Industries Pvt. Ltd.
            </h3>
            <p className="text-gray-300">
              Delivering innovative industrial and engineering solutions with
              quality, safety and reliability.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((item, i) => (
                <li key={i}>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-teal-400 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>

            <div className="flex items-center gap-3 mb-3">
              <Phone className="w-5 h-5 text-teal-400" />
              <span className="text-gray-300">+91 9146140044</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <Mail className="w-5 h-5 text-teal-400" />
              <span className="text-gray-300">
                padmatechindustries@gmail.com
              </span>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-teal-400">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-teal-400">
                <Instagram />
              </a>
              <a href="#" className="hover:text-teal-400">
                <Facebook />
              </a>
              <a href="#" className="hover:text-teal-400">
                <Youtube />
              </a>

              {/* Pinterest (custom circle) */}
              <a
                href="#"
                className="w-6 h-6 flex items-center justify-center border rounded-full text-xs hover:text-teal-400"
              >
                P
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-600 text-center py-4 text-gray-300 text-sm">
        Copyright © 2026 – Padmatech Industries Pvt. Ltd. | All Rights Reserved
      </div>
    </footer>
  );
}