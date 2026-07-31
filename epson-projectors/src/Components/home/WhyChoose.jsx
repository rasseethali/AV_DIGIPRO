import React from "react";
import {
  Monitor,
  Palette,
  Sun,
  PlugZap,
  BatteryCharging,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Monitor size={40} />,
    title: "4K PRO-UHD Quality",
    description:
      "Enjoy crystal-clear visuals with exceptional sharpness, realistic colors, and immersive 4K PRO-UHD projection for every scene.",
  },
  {
    icon: <Palette size={40} />,
    title: "3LCD Technology",
    description:
      "Experience bright, vibrant, and accurate colors powered by Epson's advanced 3LCD technology without the rainbow effect.",
  },
  {
    icon: <Sun size={40} />,
    title: "High Brightness",
    description:
      "Deliver brilliant images in different lighting conditions, making every presentation, movie, or game look outstanding.",
  },
  {
    icon: <PlugZap size={40} />,
    title: "Easy Connectivity",
    description:
      "Connect laptops, gaming consoles, streaming devices, and media players effortlessly with multiple connectivity options.",
  },
  {
    icon: <BatteryCharging size={40} />,
    title: "Long-lasting Performance",
    description:
      "Designed for durability with long-life light sources and reliable performance for years of uninterrupted entertainment.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Trusted Worldwide",
    description:
      "Backed by decades of innovation, Epson projectors are trusted globally for home entertainment, business, and education.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose AV DIGIPRO
          </h2>

          <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-lg leading-8">
            Discover why millions of customers worldwide trust Epson projectors
            for exceptional picture quality, innovative technology, and reliable
            performance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111111] rounded-2xl p-8 border border-gray-800
              hover:border-[#f81414]
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-500"
            >
              <div className="text-[#de3535] mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 