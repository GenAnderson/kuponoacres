import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkoutItem.styles.scss";

const CheckOutItem = function ({ cartItem }) {
  const { id, name, photo, price, quantity, items, countSelection } = cartItem;

  const { addItemToCart, removeItemToCart, clearItemFromCart, slicePerCount } =
    useContext(CartContext);

  const pushedBundleItems = [];

  if (countSelection > 1) {
    pushedBundleItems.push(
      slicePerCount(items, countSelection).map((items) => (
        <p key={items}> ⁕{items} </p>
      ))
    );
  }

  return (
    <div className="checkoutItemsContainer grid4col" key={id}>
      <div className="checkout__nameContainer">
        <img className="checkout__photo" src={photo} alt={`${name}`} />
        <p className="checkout__itemName">{name}</p>

        <div className="checkout__bundleItems">{pushedBundleItems}</div>
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
      <span className="checkout__price">${price.toFixed(2)}</span>
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
