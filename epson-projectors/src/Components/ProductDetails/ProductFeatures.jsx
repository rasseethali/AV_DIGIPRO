import React from "react";
import { CheckCircle } from "lucide-react";

const ProductFeatures = ({ product }) => {
  if (!product?.features) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="mb-10 ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Key Features
        </h2>
        <p className="mt-3 text-gray-600">
          Explore the powerful features of the {product.name}.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <CheckCircle className="w-7 h-7 text-red-600 flex-shrink-0" />

            <p className="text-gray-700 font-medium leading-7">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeatures;