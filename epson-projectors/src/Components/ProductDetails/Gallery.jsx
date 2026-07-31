import React from "react";

const Gallery = ({ product }) => {
  if (!product?.gallery) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className=" mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Product Gallery
        </h2>
        <p className="mt-3 text-gray-600">
          View the {product.name} from different angles.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.gallery.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="w-full h-64 object-contain bg-white p-4 hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;