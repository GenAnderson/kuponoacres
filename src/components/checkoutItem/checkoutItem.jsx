import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkoutItem.styles.scss";

const CheckOutItem = function ({ cartItem }) {
  const { id, name, photo, price, quantity, items } = cartItem;

  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkoutItemsContainer grid4col" key={id}>
      <div className="checkout__name">
        <img className="checkout__photo" src={photo} alt={`${name}`} />
        <p>{name}</p>
        <p className="checkout__bundleItems" key={id}>
          {items.join(", ")}
        </p>
      </div>
      <div className="checkout__quantity">
        <div className="arrow" onClick={() => removeItemToCart(cartItem)}>
          −
        </div>
        <span>{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          +
        </div>
      </div>
      <span className="checkout__price">${price}</span>
      <div
        className="checkout__remove"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
