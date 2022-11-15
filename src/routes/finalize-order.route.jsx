import { Fragment, useContext } from "react";
import { CartContext } from "../context/cart.context";

import ContactInfo from "../components/shopForm/contactInfo.component";

import "./allRoutes.styles.scss";
import CheckOutItem from "../components/checkoutItem/checkoutItem";

const FinalizeOrder = function () {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="finalizeOrderContainer">
      <div>
        <ContactInfo />
      </div>

      <div className="subHeaderContainer grid4col">
        <div className="order__subHeader">
          <span>Product</span>
        </div>
        <div className="order__subHeader">
          <span>Quantity</span>
        </div>
        <div className="order__subHeader">
          <span>Price</span>
        </div>
        <div className="order__subHeader">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">Total:??</div>
    </div>
  );
};

export default FinalizeOrder;
