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
      className="fixed top-0 left-0 w-full bg-white shadow-md z-[999]"
      data-aos="fade-down"
    >
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20 md:h-24">

        {/* LOGO */}
        <Link
          href="/"
          className="relative w-36 h-14 md:w-44 md:h-16 flex-shrink-0"
        >
          <Image
            src="/logo.webp"
            alt="logo"
            fill
            priority
            className="object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-gray-700">
          <Link href="/" className="hover:text-cyan-600">Home</Link>

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

        {/* CONTACT BUTTON */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-md font-semibold whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-black flex-shrink-0"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-[#0b1c2d] text-white font-semibold text-center py-5 space-y-4">
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

          <Link href="/contact" onClick={closeMenu} className="block hover:text-teal-400">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}