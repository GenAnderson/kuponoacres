import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./cartIcon.styles.scss";

const CartIcon = function () {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cartIconContainer" onClick={toggleIsCartOpen}>
      <img
        src={require("../../images/icon-cart.png")}
        className="nav-icons"
        alt="cart icon"
      />
      <span className="itemCount">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
