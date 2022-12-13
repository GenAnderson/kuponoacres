import { useContext, useEffect } from "react";
import { CartContext } from "../context/cart.context";

import ContactInfo from "../components/shopForm/contactInfo.component";

import "./allRoutes.styles.scss";
import CheckOutItem from "../components/checkoutItem/checkoutItem";

const FinalizeOrder = function () {
  const { cartItems, cartTotal } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <span>Qty</span>
        </div>
        <div className="order__subHeader">
          <span>$ea.</span>
        </div>
        <div className="order__subHeader">
          <span>&#10005;</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="totalContainer">
        <p className="total">Total: ${cartTotal.toFixed(2)}</p>
        <p className="tax">(Tax included)</p>
      </div>
    </div>
  );
};

export default FinalizeOrder;
