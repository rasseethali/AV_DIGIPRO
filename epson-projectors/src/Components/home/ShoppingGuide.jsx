import React from "react";
import {
  Search,
  Home,
  MonitorPlay,
  ShoppingCart,
} from "lucide-react";

const guide = [
  {
    icon: <Search size={34} />,
    title: "Choose Your Need",
    description:
      "Decide whether you need a projector for home cinema, office presentations, gaming, or portable entertainment.",
  },
  {
    icon: <Home size={34} />,
    title: "Select Your Space",
    description:
      "Measure your room size and viewing distance to choose the ideal projector type and screen size.",
  },
  {
    icon: <MonitorPlay size={34} />,
    title: "Compare Features",
    description:
      "Compare brightness, 4K resolution, HDR support, connectivity, and throw distance before making a decision.",
  },
  {
    icon: <ShoppingCart size={34} />,
    title: "Find Your Epson",
    description:
      "Choose the Epson projector that perfectly matches your lifestyle and enjoy a premium viewing experience.",
  },
];

const ShoppingGuide = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Shopping Guide
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to find the perfect Epson projector for
            your home, office, or entertainment needs.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">

          {guide.map((item, index) => (
            <div key={index} className="relative">

              {/* Connecting Line (Desktop Only) */}
              {index !== guide.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[70%] w-full h-1 bg-red-300"></div>
              )}

              {/* Card */}
              <div className="group bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">

                {/* Icon */}
                <div className="mx-auto w-20 h-20 rounded-full bg-red-600/10 flex items-center justify-center text-[#3584de] group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>

                {/* Step */}
                <div className="mt-5 inline-block px-3 py-1 rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
                  Step {index + 1}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ShoppingGuide; 