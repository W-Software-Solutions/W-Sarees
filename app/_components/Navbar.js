'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaWhatsapp } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";

const whatsappUrl = "https://wa.me/919876543210?text=Hello,%20I%20want%20to%20enquire%20about%20sarees.";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-4 md:px-8 py-4 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Image src="/W-logo.jpg" alt="W Sarees Logo" width={40} height={40} className="rounded-full" />
        <span className="text-2xl font-bold text-[#800020]">W Sarees</span>
      </div>

      <div className="space-x-8 hidden md:flex">
        <Link href="/" className="text-[#333333] hover:text-[#800020] font-bold transition">Home</Link>
        <Link href="/about" className="text-[#333333] hover:text-[#800020] font-bold transition">About</Link>
        <Link href="/#process" className="text-[#333333] hover:text-[#800020] font-bold transition">Process</Link>
        <Link href="/#gallery" className="text-[#333333] hover:text-[#800020] font-bold transition">Gallery</Link>
        <Link href="/contact" className="text-[#333333] hover:text-[#800020] font-bold transition">Contact</Link>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener"
        className="hidden md:inline-flex bg-[#25D366] text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-[#128C7E] transition items-center gap-2"
      >
        <FaWhatsapp size={18} />
        Enquiry
      </a>

      <button
        className="md:hidden text-[#800020] focus:outline-none"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <FaBars size={28} />
      </button>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
          <div className="bg-white w-64 h-full shadow-lg flex flex-col p-6 animate-slide-in relative">
            <div className="flex justify-center items-center mb-8">
              <button
                className="text-[#800020] p-3 rounded-full bg-[#f8e7d1] shadow focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <IoArrowForwardCircle size={32} />
              </button>
            </div>
            <Link href="/" className="mb-4 text-lg font-medium text-[#333333] hover:text-[#800020] transition" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" className="mb-4 text-lg font-medium text-[#333333] hover:text-[#800020] transition" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="#process" className="mb-4 text-lg font-medium text-[#333333] hover:text-[#800020] transition" onClick={() => setMenuOpen(false)}>Process</Link>
            <Link href="#gallery" className="mb-4 text-lg font-medium text-[#333333] hover:text-[#800020] transition" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" className="mb-4 text-lg font-medium text-[#333333] hover:text-[#800020] transition" onClick={() => setMenuOpen(false)}>Contact</Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-[#128C7E] transition"
            >
              <FaWhatsapp size={20} />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease;
        }
      `}</style>
    </nav>
  )
}

export default Navbar