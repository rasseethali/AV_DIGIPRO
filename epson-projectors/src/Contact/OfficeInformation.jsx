// src/components/contact/OfficeInformation.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Navigation,
  Building2,
} from "lucide-react";

import { assetManifest } from "../assets/assetManifest.js";

const infoCards = [
  {
    id: 1,
    icon: MapPin,
    title: "Office Address",
    description:
      "123 Business Street,\nCoimbatore,\nTamil Nadu - 641001",
  },
  {
    id: 2,
    icon: Clock3,
    title: "Business Hours",
    description:
      "Monday - Saturday\n09:00 AM - 06:00 PM",
  },
  {
    id: 3,
    icon: Phone,
    title: "Call Us",
    description:
      "+91 98765 43210\n+91 98765 43211",
  },
  {
    id: 4,
    icon: Mail,
    title: "Email Support",
    description:
      "support@epsonretail.com\nsales@epsonretail.com",
  },
];

const OfficeInformation = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-red-200/40 blur-[120px]" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-red-200/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ================= LEFT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >
            {/* Floating Background Card */}

            <div className="absolute -top-6 -left-6 h-full w-full rounded-[35px] bg-gradient-to-br from-red-600 to-red-400 opacity-20"></div>

            <motion.img
              whileHover={{
                scale: 1.03,
              }}
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              src={assetManifest.about.companyName}
              alt="Office"
              className="relative z-10 h-[550px] w-full rounded-[35px] object-cover shadow-2xl"
            />

            {/* Floating Badge */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="absolute bottom-8 left-8 z-20 rounded-2xl bg-white p-5 shadow-xl"
            >
              <Building2 className="mb-2 text-red-600" size={32} />

              <h3 className="font-bold text-gray-900">
                Epson Experience Center
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Premium Product Demonstration
              </p>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Experience Epson
              <span className="block text-red-600">
                Before You Buy
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Visit our Experience Center to explore Epson projectors
              firsthand. Get personalized recommendations, live product
              demonstrations, expert consultation, installation guidance,
              and professional technical support from our specialists.
            </p>

            {/* ================= INFO CARDS ================= */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {infoCards.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-gradient-to-r from-red-600 to-red-500 p-3">
                        <Icon
                          size={22}
                          className="text-white"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {item.title}
                        </h4>

                        <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ================= BUTTON ================= */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .95,
              }}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 font-semibold text-white shadow-xl transition-all"
            >
              <Navigation size={20} />

              Get Directions

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfficeInformation;