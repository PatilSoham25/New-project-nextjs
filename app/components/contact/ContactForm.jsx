"use client";

export default function ContactForm() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg border-t-4 border-cyan-600 p-8 md:p-12">
        
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-black mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Get In Touch
        </h2>

        {/* Form */}
        <form
          className="space-y-6"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              required
              autoComplete="given-name"
              className="placeholder-gray-400 text-black w-full border-1 border-gray-400 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              autoComplete="family-name"
              className="placeholder-gray-400 text-black w-full border-1 border-gray-400 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              autoComplete="email"
              className="placeholder-gray-400 text-black w-full border-1 border-gray-400 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone No.*"
              required
              autoComplete="tel"
              className="placeholder-gray-400 text-black w-full border-1 border-gray-400 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />
          </div>

          {/* Company */}
          <input
            type="text"
            name="company"
            placeholder="Company"
            autoComplete="organization"
            className="placeholder-gray-400 text-black w-full border-1 border-gray-400 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
          />

          {/* Requirements */}
          <textarea
            rows="5"
            name="requirements"
            placeholder="Requirements"
            className="placeholder-gray-400 text-black w-full border-1 border-gray-400 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition resize-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white font-semibold tracking-widest py-3 rounded-md transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}