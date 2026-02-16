"use client";

import Image from "next/image";

export default function CompanyIntro() {
  return (
    <section className="relative bg-gray-200 py-28 overflow-hidden">
      
      {/* Cartoon Factory Background */}
      <div className="absolute left-0 top-0 opacity-10 pointer-events-none">
        <Image
          src="/Processing.png" 
          alt="factory illustration"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>

      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
        <Image
          src="/manufacturing.png" 
          alt="factory illustration"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <h1
          className="text-3xl md:text-4xl font-bold text-cyan-600 mb-8"
          data-aos="fade-right"
        >
          About Padmatech Industries
        </h1>

        {/* Content */}
        <div
          className="space-y-6 text-gray-700 leading-relaxed"
          data-aos="fade-right"
        >
          <p>
            Established in 2005, Padmatech Industries is a premier EPC company
            specializing in turnkey equipment supply, process equipment
            manufacturing, and EPC projects for industries such as chemicals,
            pharmaceuticals, APIs, bulk drugs, biotech, petrochemicals,
            beverages, refineries, oil and gas, and foundry chemicals. Our
            experience spans two decades and over 700 contracts. Our product
            range has been developed to meet the diverse needs of various
            industries, resulting in a significant response from clients across
            the nation.
          </p>

          <p>
            Padmatech Industries Pvt. Ltd. has 20 years of extensive experience
            in the field of process equipment manufacturing. We offer a wide
            range of industrial processing equipment, chemical processing
            equipment, heating and cooling systems, powder granulation
            equipment, liquid and powder mixing equipment, blenders,
            fermenters, special-purpose machines, and material handling
            systems. Our qualified team, driven by a vision to deliver the best
            industry solutions, has enabled us to offer optimized results. At
            Padmatech Industries Pvt. Ltd., we ensure that our customers are
            served with best-in-class industrial-quality designs and
            energy-efficient solutions for over two decades.
          </p>

          <p>
            At Padmatech Industries, our focus on innovation drives every
            aspect of our operations, ensuring that our superior products
            deliver a memorable experience to our clients. With a strong
            history of design expertise and a commitment to customer
            satisfaction, we have established ourselves as industry leaders.
          </p>

          <p>
            Our services are carried out in several state-of-the-art facilities,
            each equipped with the latest technology and staffed by a team of
            skilled professionals. We take pride in our law-abiding practices,
            ensuring that all our operations adhere to legal and regulatory
            standards. This integrity forms the bedrock of our company,
            guaranteeing that our products are reliable and compliant.
          </p>
        </div>
      </div>
    </section>
  );
}