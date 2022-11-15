import { useContext } from "react";
import { CartContext } from "../context/cart.context";

import ContactInfo from "../components/shopForm/contactInfo.component";

import "./allRoutes.styles.scss";

const FinalizeOrder = function () {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div className="finalizeOrderContainer">
      <div>
        <ContactInfo />
      </div>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span>decrement</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FinalizeOrder;
