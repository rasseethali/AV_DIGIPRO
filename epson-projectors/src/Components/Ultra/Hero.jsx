import React from "react";
import { assetManifest } from "../../assets/assetManifest";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={assetManifest.hero.Ultracinema}
        alt="Home Cinema Projector"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="max-w-xl text-center lg:text-left lg:ml-auto">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white">
              Ultra Shot Throw
              <span className="block text-red-600">
                 Projectors Series
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-100 leading-7">
              Experience brilliant Full HD projection with compact Epson laser
              projectors for home entertainment, business presentations, and
              professional use anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;