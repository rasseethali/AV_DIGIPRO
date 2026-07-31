
import React from "react";
import { Link } from "react-router-dom";
import ultraProducts from "../../data/ultradata";

const Ultra = () => {
  return (
    <section className="relative overflow-hidden bg-[#121214] py-24 px-4 sm:px-6 lg:px-8">
      {/* ================= AMBIENT BACKGROUND LAYER ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Base mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(193,18,31,0.09),transparent_60%),radial-gradient(ellipse_70%_60%_at_85%_15%,rgba(212,175,55,0.07),transparent_55%),radial-gradient(ellipse_80%_70%_at_50%_100%,rgba(193,18,31,0.06),transparent_60%)] animate-[meshShift_18s_ease-in-out_infinite]" />

        {/* Soft projector beam */}
        <div className="absolute left-1/2 top-0 h-[900px] w-[520px] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(255,255,255,0.03)_15deg,transparent_35deg)] opacity-60" />

        {/* Red ambient glow */}
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-red-700/15 blur-[150px] animate-[floatSlow_10s_ease-in-out_infinite]" />

        {/* Gold ambient glow */}
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[150px] animate-[floatSlow_12s_ease-in-out_infinite_reverse]" />

        {/* Floating blurred circles */}
        <div className="absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-white/[0.03] blur-3xl animate-[floatSlow_9s_ease-in-out_infinite]" />
        <div className="absolute left-1/3 bottom-10 h-56 w-56 rounded-full bg-red-500/[0.06] blur-3xl animate-[floatSlow_14s_ease-in-out_infinite_reverse]" />

        {/* Glass reflection sheen */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Fine grain overlay for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent_30%,transparent_70%,rgba(0,0,0,0.25))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= SECTION HEADER ================= */}
        <div className="mb-16 text-center animate-[fadeSlideUp_0.8s_ease-out]">
          <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-red-500" />
            <span className="bg-gradient-to-r from-red-500 via-amber-300 to-red-500 bg-clip-text text-transparent">
              AV DIGIPRO PROJECTORS
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-red-500" />
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100">
            Premium{" "}
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-amber-200 bg-clip-text text-transparent">
              Collection
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-400/90">
            Discover the perfect projector for your cinematic experience.
          </p>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ultraProducts.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 90}ms` }}
              className="group relative animate-[fadeSlideUp_0.7s_ease-out_both] rounded-[30px] p-[1px] transition-all duration-500 hover:-translate-y-3"
            >
              {/* Gradient border glow wrapper */}
              <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent opacity-100 transition-opacity duration-500 " />

              {/* Card body */}
              <div className="relative overflow-hidden rounded-[30px] border border-white/[0.07] bg-white/[0.035] backdrop-blur-xl shadow-[0_8px_30px_-14px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover:shadow-[0_16px_45px_-14px_rgba(193,18,31,0.3)]">

                {/* Shine sweep on hover */}
                <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[30px]">
                  <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ease-out group-hover:left-[130%]" />
                </div>

                {/* Rating badge */}
                <div className="absolute left-4 top-4 z-30">
                  <span className="flex items-center gap-1 rounded-full border border-amber-300/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-amber-200/90 backdrop-blur-md shadow-inner">
                    ★ {product.rating || "4.8"}
                  </span>
                </div>

                {/* Image stage */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.06] via-transparent to-transparent px-8 pt-10">
                  {/* Radial spotlight behind product */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(193,18,31,0.10),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="relative z-10 h-full w-full object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-out animate-[floatSlow_6s_ease-in-out_infinite] group-hover:scale-110 group-hover:-rotate-1"
                  />

                  {/* Reflection */}
                  <div className="absolute bottom-0 left-1/2 h-10 w-2/3 -translate-x-1/2 scale-y-[-1] bg-gradient-to-b from-white/10 to-transparent opacity-20 blur-sm" />
                </div>

                {/* Divider */}
                <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-colors duration-300 group-hover:via-red-500/35" />

                {/* Content */}
                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300/70">
                    {product.category}
                  </p>

                  <h3 className="mt-2 min-h-[56px] text-xl font-bold leading-snug text-slate-100 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-300 group-hover:to-amber-200">
                    {product.name} -<br />{product.description}
                  </h3>

                  <div className="mt-4 space-y-1">
                    <p className="text-base font-semibold text-slate-200">
                      {product.resolution}
                    </p>
                    <p className="text-sm text-slate-400">
                      {product.brightness}
                    </p>
                  </div>

                  <Link
                    to={`/products/ultra-short-throw/${product.slug}`}
                    className="group/btn relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-700/90 via-red-600/90 to-red-700/90 px-4 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_-8px_rgba(193,18,31,0.45)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_24px_-8px_rgba(193,18,31,0.55)] active:scale-95"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />
                    <span className="relative">Learn More</span>

                    <svg
                      className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scoped keyframes powering the premium motion above */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes meshShift {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(1%, -1.5%, 0) scale(1.05); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Ultra;
