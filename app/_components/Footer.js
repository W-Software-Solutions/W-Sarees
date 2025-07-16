import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#f8e7d1] via-[#e6cfa7] to-[#a52a2a] text-[#3a1a1a] pt-10 pb-6 px-4 md:px-16 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Address */}
        <div>
        <div className="flex items-center gap-2 mb-2">
        <Image src="/W-logo.jpg" alt="W Sarees Logo" width={40} height={40} className="rounded-full" />
          <h2 className="text-center items-center font-playfair text-2xl font-bold text-[#a52a2a]">W Sarees</h2>
          </div>
          <p className="text-sm mb-2">W Sarees & Textile Manufacturing </p>
          <p className="text-xs">
            <span className="font-semibold">Factory Address:</span><br />
            Nagpur, Maharashtra, India<br />
          </p>
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: <a href="mailto:info@wsarees.com" className="underline">info@wsarees.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+919876543210" className="underline">+91 98765 43210</a></p>
          <p className="text-sm">WhatsApp: <a href="https://wa.me/919876543210" target="_blank" rel="noopener" className="underline">Chat Now</a></p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-[#a52a2a]">Home</a></li>
            <li><a href="/products" className="hover:text-[#a52a2a]">Products</a></li>
            <li><a href="/about" className="hover:text-[#a52a2a]">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#a52a2a]">Contact</a></li>
          </ul>
        </div>
        {/* Social & Markets */}
        <div>
          <h3 className="font-semibold mb-2">Connect & Markets</h3>
          <div className="flex space-x-4 mb-2">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener" aria-label="WhatsApp" className="hover:text-green-600"><FaWhatsapp size={20} /></a>
            <a href="#" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-pink-600"><FaInstagram size={20} /></a>
            <a href="#" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-blue-600"><FaFacebookF size={20} /></a>
            <a href="#" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-blue-800"><FaLinkedinIn size={20} /></a>
          </div>
          <p className="text-xs">Supplying to: All over India</p>
        </div>
      </div>
      <div className="border-t border-[#e6cfa7] mt-8 pt-4 text-center text-xs text-[#7c4d1e]">
        © {new Date().getFullYear()} W Sarees. All rights reserved. | Privacy Policy
      </div>
    </footer>
  )
}

export default Footer