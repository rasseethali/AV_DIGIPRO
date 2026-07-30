import React from "react";
import { assetManifest } from "../../assets/assetManifest";

const Hero = () => {
  return (
    <section className="relative h-screen  w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={assetManifest.hero.portablecinema}
        alt="portable Cinema Projector"
        className="absolute inset-0 w-full h-full object-center"
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/30"></div> */}

      {/* Content */}
      <div className="absolute inset-0  flex items-center lg:justify-start">
        <div className="w-full max-w-7xl mx-auto px-8 sm:px-8 lg:px-16">
          <div className="max-w-xl text-center lg:text-left lg:ml-auto">
           
 {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/5"></div>

            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white">
                Standard Throw (SMP)
                <span className="block text-red-500">
                  Portable Projectors
                </span>
              </h1>

              <p className="mt-5 text-sm sm:text-base md:text-lg text-white leading-8">
                Experience brilliant Full HD projection with compact Epson laser
                projectors for home entertainment, business presentations, and
                professional use anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;