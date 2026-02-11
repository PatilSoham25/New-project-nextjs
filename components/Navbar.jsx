"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 h-[17%] bg-white shadow"
    data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex justify-center items-center gap-3 pt-4 h-22 w-30">
            <img src="/logo.webp" alt="logo" className="h-full w-full " />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-7 text-gray-700">
            <a className="hover:text-cyan-600 font-medium cursor-pointer">Home</a>

            <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-600">
              About Us <ChevronDown size={16} />
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-600">
              Products <ChevronDown size={16} />
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-600">
              EPC Projects <ChevronDown size={16} />
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-600">
              Services <ChevronDown size={16} />
            </div>

            <a className="cursor-pointer hover:text-cyan-600">Inquiry Form</a>
            <a className="cursor-pointer hover:text-cyan-600">Blog</a>
            <a className="cursor-pointer hover:text-cyan-600">Career</a>
          </nav>

          {/* Contact */}
          <div className="hidden lg:block">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-md">
              Contact Us
            </button>
          </div>

          {/* Mobile */}
          <button className="lg:hidden text-black cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden text-center py-3 space-y-3 bg-[#0b1c2d] cursor-pointer">
          <a className="block hover:text-teal-400">Home</a>
          <a className="block hover:text-teal-400">About Us</a>
          <a className="block hover:text-teal-400">Products</a>
          <a className="block hover:text-teal-400">EPC Projects</a>
          <a className="block hover:text-teal-400">Services</a>
          <a className="block hover:text-teal-400">Inquiry Form</a>
          <a className="block hover:text-teal-400">Blog</a>
          <a className="block hover:text-teal-400">Career</a>
          <a className="block hover:text-teal-400">Contact Us</a>
        </div>
      )}
    </header>
  );
}