import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { Link } from "react-router-dom";

import CartItem from "../cartItem/cartItem.component";

import Buttons from "../buttons/buttons.component";
import "./cartDropDown.styles.scss";

const CartDropDown = function () {
  const { cartItems } = useContext(CartContext);

  // console.log(cartItems);

  return (
    <div className="cartDropDownContainer">
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/finalize-order">
        <Buttons buttonType={"sendOrder"}>Finalize Order</Buttons>
      </Link>
    </div>
  );
};

export default CartDropDown;
