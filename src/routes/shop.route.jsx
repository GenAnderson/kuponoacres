import { useContext } from "react";
import { allProductContext } from "../context/products.context";

import ProductCard from "../components/shopForm/productCard.component";
import BundleCard from "../components/bundleCard/bundleCard.component";

const Shop = () => {
  const { allProducts } = useContext(allProductContext);

  return (
    <div className="shopContainer">
      <p className="mediumHeader">Bundles</p>
      <p className="shopNotes">Note: Free delivery with purchase of a bundle</p>
      <div className="bundlesContainer grid4col">
        {allProducts.slice(16, 20).map((product) => (
          <BundleCard key={product.id} product={product} />
        ))}
      </div>
      <div className="alaCarte">
        <p className="mediumHeader">{allProducts[1].category}</p>
        <p className="shopNotes">
          Note: $10 delivery fee for a la carte purchases
        </p>
        <div className="allProductsContainer grid5col2row">
          {allProducts.slice(0, 11).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className="mediumHeader">{allProducts[12].category}</p>
        <p className="shopNotes">
          Note: $10 delivery fee for a la carte purchases
        </p>
        <div className="allProductsContainer grid5col2row">
          {allProducts.slice(11, 16).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
