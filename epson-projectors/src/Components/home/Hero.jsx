import React from "react";
import { assetManifest } from "../../assets/assetManifest.js";
import { ReactTyped } from "react-typed";
import {useNavigate}from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-screen ">
      {/* Background */}
      <img
        src={assetManifest.hero.mainImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 md:px-16 lg:px-20">
        <h2 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
          <span className="text-red-500 text-8xl">A</span>
          <span className="text-blue-red text-6xl">V</span>{" "}
          DIGIPRO
          <br />

          <ReactTyped
            strings={["Theatre Projectors"]}
            typeSpeed={70}
            backSpeed={50}
            loop
            className="text-red-500 text-5xl font-extrabold"
          />
        </h2>

        <p className="text-white mt-6 max-w-xl text-base md:text-lg leading-relaxed">
          Projectors display images and videos on a large screen with clear,
          vibrant visuals. They offer high-resolution image quality, accurate
          colors, and sharp details, making them ideal for presentations,
          education, home entertainment, and business use.
        </p>

        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center">

          {/* Explore Products */}
          <button
            onClick={() => (window.location.href = "/products")}
            className="group relative overflow-hidden rounded-full
    bg-gradient-to-r from-red-700 via-red-600 to-red-700
    px-8 py-3 font-semibold tracking-wide text-white
    border border-red-400/20
    shadow-[0_10px_30px_rgba(220,38,38,0.35)]
    transition-all duration-500 ease-out
    hover:-translate-y-1.5
    hover:scale-105
    hover:shadow-[0_20px_50px_rgba(220,38,38,0.6)]
    active:scale-95"
          >

            {/* Animated Shine */}
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[250%]" />

            {/* Glow */}
            <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-red-500/10 blur-xl" />

            <span className="relative flex items-center gap-3">
              Explore Products

              <svg
                className="h-5 w-5 transition-all duration-500 group-hover:translate-x-2 group-hover:scale-125"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </button>

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

        </div>

      </div>
    </section>
  );
};

export default Hero;