import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import CartDropDown from "../cartDropDown/cartDropDown.component";
import CartIcon from "../cartIcon/cartIcon.component";

import "./navigation.styles.scss";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <nav>
        <div className="social-media">
          <a
            href="https://www.facebook.com/kupono.acres"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../images/icon-facebook.png")}
              className="nav-icons"
              alt="facebook-icon"
            />
          </a>

          <a
            href="https://www.instagram.com/kuponoacres/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../images/icon-instagram.png")}
              className="nav-icons"
              alt="instagram-icon"
            />
          </a>
          <Link to="/">
            <img
              src={require("../../images/icon-home.png")}
              className="nav-icons"
              alt="home-icon"
            />
          </Link>
        </div>

        <div className="menu">
          <Link to="/shop">
            <img
              src={require("../../images/icon-shop.png")}
              className="nav-icons"
              alt="shop-icon"
            />
          </Link>

          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
