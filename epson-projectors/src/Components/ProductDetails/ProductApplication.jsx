import React from "react";

const ProductApplications = ({ product }) => {
  return (
    <section className="bg-white py-24 hidden lg:block ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Applications */}
        {product.applications?.map((item, index) => (
          <div
            key={index}
            className=" gap-16 items-center mb-24"
          >
            {/* Left */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {item.title}
              </h3>

              <div className="w-20 h-1 bg-red-600 rounded-full my-6"></div>

              <p className="text-lg text-gray-600 leading-9">
                {item.description}
              </p>
            </div>

            {/* Right */}
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[85vh] object-center"
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ProductApplications;