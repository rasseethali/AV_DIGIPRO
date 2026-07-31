// src/components/contact/ContactCards.jsx

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const contactCards = [
  {
    id: 1,
    icon: Phone,
    title: "Call Our Experts",
    description: "+91 98765 43210\nMon - Sat\n9:00 AM - 6:00 PM",
    action: "call",
    linkType: "call",
    color: "from-red-600 to-red-500",
  },
  {
    id: 2,
    icon: Mail,
    title: "Email Us",
    description:
    "info@avdigipro.com\nSend us your enquiry and we'll respond within 24 hours.",
    action: "email",
    linkType: "email",
    color: "from-red-600 to-red-500",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Visit Us",
    description: "R-10, Sangath Alacrity Flats, 2nd Street, MGR Nagar, Velachery, Chennai - 600042, Tamil Nadu, India",
    action: "location",
    linkType: "location",
    color: "from-red-600 to-red-500",
  },
  

];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
    },
  }),
};

const ContactCards = () => {
  const navigate = useNavigate();
  const handleCardAction = (type) => {
  switch (type) {
    case "call":
      window.location.href = "tel:+919876543210";
      break;

    case "email":
      window.location.href = "mailto:info@avdigipro.com";
      break;

    case "location":
      window.open(
        "https://maps.google.com/?q=R-10,Sangath+Alacrity+Flats,2nd+Street,MGR+Nagar,Velachery,Chennai+600042",
        "_blank"
      );
      break;

    

    default:
      break;
  }
};
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-red-200/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-200/40 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-red-600">
            We're Always Here to Help
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-8">
            Whether you have a product inquiry, technical question,
            or business requirement, our Epson experts are ready
            to assist you.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                onClick={() => handleCardAction(card.linkType)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl"
              >
                {/* Gradient Top Border */}

                <div
                  className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${card.color}`}
                />

                {/* Glow */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 to-cyan-50" />

                <div className="relative">
                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      rotate: 12,
                      scale: 1.12,
                    }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="text-white" size={30} />
                  </motion.div>

                  {/* Title */}

                  <h3 className="mt-7 text-2xl font-bold text-gray-900">
                    {card.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 whitespace-pre-line text-gray-600 leading-8">
                    {card.description}
                  </p>

                  {/* Button */}
                  <button
                    type="button"
                    className="mt-8 flex items-center gap-2 font-semibold text-red-600 transition group-hover:gap-4"
                  >
                    {card.action}

                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </button>

                  
              </div>

                {/* Decorative Circle */ }

            <div className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-blue-100 opacity-30 transition-all duration-500 group-hover:scale-150" />
              </motion.div>
        );
          })}
      </div>
    </div>
    </section >
  );
};

export default ContactCards;