"use client"
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
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200">

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23800020' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-red-900/10 rounded-full border border-red-900/20">
                  <span className="text-red-900 font-medium text-sm">Premium Textile Manufacturing</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-900 leading-tight">
                  Exquisite
                  <span className="block text-red-800">
                    Saree Manufacturing
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-700 font-medium">
                    Since 1998
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                  Crafting timeless elegance with modern precision. Trusted by global brands, boutiques, and discerning customers worldwide.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/partner-up"
                  className="inline-flex items-center px-8 py-4 bg-red-900 hover:bg-red-800 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Partner With Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <a
                  href="#gallery"
                  className="inline-flex items-center px-8 py-4 border-2 border-red-900 text-red-900 rounded-full font-semibold hover:bg-red-900 hover:text-white transition-all duration-300"
                >
                  View Gallery
                </a>
              </div>

              
              <div className="flex flex-wrap gap-8 pt-8 border-t border-red-900/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-900">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-900">500+</div>
                  <div className="text-sm text-gray-600">Global Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-900">50K+</div>
                  <div className="text-sm text-gray-600">Sarees Crafted</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6 h-full">

                <div className="space-y-6">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-red-900 p-1">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <video
                        src="/model.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                    <div className="text-red-900 font-bold text-lg">Premium Quality</div>
                    <div className="text-gray-600 text-sm">Handcrafted Excellence</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <div
                      className="relative w-full h-full"
                      onTouchStart={e => setTouchStartX(e.touches[0].clientX)}
                      onTouchEnd={e => {
                        if (touchStartX === null) return;
                        const diff = e.changedTouches[0].clientX - touchStartX;
                        if (diff > 40) setCurrent((current - 1 + heroImages.length) % heroImages.length);
                        if (diff < -40) setCurrent((current + 1) % heroImages.length);
                        setTouchStartX(null);
                      }}
                    >
                      <button
                        aria-label="Previous"
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-red-900 rounded-full p-2 shadow transition hidden sm:block"
                        onClick={() => setCurrent((current - 1 + heroImages.length) % heroImages.length)}
                        style={{ outline: "none" }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <Image
                        src={heroImages[current]}
                        alt="Elegant Saree Collection"
                        fill
                        className="object-cover transition-all duration-1000 ease-in-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <button
                        aria-label="Next"
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-red-900 rounded-full p-2 shadow transition hidden sm:block"
                        onClick={() => setCurrent((current + 1) % heroImages.length)}
                        style={{ outline: "none" }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {heroImages.slice(0, 5).map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx
                                ? "bg-white w-8"
                                : "bg-white/50 hover:bg-white/75"
                              }`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                    <div className="text-red-900 font-bold text-lg">Custom Design</div>
                    <div className="text-gray-600 text-sm">Tailored Solutions</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 w-24 h-24 bg-red-900/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-12 -left-8 w-32 h-32 bg-yellow-100/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>




      <section id="gallery" className="relative py-20 bg-gradient-to-br from-yellow-100 to-yellow-200">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-900/10 rounded-full border border-red-900/20 mb-4">
              <span className="text-red-900 font-medium text-sm">Our Craftsmanship</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-4">
              Factory & Product Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the artistry behind our manufacturing process and the beauty of our finished products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="col-span-2 row-span-2 group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square bg-red-900 p-1 rounded-2xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="/gallery1.jpeg"
                    alt="Gallery 1"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square bg-red-900 p-1 rounded-2xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="/gallery2.jpeg"
                    alt="Gallery 2"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square bg-red-900 p-1 rounded-2xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="/gallery3.jpeg"
                    alt="Gallery 3"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square bg-red-900 p-1 rounded-2xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="/gallery4.jpeg"
                    alt="Gallery 4"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square bg-red-900 p-1 rounded-2xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="/gallery5.jpeg"
                    alt="Gallery 5"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 md:col-span-4 flex justify-center mt-8">
              <a
                href="/gallery"
                className="inline-flex items-center px-8 py-4 bg-red-900 hover:bg-red-800 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
              >
                See Gallery
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
          </div>
      </section>






      <section id="gallery" className="relative py-20 bg-gradient-to-br from-yellow-100 to-yellow-200">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-900/10 rounded-full border border-red-900/20 mb-4">
              <span className="text-red-900 font-medium text-sm">Our Craftsmanship</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-4">
              Factory & Product Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the artistry behind our manufacturing process and the beauty of our finished products
            </p>
          </div>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={item}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${index % 3 === 0 ? 'md:col-span-2' : ''
                  } ${index === 0 ? 'lg:row-span-2' : ''}`}
              >
                <div className={`relative ${index === 0 ? 'aspect-square' : 'aspect-[4/3]'} bg-red-900 p-1`}>
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={`/gallery${item}.jpeg`}
                      alt={`Gallery ${item}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <svg className="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="relative py-20 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-900/10 rounded-full border border-red-900/20 mb-4">
              <span className="text-red-900 font-medium text-sm">Premium Collection</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-4">
              Featured Sarees
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our signature collection of handcrafted sarees, each piece telling a story of tradition and elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">

                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={`/saree${item}.jpg`}
                    alt={`Saree ${item}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  <div className="absolute top-4 left-4 bg-red-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Premium
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-red-900">Saree Design {item}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Exquisite craftsmanship meets luxurious fabric in this stunning piece. Perfect for festive occasions and formal events.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-red-900 text-xs rounded-full font-medium">Handwoven</span>
                    <span className="px-3 py-1 bg-yellow-100 text-red-900 text-xs rounded-full font-medium">Premium Silk</span>
                    <span className="px-3 py-1 bg-yellow-100 text-red-900 text-xs rounded-full font-medium">Custom Design</span>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href="#enquiry"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-900 hover:bg-red-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      Enquire Now
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}