import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Enquiry from "../pages/Enquiry";

import HomeCinemaProjectors from "../pages/HomeCinemaProjectors";
import PortableProjectors from "../pages/PortableProjectors";
import UltraShortThrowProjectors from "../pages/UltraShortThrowProjectors";

import PortableProductDetails from "../pages/ProductDetails/Portable";
import HomeCinemaProductDetails from "../pages/ProductDetails/Cinema";
import UltraShortThrowProductDetails from "../pages/ProductDetails/Ultra";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/products" element={<Products />} />

      {/* Portable */}
      <Route
        path="/products/portable"
        element={<PortableProjectors />}
      />

      <Route
        path="/products/portable/:slug"
        element={<PortableProductDetails />}
      />
      {/* Home */}
      <Route
        path="/products/home-cinema"
        element={<HomeCinemaProjectors />}
      />

      <Route
        path="/products/home-cinema/:slug"
        element={<HomeCinemaProductDetails />}
      />
      {/* ultra */}
      <Route
        path="/products/ultra-short-throw"
        element={<UltraShortThrowProjectors />}
      />

      <Route
        path="/products/ultra-short-throw/:slug"
        element={<UltraShortThrowProductDetails />}
      />

    </Routes>
  );
};

export default AppRoutes;