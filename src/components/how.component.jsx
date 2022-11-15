import { Fragment } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { allProductContext } from "../context/products.context";

import Buttons from "./buttons/buttons.component";
import BundleCard from "./bundleCard/bundleCard.component";

import "./how.styles.scss";

const How = () => {
  const { allProducts } = useContext(allProductContext);

  return (
    <Fragment>
      <div className="howContainer">
        <p className="sectionHeading">How do I order?</p>
        <div className="grid2col">
          <span className="howUnit how1">
            Call or text us:
            <br /> 808-681-9754
          </span>
          <span className="howUnit how2">Email us: kuponoacres@gmail.com</span>
        </div>
        <div className="startOrder">
          <span className="or">OR</span>
          <span className="howUnit how3">Place your order online now!</span>
          <p className="miniHeader">Select from our bundle deals!</p>
        </div>
        <div className="bundlesContainer grid4col">
          {allProducts.slice(16, 20).map((product) => (
            <BundleCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/shop">
          <Buttons buttonType={"inverted"}>Shop all products</Buttons>
        </Link>
      </div>
    </Fragment>
  );
};

export default How;
