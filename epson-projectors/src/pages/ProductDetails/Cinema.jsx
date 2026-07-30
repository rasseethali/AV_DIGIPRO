import { useParams } from "react-router-dom";
import homeCinemaProducts from "../../data/Cinemadata";

import ProductHero from "../../Components/ProductDetails/ProductHero";
import ProductSpecifications from "../../Components/ProductDetails/Specifications";
import ProductFeatures from "../../Components/ProductDetails/ProductFeatures";
import ProductGallery from "../../Components/ProductDetails/Gallery";
import ProductApplication from "../../Components/ProductDetails/ProductApplication";

const HomeCinemaProductDetails = () => {
  const { slug } = useParams();

  const product = homeCinemaProducts.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
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

export default HomeCinemaProductDetails;