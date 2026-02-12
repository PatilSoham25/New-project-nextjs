"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-[999] bg-white shadow-md"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="relative w-32 h-12">
          <Image src="/logo.webp" alt="logo" fill className="object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-gray-700">
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
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-md font-semibold">
            Contact Us
          </button>
        </div>

        {/* Mobile button */}
        <button
          className="lg:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden bg-[#0b1c2d] text-white font-semibold text-center py-4 space-y-4">
          <Link href="/" onClick={closeMenu} className="block hover:text-teal-400">
            Home
          </Link>
          <Link href="/about" onClick={closeMenu} className="block hover:text-teal-400">
            About Us
          </Link>
          <span className="block hover:text-teal-400">Products</span>
          <span className="block hover:text-teal-400">Services</span>
          <Link href="/career" onClick={closeMenu} className="block hover:text-teal-400">
            Career
          </Link>
          <span className="block hover:text-teal-400">Contact Us</span>
        </div>
      )}
    </header>
  );
}