"use client";

export default function ContactForm() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg border-t-4 border-cyan-600 p-8 md:p-12">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-600 mb-10"
        data-aos="fade-down">
          Get In Touch
        </h2>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name*"
              required
              className="placeholder-gray-400 text-black w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500"
              data-aos="fade-right"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="placeholder-gray-400 text-black w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500"
              data-aos="fade-left"
            />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email*"
              required
              className="placeholder-gray-400 text-black w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500"
              data-aos="fade-right"
            />

            <input
              type="tel"
              placeholder="Phone No.*"
              required
              className="placeholder-gray-400 text-black w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500"
              data-aos="fade-left"
            />
          </div>

          {/* Company */}
          <input
            type="text"
            placeholder="Company"
            className="placeholder-gray-400 text-black w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500"
            data-aos="fade-right"
          />

          {/* Requirements */}
          <textarea
            rows="5"
            placeholder="Requirements"
            className="placeholder-gray-400 text-black w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500"
            data-aos="fade-left"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white font-semibold tracking-widest py-3 rounded-md transition"
            data-aos="fade-right"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}