import { Fragment, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import CartDropDown from "../cartDropDown/cartDropDown.component";
import CartIcon from "../cartIcon/cartIcon.component";

import "./navigation.styles.scss";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);

  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };
  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };
  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };
  const handleMouseOver4 = () => {
    setIsHovering4(true);
  };
  const handleMouseOut = () => {
    setIsHovering1(false);
    setIsHovering2(false);
    setIsHovering3(false);
    setIsHovering4(false);
  };

  return (
    <Fragment>
      <nav>
        <div className="social-media">
          <div
            className="nav-icon__Container"
            onMouseOver={handleMouseOver1}
            onMouseOut={handleMouseOut}
          >
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
            <div className="nav-icon__Bubble">{isHovering1 && <p>FB</p>}</div>
          </div>
          <div
            className="nav-icon__Container"
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut}
          >
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
            <div className="nav-icon__Bubble">{isHovering2 && <p>IG</p>}</div>
          </div>
          <div
            className="nav-icon__Container"
            onMouseOver={handleMouseOver3}
            onMouseOut={handleMouseOut}
          >
            <Link to="/">
              <img
                src={require("../../images/icon-home.png")}
                className="nav-icons"
                alt="home-icon"
              />
            </Link>
            <div className="nav-icon__Bubble">{isHovering3 && <p>Home</p>}</div>
          </div>
        </div>

        <div className="menu">
          <div
            className="nav-icon__Container"
            onMouseOver={handleMouseOver4}
            onMouseOut={handleMouseOut}
          >
            <Link to="/shop">
              <img
                src={require("../../images/icon-shop.png")}
                className="nav-icons"
                alt="shop-icon"
              />
            </Link>
            <div className="nav-icon__Bubble">{isHovering4 && <p>Shop</p>}</div>
          </div>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
