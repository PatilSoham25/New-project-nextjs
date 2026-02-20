"use client";

export default function MapLocation() {
  return (
    <section className="w-full bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[450px]">

        {/* LEFT SIDE - GOOGLE MAP */}
        <div className="w-full h-[350px] lg:h-auto">
          <iframe
            src="https://www.google.com/maps?q=Jakarta+Indonesia&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="flex items-center bg-gray-100 px-8 md:px-16 py-12">
          <div className="max-w-md">

            {/* Small Title */}
            <p className="text-green-800 uppercase tracking-widest font-bold text-sm mb-4">
              Location
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              We&apos;re here to help you!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}