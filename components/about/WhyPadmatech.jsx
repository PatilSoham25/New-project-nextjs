import {
  Lightbulb,
  Settings,
  TrendingUp,
  Wallet,
  Link,
  Calendar,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Reinvent Your Career",
    desc: "Re-imagine your future with a leader in the turnkey solution-providing industry. Optimized solutions, innovative approach. That’s the essence of what we do here at Padmatech. This means our people always need to be at their sharpest. We’ll invest in you to hone your talent and shape your future.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Technology",
    desc: "Innovation is our passion, and we reflect the same through continuous improvement and intense focus on customer needs. We believe great innovation always helps to enhance business for years and years.",
  },
  {
    icon: Settings,
    title: "Optimized Solutions",
    desc: "We create optimized solutions for our customers by carefully listening to their needs and exceeding their expectations. We provide work environments, products, services, and solutions that enable productive and efficient resource utilization as we strive to achieve our vision.",
  },
  {
    icon: Wallet,
    title: "Low Running & Maintenance Cost",
    desc: "We manufacture products using world-class technologies, making them highly energy efficient with low running & maintenance costs.",
  },
  {
    icon: Link,
    title: "Durability",
    desc: "We manufacture products to enhance your business, maintaining a smooth balance between your investments and returns on them. Thus, quality products manufactured by us sustain over a longer period, offering the best profit to your business.",
  },
  {
    icon: Calendar,
    title: "Less Pay Back Period",
    desc: "All our products are manufactured with international quality standards, ensuring a shorter payback period on your investments.",
  },
];

export default function WhyPadmatech() {
  return (
    <section className="relative py-16 bg-gradient-to-br bg-white">
      {/* HEADING */}
      <h2 className="text-center text-cyan-700 text-3xl md:text-4xl font-bold mb-12"
      data-aos="fade-down">
        Why Choose Padmatech Industries
      </h2>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white p-8 shadow-xl hover:shadow-2xl transition rounded-sm"
              data-aos="zoom-in"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center bg-cyan-600 text-white mb-5">
                <Icon size={26} />
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-black text-lg mb-3">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}