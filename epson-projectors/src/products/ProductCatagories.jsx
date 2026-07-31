import React from "react";

import {assetManifest} from "../assets/assetManifest.js"
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ProductCatagories = () => {
 const products = [
  {
    title: "Portable Projectors",
    image: assetManifest.backgrounds.portable,
    description: "Click Me",
    route: "/products/portable",
  },
  {
    title: "Home Cinema Projectors",
    image: assetManifest.backgrounds.home,
    description: "Click Me",
    route: "/products/home-cinema",
  },
  {
    title: "Ultra Short Throw",
    image: assetManifest.backgrounds.ultra,
    description: "Click Me",
    route: "/products/ultra-short-throw",
  },
];

  const navigate = useNavigate();
  
  return (
    <section className="bg-white border border-gray-300 p-6 m-6">
      <div className="flex flex-wrap justify-between gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-[420px] h-[550px] object-cover rounded-xl"
            />

            <button  onClick={() => navigate(product.route)}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white text-white px-5 py-3 rounded-lg hover:bg-purple-600 hover:border-purple-600 transition-all duration-300">
              {product.description}
              
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCatagories;