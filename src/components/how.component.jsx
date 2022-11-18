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
      <div className="background-box">
        <img
          src={require("../images/products-bkg.jpg")}
          className="products-photo-bkg"
          alt="microgreens"
        />
      </div>
      <div className="howContainer">
        <p className="sectionHeading">How do I order?</p>
        <div className="howTextBox">
          <p className="how__options">A. Call or text us: 808-681-9754</p>
          <p className="how__options">B. Email us: kuponoacres@gmail.com</p>
          <p className="how__options">C. Place your order online now!</p>
        </div>
        <div className="makeYourSelection">
          <Link to="/shop">
            <Buttons buttonType={"inverted"}>Shop all products</Buttons>
          </Link>
          <p className="or">OR</p>
          <p>Select from our bundle deals below!</p>
        </div>

        <div className="bundle__info">
          <p className="bundle__deal">
            <em>
              BONUS: Receive $5 off your bundle of choice with referral and
              bundle purchase (no limit)
            </em>
          </p>
          <p className="bundle__freeDelivery">
            All products will be grown to order and delivered for{" "}
            <strong>FREE</strong> with purchase of a bundle.
          </p>
          <br />
          <p>
            *Omakase Option: Need help deciding? Select a bundle, let us know
            your taste preferences, and we will put together a custom bundle
            suited just for you.
          </p>
        </div>
        <div className="bundlesContainer grid4col">
          {allProducts.slice(16, 20).map((product) => (
            <BundleCard key={product.id} product={product} />
          ))}
        </div>
        <div className="notesContainer">
          <p className="notes__grown">All products are grown to order</p>
          <p className="notes__containers">
            *containers are plant-based, biodegradable, and compostable
          </p>
          <p className="notes__payment">
            Payment can be made by cash, check, or square, upon delivery.
          </p>
        </div>
        <div className="delivery__info grid2col">
          <div className="delivery__centralOahu">
            <p className="delivery__location">Central Oahu Delivery Schedule</p>
            <p>
              Place your order by the 2nd and/or 4th Saturday of the month for
              Saturday (between 8am-12pm) delivery two weeks later.
            </p>
          </div>
          <div className="delivery__eastOahu">
            <p className="delivery__location">East Oahu Delivery Schedule</p>
            <p>
              Place your order by the 1st and/or 3rd Saturday of the month for
              Saturday (between 8am-12pm) delivery two weeks later.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default How;
