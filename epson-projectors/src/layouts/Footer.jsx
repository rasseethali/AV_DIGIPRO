import React from "react";
import { assetManifest } from "../assets/assetManifest.js";
import {
  Globe,
  MessageCircle,
  Send,
  Play,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">AV DIGIPRO</h2>

            <p className="mt-5 leading-7">
              Discover Epson's premium projector collection engineered for
              home cinema, business, gaming and portable entertainment with
              exceptional image quality and reliability.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 uppercase tracking-wide">
              Products
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="/products"
                  className="hover:text-white transition duration-300"
                >
                  Portable Projectors
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="hover:text-white transition duration-300"
                >
                  Home Cinema
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="hover:text-white transition duration-300"
                >
                  Ultra Short Throw
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="hover:text-white transition duration-300"
                >
                  Business Projectors
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 uppercase tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li>
                <a href="/" className="hover:text-white transition duration-300">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="hover:text-white transition duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="hover:text-white transition duration-300"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">

            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-red-600 mt-1" />
              <p>
                R-10, Sangath Alacrity Flats, 2nd Street, MGR Nagar,
                Velachery, Chennai - 600042, Tamil Nadu, India
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-red-600" />
              <a
                href="tel:+919566021144"
                className="hover:text-red-500 transition"
              >
                +91 95660 21144
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-red-600" />
              <a
                href="mailto:support@epsonprojectors.com"
                className="hover:text-red-500 transition"
              >
                digiproav@gmail.com
              </a>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-sm text-center md:text-left">
            © 2026 AV DIGIPRO. All Rights Reserved.

          </p>

          <a
            href="https://arkcodux.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-6 py-3  transition"
          >
            Designed by ARK CODUX DIGITAL
            <img src={assetManifest.logos.acd} alt="ARK CODUX DIGITAL" className="w-12 ml-2" />
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            {/* Website */}
            <a
              href="https://avdigi.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-red-600 hover:border-black hover:text-white transition-all duration-300"
            >
              <Globe size={18} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919566021144"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-600 hover:border-black hover:text-white transition-all duration-300"
            >
              <MessageCircle size={18} />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-sky-500 hover:border-black hover:text-white transition-all duration-300"
            >
              <Send size={18} />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-red-600 hover:border-black hover:text-white transition-all duration-300"
            >
              <Play size={18} />
            </a>

          </div>

        </div>


      </div>
    </footer>
  );
};

export default Footer;