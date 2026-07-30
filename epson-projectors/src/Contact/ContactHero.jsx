// src/components/contact/ContactHero.jsx

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { assetManifest } from "../assets/assetManifest.js";


const ContactHero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-[60vh] sm:h-[70vh] lg:h-[100vh] overflow-hidden">
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        src={assetManifest.about.mission}
        alt="Contact Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />


      {/* Blue Gradient Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px]" />

      {/* Floating Shapes */}



      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          {/* Heading */}
          <h1 className="mt-10 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Let's Connect
            <span className="block text-red-600">
              With Our Team
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed">
            Whether you're looking for the perfect Epson projector,
            need technical assistance, or have a business inquiry,
            our experienced team is here to help you every step
            of the way.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px red",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/products")}
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-white font-semibold shadow-xl transition-all"
            >
             
              <ArrowLeft
                size={20}
                className="transition-transform group-hover:translate-x-1"
              /> Products
            </motion.button>

            {/* Enquiry */}
            <motion.button
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
            </motion.button>
          </div>
        </motion.div>
      </div>


    </section>
  );
};

export default ContactHero;