"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroImages = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
  "/11.jpg",
  "/12.jpg",
  "/13.jpg",
  "/14.jpg",
  "/15.jpg",
  "/16.jpg",
  "/17.jpg",
];


export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#FFF8E7] flex flex-col">

      
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto py-10 md:py-16 px-4 md:px-8 gap-8 md:gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#800020] mb-6 leading-tight drop-shadow-lg">
            Saree Manufacturing Unit
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#333333] mb-8">
            Delivering excellence in textile manufacturing for over 25 years. Trusted by global brands, boutiques, and retailers.
          </p>
          <a
            href="/partner-up"
            className="inline-block bg-[#800020] text-[#F5DEB3] px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-[#a8324a] transition w-full sm:w-auto"
          >
            Partner With Us
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center relative mb-8 md:mb-0">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[5/6]">
            <Image
              src={heroImages[current]}
              alt="Elegant Saree"
              fill
              className="rounded-2xl shadow-2xl object-cover transition-all duration-700"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full ${current === idx ? "bg-[#800020]" : "bg-[#F5DEB3]"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="w-full bg-[#F5DEB3] py-10 md:py-16 px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] text-center mb-8 md:mb-10">Factory & Product Gallery</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src={`/gallery${item}.jpg`}
                alt={`Gallery ${item}`}
                width={300}
                height={200}
                className="object-cover w-full h-32 sm:h-40 md:h-48"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>



      <section id="products" className="w-full max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#800020] text-center mb-10">Featured Sarees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-[#800020] flex flex-col">
              <div className="h-64 w-full relative">
                <Image
                  src={`/saree${item}.jpg`}
                  alt={`Saree ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#800020] mb-2">Saree Design {item}</h3>
                <p className="text-[#333333] mb-4 flex-1">
                  Exquisite craftsmanship and luxurious fabric. Perfect for festive and formal occasions.
                </p>
                <a
                  href="#enquiry"
                  className="mt-auto inline-block bg-[#800020] text-[#F5DEB3] px-5 py-2 rounded-full font-semibold shadow hover:bg-[#a8324a] transition"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


    </main>
  );
}