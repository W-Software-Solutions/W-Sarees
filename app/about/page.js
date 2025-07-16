import React from 'react'

const page = () => {
  return (
    <>
    <section id="about" className="w-full bg-[#F5DEB3] py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#800020] mb-2">25+</h2>
            <p className="text-lg text-[#333333]">Years of Excellence</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#800020] mb-2">1000+</h2>
            <p className="text-lg text-[#333333]">Retail Partners</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#800020] mb-2">50+</h2>
            <p className="text-lg text-[#333333]">Countries Served</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#800020] mb-2">ISO 9001</h2>
            <p className="text-lg text-[#333333]">Certified Quality</p>
          </div>
        </div>
      </section>

      <section id="capabilities" className="w-full max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#800020] text-center mb-10">Our Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#800020]">
            <h3 className="text-xl font-bold text-[#800020] mb-2">Mass Production</h3>
            <p className="text-[#333333]">State-of-the-art facilities with a daily output of 10,000+ sarees.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#800020]">
            <h3 className="text-xl font-bold text-[#800020] mb-2">Custom Designs</h3>
            <p className="text-[#333333]">In-house design team for exclusive patterns and client requirements.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#800020]">
            <h3 className="text-xl font-bold text-[#800020] mb-2">Global Logistics</h3>
            <p className="text-[#333333]">Efficient worldwide shipping and supply chain management.</p>
          </div>
        </div>
      </section>
      </>
  )
}

export default page