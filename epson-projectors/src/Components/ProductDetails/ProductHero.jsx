import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const ProductHero = ({ product }) => {
    const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState(
        product.gallery?.[0] || product.image
    );

    return (
        <section className="max-w-7xl mx-auto px-6 py-3 mt-16">

            <div className="mb-6  flex justify-end">
                <button
                    onClick={() => navigate(-1)}
                    className="group inline-flex items-center gap-3 rounded-full border border-red-200 bg-white px-6 py-3 text-red-600 shadow-md transition-all duration-300 hover:-translate-x-1 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-xl"
                >
                    <ArrowLeft
                        size={20}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />

                    <span className="font-semibold">
                        Back
                    </span>
                </button>
            </div>
            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
                {product.name} - <span className="text-gray-900 "> {product.description}</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                {/* Left */}
                <div>

                    {/* Main Image */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                        <img
                            src={selectedImage}
                            alt={product.name}
                            className="w-full h-[500px] object-contain hover:scale-105 transition-all duration-500 cursor-zoom-in"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="flex justify-center gap-5 mt-8 flex-wrap">
                        {product.gallery.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setSelectedImage(image)}
                                className={`w-24 h-24 object-contain bg-white rounded-xl border-2 p-2 cursor-pointer shadow-sm transition-all duration-300 hover:shadow-lg ${selectedImage === image
                                    ? "border-red-600 scale-105"
                                    : "border-gray-200 hover:border-red-400"
                                    }`}
                            />
                        ))}
                    </div>

                </div>

                {/* Right */}
                <div className="space-y-8">

                    {/* Heading */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            {product.description1}
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-8">
                            {product.overview}
                        </p>
                    </div>

                    {/* Features */}
                    <div>
                        <ul className="space-y-4">
                            {product.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3 text-gray-700 text-lg"
                                >
                                    <span className="text-red-600 text-xl">✔</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => {
                                document
                                    .getElementById("specifications")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                             
                            className=" mt-4 flex items-center hover:text-blue-400  cursor-pointer">
                            See More 
                            <FaChevronRight className="text-sm" />
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">

                        <button
                            onClick={() => navigate("/enquiry")}
                            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                            Request Quote
                        </button>

                        <a
                            href={product.brochure}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-gray-400 hover:border-red-600 hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition"
                        >
                            Download Brochure
                        </a>


                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProductHero;

