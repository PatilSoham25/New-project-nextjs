"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-[999] bg-white shadow"
    data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">          
          {/* Logo */}
          <div className="flex justify-center items-center gap-3 pt-4 h-22 w-30">
            <img src="/logo.webp" alt="logo" className="h-full w-full " />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden font-semibold lg:flex items-center justify-center gap-10 text-gray-700">
            <Link href="/" className="hover:text-cyan-600">
              Home
            </Link>

            <Link href="/about" className="hover:text-cyan-600">
              About Us
            </Link>

            <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-600">
              Products <ChevronDown size={16} />
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-600">
              Services <ChevronDown size={16} />
            </div>

            <Link href="/career" className="hover:text-cyan-600">
              Career
            </Link>
          </nav>

          {/* Contact */}
          <div className="hidden lg:block">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-md font-semibold cursor-pointer">
              Contact Us
            </button>
          </div>

          {/* Mobile */}
          <button className="lg:hidden text-black cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
  

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden font-semibold text-center py-3 space-y-3 bg-[#0b1c2d] cursor-pointer">
          <Link href="/" className="block hover:text-teal-400">Home</Link>
          <Link href="/about" className="block hover:text-teal-400">
            About Us
          </Link>
          <a className="block hover:text-teal-400">Products</a>
          <a className="block hover:text-teal-400">Services</a>
          <a className="block hover:text-teal-400">Career</a>
          <a className="block hover:text-teal-400">Contact Us</a>
        </div>
      )}
    </header>
  );
}