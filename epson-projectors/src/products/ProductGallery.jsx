// import React from "react";
// import { Link } from "react-router-dom";
// import products from "../data/product";

// const ProductGallery = () => {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block text-6xl font-bold tracking-widest text-blue-600 uppercase mb-2">
//             AV DIGIPRO Projectors
//           </span>
//           <h2 className="text-3xl font-extrabold py-6 text-black sm:text-4xl">
//             Premium Collection
//           </h2>
//           <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-500">
//             Discover the perfect projector for your cinematic experience.
//           </p>
//         </div>

//         {/* Responsive Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <Link
//               key={product.id}
//               to={`/products/${product.id}`}
//               className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden"
//             >
//               {/* Rating badge - floats over the image */}
//               <span className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-white/90 backdrop-blur text-amber-600 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
//                 ★ {product.rating || "4.8"}
//               </span>

//               {/* Product Image */}
//               <div className="aspect-video w-full flex items-center justify-center p-6 overflow-hidden">
//                 <img
//                   className="object-contain h-full w-full group-hover:scale-110 transition-transform duration-500 ease-out"
//                   src={product.image}
//                   alt={product.name}
//                   loading="lazy"
//                 />
//               </div>

//               {/* Divider line, appears on hover to show interactivity */}
//               <div className="h-px w-full bg-slate-100 group-hover:bg-blue-100 transition-colors duration-300" />

//               {/* Product Info */}
//               <div className="p-5 flex-1 flex flex-col">
//                 <h3 className="text-lg font-bold text-slate-800 leading-snug">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm text-slate-500 mb-4">{product.category}</p>

//                 {/* resolution */}
//                 <p className="text-lg font-semibold text-slate-700 mb-2">{product.resolution}</p>
//                 {/* brightness */}
//                 <p className="text-lg font-semibold text-slate-700 mb-2">{product.brightness}</p>
//                 {/* Price */}
//                 <div className="mt-auto mb-4">
//                   <span className="text-xl font-black text-slate-900">
//                     {product.price || "View Details"}
//                   </span>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="grid grid-cols-2 gap-2">
//                   <span className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-all duration-200 shadow-sm shadow-blue-100 text-center">
//                     Buy Now
//                   </span>
//                   <span className="w-full bg-slate-50 hover:bg-slate-100 active:scale-95 text-slate-700 text-sm font-medium py-2.5 px-4 rounded-xl border border-slate-200 transition-all duration-200 text-center">
//                     Learn More
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductGallery;
