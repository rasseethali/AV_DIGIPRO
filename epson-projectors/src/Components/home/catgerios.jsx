import React from "react";
import { useNavigate } from "react-router-dom";
import { assetManifest } from "../../assets/assetManifest.js";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* ================= Portable Projectors ================= */}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Image */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl">
          <img
            src={assetManifest.categories.cat1}
            alt="Portable Projector"
            className="w-full h-70 sm:h-87.5 md:h-112.5 lg:h-125 object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">

          <div className="flex items-center gap-4">
            <div className="w-2 h-12 bg-[#003399] rounded-full"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Portable Projectors
            </h2>
          </div>

          <p className="mt-6 text-gray-600 leading-8 text-base md:text-lg">
            Experience stunning visuals anywhere with Epson Portable Projectors. Compact, lightweight, and easy to carry, they're perfect for home, office, or travel. Enjoy bright Full HD and 4K-quality projection with vibrant, true-to-life colors. Designed for effortless portability, these projectors feature quick setup, wireless connectivity, and flexible compatibility with laptops, smartphones, and streaming devices. Whether you're delivering professional presentations, hosting movie nights, or gaming on the go, Epson Portable Projectors provide reliable performance, sharp image quality, and an immersive viewing experience wherever you are.
          </p>
          
          {/* Explore Products */}
          <button
            onClick={() => (window.location.href = "/products")}
            className="group relative overflow-hidden rounded-full
    bg-gradient-to-r from-red-700 via-red-600 to-red-700
    px-8 py-3 font-semibold tracking-wide text-white
    border border-red-400/20 mt-4
    shadow-[0_10px_30px_rgba(220,38,38,0.35)]
    transition-all duration-500 ease-out
    hover:-translate-y-1.5
    hover:scale-105
    hover:shadow-[0_20px_50px_rgba(220,38,38,0.6)]
    active:scale-95"
          >

            {/* Animated Shine */}
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-red from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[250%]" />

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

        </div>

      </div>

      {/* ================= Home Projectors ================= */}

      <div className="max-w-7xl mx-auto mt-24 flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Content */}
        <div className="w-full lg:w-1/2">

          <div className="flex items-center gap-4">
            <div className="w-2 h-12 bg-[#003399] rounded-full"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Home Projectors
            </h2>
          </div>

          <p className="mt-6 text-gray-600 leading-8 text-base md:text-lg">
            Transform your home entertainment experience with Epson Home Projectors. Enjoy sharp Full HD visuals enhanced with 4K Enhancement technology, delivering exceptional clarity and detail. HDR support provides deeper contrast, richer colors, and more lifelike images for an immersive viewing experience. With easy connectivity to streaming devices, gaming consoles, and media players, these projectors are perfect for movies, live sports, gaming, and everyday big-screen entertainment from the comfort of your home.
          </p>

          {/* Explore Products */}
          <button
            onClick={() => (window.location.href = "/products")}
            className="group relative overflow-hidden rounded-full
    bg-gradient-to-r from-red-700 via-red-600 to-red-700
    px-8 py-3 font-semibold tracking-wide text-white
    border border-red-400/20 mt-4
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

        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl">
          <img
            src={assetManifest.categories.cat2}
            alt="Home Projector"
            className="w-full h-70 sm:h-87.5 md:h-112.5 lg:h-125 object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
      {/* ================= Ultra Short Throw ================= */}

      <div className="max-w-7xl mx-auto mt-24 flex flex-col lg:flex-row items-center gap-12">

        {/* Image */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl">
          <img
            src={assetManifest.categories.cat3}
            alt="Ultra Short Throw Projector"
            className="w-full h-70 sm:h-87.5 md:h-112.5 lg:h-125 object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">

          <div className="flex items-center gap-4">
            <div className="w-2 h-12 bg-[#003399] rounded-full"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ultra Short Throw Projectors
            </h2>
          </div>
          <p className="mt-6 text-gray-600 leading-8 text-base md:text-lg">
            Experience cinematic entertainment at home with Epson Ultra Short Throw Projectors, capable of projecting stunning images up to 150 inches from just a short distance. Enjoy breathtaking 4K PRO-UHD visuals with exceptional brightness, sharp details, and vibrant colors for a truly immersive viewing experience. Built-in Android TV gives you instant access to your favorite streaming apps, while premium YAMAHA-powered audio delivers rich, room-filling sound without the need for external speakers. Perfect for movies, gaming, sports, and everyday entertainment in any modern living space.
          </p>
         {/* Explore Products */}
          <button
            onClick={() => (window.location.href = "/products")}
            className="group relative overflow-hidden rounded-full
    bg-gradient-to-r from-red-700 via-red-600 to-red-700
    px-8 py-3 font-semibold tracking-wide text-white
    border border-red-400/20 mt-4
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
        </div>
      </div>
    </section>
  );
};

export default Categories;