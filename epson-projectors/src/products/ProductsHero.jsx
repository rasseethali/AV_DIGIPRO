import React from "react";
import { useNavigate } from "react-router-dom";
import { assetManifest } from "../assets/assetManifest.js";

import {
  MonitorPlay,
  Lightbulb,
  Tv,
  Sparkles,
} from "lucide-react";

const ProductsHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background */}
      <img
        src={assetManifest.products.hero}
        alt="Epson Projectors"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4000ms] hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-24">

        <div className="max-w-6xl mx-auto text-center">



          {/* Heading */}
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight text-white">

            Discover the Perfect

            <br />

            <span className="text-red-500">
              Projector
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-base md:text-lg lg:text-xl leading-8 text-gray-200">

            Explore Epson's complete collection of Portable,
            Home Cinema and Ultra Short Throw Projectors
            engineered to deliver immersive entertainment,
            breathtaking 4K visuals and exceptional brightness
            for every viewing experience.

          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            {/* Enquiry */}
            <button
              onClick={() => navigate("/enquiry")}
              className="group relative overflow-hidden rounded-full
    border border-white/30
    bg-white/10 backdrop-blur-md
    px-8 py-3 font-semibold tracking-wide text-white
    shadow-[0_10px_30px_rgba(255,255,255,0.08)]
    transition-all duration-500 ease-out
    hover:-translate-y-1.5
    hover:scale-105
    hover:border-red-500
    hover:bg-red-600
    hover:shadow-[0_20px_45px_rgba(220,38,38,0.45)]
    active:scale-95"
            >

              {/* Shine */}
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[250%]" />

              <span className="relative flex items-center gap-3">

                {/* Phone Icon */}
                <svg
                  className="h-5 w-5 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 16.92v3a2 2 0 01-2.18 2
          19.79 19.79 0 01-8.63-3.07
          19.5 19.5 0 01-6-6
          A19.79 19.79 0 013.08 4.18
          2 2 0 015.06 2h3
          a2 2 0 012 1.72
          c.12.89.33 1.76.63 2.6
          a2 2 0 01-.45 2.11L9.91 9.91
          a16 16 0 006.18 6.18
          l1.48-1.36a2 2 0 012.11-.45
          c.84.3 1.71.51 2.6.63
          A2 2 0 0122 16.92z"
                  />
                </svg>

                Enquiry Now
              </span>
            </button>


            
            <button
              onClick={() => navigate("/contact")}
              className="group relative overflow-hidden rounded-full
    border border-white/30
    bg-white/10 backdrop-blur-md
    px-8 py-3 font-semibold tracking-wide text-white
    shadow-[0_10px_30px_rgba(255,255,255,0.08)]
    transition-all duration-500 ease-out
    hover:-translate-y-1.5
    hover:scale-105
    hover:border-red-500
    hover:bg-red-600
    hover:shadow-[0_20px_45px_rgba(220,38,38,0.45)]
    active:scale-95"
            >

              {/* Shine */}
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[250%]" />

              <span className="relative flex items-center gap-3">

                {/* Phone Icon */}
                <svg
                  className="h-5 w-5 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 16.92v3a2 2 0 01-2.18 2
          19.79 19.79 0 01-8.63-3.07
          19.5 19.5 0 01-6-6
          A19.79 19.79 0 013.08 4.18
          2 2 0 015.06 2h3
          a2 2 0 012 1.72
          c.12.89.33 1.76.63 2.6
          a2 2 0 01-.45 2.11L9.91 9.91
          a16 16 0 006.18 6.18
          l1.48-1.36a2 2 0 012.11-.45
          c.84.3 1.71.51 2.6.63
          A2 2 0 0122 16.92z"
                  />
                </svg>

                Contact Us
              </span>
            </button>

          </div>

          {/* Feature Cards */}

          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card */}

            <div className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-3 hover:bg-white/20">

              <MonitorPlay
                size={45}
                className="mx-auto text-[#FFD700] group-hover:scale-110 transition-transform duration-300"
              />

              <h3 className="mt-5 text-xl font-bold text-white">
                4K Ultra HD
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Stunning cinematic visuals with incredible detail.
              </p>

            </div>

            {/* Card */}

            <div className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-3 hover:bg-white/20">

              <Lightbulb
                size={45}
                className="mx-auto text-[#FFD700] group-hover:scale-110 transition-transform duration-300"
              />

              <h3 className="mt-5 text-xl font-bold text-white">
                3LCD Technology
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Bright colours with true-to-life image quality.
              </p>

            </div>

            {/* Card */}

            <div className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-3 hover:bg-white/20">

              <Tv
                size={45}
                className="mx-auto text-[#FFD700] group-hover:scale-110 transition-transform duration-300"
              />

              <h3 className="mt-5 text-xl font-bold text-white">
                150" Display
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Transform any room into a home theatre.
              </p>

            </div>

            {/* Card */}

            <div className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-3 hover:bg-white/20">

              <Sparkles
                size={45}
                className="mx-auto text-[#FFD700] group-hover:scale-110 transition-transform duration-300"
              />

              <h3 className="mt-5 text-xl font-bold text-white">
                HDR Support
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Rich contrast and vibrant colours for every scene.
              </p>

            </div>

          </div>

          {/* Scroll Indicator */}



        </div>

      </div>

    </section>
  );
};

export default ProductsHero;