"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/gallery1.jpeg",
  "/gallery2.jpeg",
  "/gallery3.jpeg",
  "/gallery4.jpeg",
  "/gallery5.jpeg",
  "/gallery6.jpeg",
  "/gallery7.jpeg",
  "/gallery8.jpeg",
  "/gallery9.jpeg",
  "/gallery10.jpeg",
  "/gallery11.jpeg",
  "/gallery12.jpeg",
];

export default function GalleryPage() {
  const [modal, setModal] = useState({ open: false, src: "" });

  const handleImageClick = (src) => {
    setModal({ open: true, src });
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setModal({ open: false, src: "" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 pb-20">
      <section className="max-w-7xl mx-auto px-4 pt-16">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-red-900/10 rounded-full border border-red-900/20 mb-4">
            <span className="text-red-900 font-medium text-sm tracking-widest uppercase">Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-900 mb-4 tracking-tight">
            Saree Factory & Product Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our world of craftsmanship, innovation, and beauty. Every image tells a story of tradition and futuristic textile design.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, idx) => (
            <div
              key={src + idx}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg bg-white/80 border border-white/60 group transition-all duration-300 hover:shadow-2xl hover:border-red-900/60 hover:bg-white/95 hover:-translate-y-2 cursor-pointer relative"
              onClick={() => handleImageClick(src)}
            >
              <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-red-900 group-hover:shadow-[0_0_32px_0_rgba(120,0,32,0.25)] transition-all duration-300"></div>
              <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-lg" style={{boxShadow: "0 0 40px 10px rgba(120,0,32,0.10)"}}></div>
              <div className="relative w-full z-20">
                <Image
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 group-hover:blur-[1.5px] group-hover:brightness-90"
                  style={{ display: "block" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-md rounded-full p-4 shadow-xl border border-red-900/20 animate-fade-in scale-90 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 border-4 border-red-800/20 shadow-[0_0_40px_10px_rgba(120,0,32,0.15)]"></div>
              </div>
            </div>
          ))}
        </div>

        {modal.open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-w-6xl w-[95vw] max-h-[95vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={modal.src}
                alt="Full Size"
                width={1200}
                height={800}
                className="object-contain rounded-2xl shadow-2xl border-4 border-white"
                sizes="95vw"
              />
              <button
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-red-900 rounded-full p-3 shadow-lg transition-all hover:scale-110"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-16">
          <a
            href="/"
            className="inline-flex items-center px-10 py-4 bg-red-900 hover:bg-red-800 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg tracking-wide"
          >
            Back to Home
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>  
        </div>       

    </section>
    </main>
  );
}