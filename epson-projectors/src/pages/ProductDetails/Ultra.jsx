import { useParams } from "react-router-dom";
import ultraProducts from "../../data/ultradata";

import ProductHero from "../../Components/ProductDetails/ProductHero";
import ProductSpecifications from "../../Components/ProductDetails/Specifications";
import ProductFeatures from "../../Components/ProductDetails/ProductFeatures";
import ProductGallery from "../../Components/ProductDetails/Gallery";
import ProductApplication from "../../Components/ProductDetails/ProductApplication";

const Ultra = () => {
  const { slug } = useParams();

  const product = ultraProducts.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <ProductHero product={product} />

      <ProductApplication product={product} />

      <ProductSpecifications product={product} />

      <ProductFeatures product={product} />

      <ProductGallery product={product} />
    </>
  );
};

export default Ultra;