import React from "react";

const Specifications = ({ product }) => {
  if (!product?.Specifications) {
    return null;
  }

  return (
    <section
      id="specifications"
      className="max-w-7xl mx-auto px-6 "
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Specifications
      </h2>

      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <table className="w-full">
          <tbody>
            {Object.entries(product.Specifications).map(([key, value]) => (
              <tr key={key} className="border-b last:border-b-0">
                <td className="w-1/3 bg-gray-100 px-6 py-4 font-semibold">
                  {key}
                </td>
                <td className="px-6 py-4">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Specifications;