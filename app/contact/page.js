import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#FFF8E7] py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#800020] mb-4 text-center">Business Enquiry</h2>
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-[#F5DEB3] rounded px-4 py-3 text-[#333333] focus:outline-none focus:border-[#800020]"
              required
            />
            <input
              type="text"
              placeholder="Your Phone / Email"
              className="border border-[#F5DEB3] rounded px-4 py-3 text-[#333333] focus:outline-none focus:border-[#800020]"
              required
            />
            <div className='flex items-center gap-2'>
            <input
              type="number"
              placeholder="Quantity Required"
              className="border border-[#F5DEB3] rounded px-4 py-3 text-[#333333] focus:outline-none focus:border-[#800020]"
            />
            <h2 className=' text-black'>Sarees</h2>
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border border-[#F5DEB3] rounded px-4 py-3 text-[#333333] focus:outline-none focus:border-[#800020]"
              required
            />
            <button
              type="submit"
              className="cursor-pointer bg-[#800020] text-[#F5DEB3] px-8 py-3 rounded-full font-semibold shadow hover:bg-[#a8324a] transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
  )
}

export default Contact