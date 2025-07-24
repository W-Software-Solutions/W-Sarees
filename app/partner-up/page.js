"use client";
import { useState } from "react";

export default function PartnerUp() {
  const [form, setForm] = useState({
    name: "",
    shopName: "",
    city: "",
    whatsapp: "",
    email: "",
    requirements: "",
  });
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true);
    console.log("Partner Up Form Submission:", form);
    setForm({
      name: "",
      shopName: "",
      city: "",
      whatsapp: "",
      email: "",
      requirements: "",
    });
    setTimeout(() => setSuccess(false), 4000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8e7d1] via-[#e6cfa7] to-[#a52a2a] flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white/90 shadow-2xl rounded-2xl p-8 border border-[#e6cfa7]">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-[#800020] mb-2 text-center">Partner With W Sarees</h1>
        <p className="mb-6 text-[#7c4d1e] text-center">Join hands with us to offer premium sarees at your shop.<br />Fill the form below and our team will reach out to you.</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold text-[#a52a2a] mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-[#e6cfa7] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a52a2a] bg-white text-[#800020] placeholder:text-[#a52a2a]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block font-semibold text-[#a52a2a] mb-1">Shop Name</label>
            <input
              type="text"
              name="shopName"
              value={form.shopName}
              onChange={handleChange}
              required
              className="w-full border border-[#e6cfa7] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a52a2a] bg-white text-[#800020] placeholder:text-[#a52a2a]"
              placeholder="Enter shop name"
            />
          </div>
          <div>
            <label className="block font-semibold text-[#a52a2a] mb-1">City/Location</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full border border-[#e6cfa7] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a52a2a] bg-white text-[#800020] placeholder:text-[#a52a2a]"
              placeholder="City or market"
            />
          </div>
          <div>
            <label className="block font-semibold text-[#a52a2a] mb-1">WhatsApp Number</label>
            <input
              type="text"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              required
              className="w-full border border-[#e6cfa7] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a52a2a] bg-white text-[#800020] placeholder:text-[#a52a2a]"
              placeholder="WhatsApp number"
            />
          </div>
          <div>
            <label className="block font-semibold text-[#a52a2a] mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-[#e6cfa7] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a52a2a] bg-white text-[#800020] placeholder:text-[#a52a2a]"
              placeholder="Email address"
            />
          </div>
          <div>
            <label className="block font-semibold text-[#a52a2a] mb-1">Requirements / Message</label>
            <textarea
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              required
              className="w-full border border-[#e6cfa7] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a52a2a] bg-white text-[#800020] placeholder:text-[#a52a2a]"
              placeholder="Tell us what you need, preferred saree types, etc."
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#a52a2a] to-[#800020] text-white font-semibold py-2 rounded-lg shadow hover:scale-105 transition"
          >
            Submit Partnership Request
          </button>
          {success && (
            <div className="mt-3 text-green-700 font-medium text-center animate-fade-in">
              Thank you! We received your details and will contact you soon.
            </div>
          )}
        </form>
      </div>
      <style jsx global>{`
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s;
        }
      `}</style>
    </div>
  );
}
