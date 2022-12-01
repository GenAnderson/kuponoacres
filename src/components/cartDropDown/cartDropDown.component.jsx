import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { Link } from "react-router-dom";

import CartItem from "../cartItem/cartItem.component";

import Buttons from "../buttons/buttons.component";
import "./cartDropDown.styles.scss";

const CartDropDown = function () {
  const { cartItems } = useContext(CartContext);
  const { setIsCartOpen } = useContext(CartContext);

  const closeCartDropDown = () => setIsCartOpen(false);

  return (
    <div className="cartDropDownContainer">
      <div>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <p className="emptyMessage">Your cart is empty</p>
        )}
      </div>
      <Link to="/finalize-order">
        <Buttons buttonType={"sendOrder"} onClick={closeCartDropDown}>
          Finalize Order
        </Buttons>
      </Link>
    </div>
  );
};

export default CartDropDown;
