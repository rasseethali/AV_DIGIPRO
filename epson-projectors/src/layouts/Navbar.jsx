
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

import { FaSearch, FaChevronDown } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { assetManifest } from "../assets/assetManifest.js";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isProductsActive = location.pathname.startsWith("/products");
  const [productsOpen, setProductsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  const navLinkClass = ({ isActive }) =>
    `relative cursor-pointer text-xl text-white transition duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:bg-red-600 after:transition-all after:duration-500
    ${isActive
      ? "after:w-full text-white"
      : "after:w-0 hover:after:w-full text-white hover:text-white"
    }`;

  return (
  <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-black/20 backdrop-blur-md shadow-xl"
      : "bg-transparent"
  }`}
>
      <nav className="max-w-9xl mx-auto flex items-center justify-between pl-2 pr-6 lg:pl-4 lg:pr-10">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
      <Link to="/">
          <img
            src={assetManifest.logos.avd}
            alt="AV DIGIPRO"
            className="w-28 h-24  object-contain"
          />
        </Link>

        
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>

          <li className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className={`relative flex items-center   cursor-pointer text-xl transition duration-300
             after:absolute after:left-0 after:-bottom-1 after:h-[2px]
             after:bg-red after:transition-all after:duration-500
    ${isProductsActive
                  ? "after:w-full text-white"
                  : "after:w-0 text-white hover:text-white hover:after:w-full"
                }`}
            >
              Products

              <FaChevronDown
                className={`text-sm transition-transform duration-300 ${productsOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {productsOpen && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-72 rounded-2xl bg-white shadow-2xl">


                <button
                  onClick={() => {
                    navigate("/products");
                    setProductsOpen(false);
                  }}
                  className="w-full text-left px-6 py-4 hover:bg-blue-50"
                >
                  <h4 className="font-bold"> All Products</h4>
                  <p className="text-sm text-gray-500">
                    Browse our complete projector collection
                  </p>
                </button>
                <button
                  onClick={() => {
                    navigate("/products/home-cinema");
                    setProductsOpen(false);
                  }}
                  className="w-full text-left px-6 py-4 hover:bg-blue-50"
                >
                  <h4 className="font-bold"> Home Cinema Projectors</h4>
                  <p className="text-sm text-gray-500">
                    Premium home entertainment
                  </p>
                </button>

                <button
                  onClick={() => {
                    navigate("/products/portable");
                    setProductsOpen(false);
                  }}
                  className="w-full text-left px-6 py-4 hover:bg-blue-50"
                >
                  <h4 className="font-bold"> Portable Projectors</h4>
                  <p className="text-sm text-gray-500">
                    Compact & business ready
                  </p>
                </button>

                <button
                  onClick={() => {
                    navigate("/products/ultra-short-throw");
                    setProductsOpen(false);
                  }}
                  className="w-full text-left px-6 py-4 hover:bg-blue-50"
                >
                  <h4 className="font-bold"> Ultra Short Throw</h4>
                  <p className="text-sm text-gray-500">
                    Big screen in small spaces
                  </p>
                </button>

              </div>
            )}
          </li>
          


          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>




        {/* Mobile Button */}
        <button
          className="md:hidden text-4xl text-red-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden bg-white transition-all duration-500 ${menuOpen ? "max-h-80 py-5" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-6">
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" onClick={() => setMenuOpen(false)} className={navLinkClass}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;