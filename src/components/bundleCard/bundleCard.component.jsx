import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";

import Buttons from "../buttons/buttons.component";

import DropDownList from "../shopForm/dropDownList.component.jsx";
import "./bundleCard.styles.scss";

const BundleCard = ({ product }) => {
  const { id, name, price, description, photo, countSelection } = product;
  const { addItemToCart } = useContext(CartContext);
  const [bundleItems, setBundleItems] = useState([]);

  const addProductToCart = () => {
    addItemToCart(product, bundleItems);
  };

  function handleClick(event) {
    event.currentTarget.parentElement.classList.add("rotateFront");
    event.currentTarget.parentElement.nextSibling.classList.add("rotateBack");
  }

  function goBack(event) {
    event.currentTarget.parentElement.parentElement.classList.remove(
      "rotateBack"
    );
    event.currentTarget.parentElement.parentElement.previousSibling.classList.remove(
      "rotateFront"
    );
  }

  const dropDownHandler = (event) => {
    const key = event.currentTarget.id;
    const itemID = event.currentTarget.value;

    setBundleItems((prevState) => {
      let newState = prevState.filter((i) => i.id !== key);
      return [...newState, { id: key, itemID: itemID }];
    });
  };

  return (
    <div className="mainBundles" key={id}>
      <div className="mainBundles bundle__front bundle">
        <p className="bundle__name">{name}</p>
        <p className="bundle__cost">${price}</p>
        <p className="bundle__text">{description}</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdHoNaDkS-XrziBtLJIxG3lE-H127HbVJniS1AANmzkLFjkUQ/viewform?usp=sf_link"
          target="_blank"
          rel="noreferrer"
          className="btn-link"
        ></a>
        <img src={photo} alt={name} />
        <Buttons buttonType="smaller" onClick={handleClick}>
          Select
        </Buttons>
      </div>
      <div className="mainBundles bundle__back">
        <div className="gridSpecial">
          <Buttons buttonType="smallBack" onClick={goBack}>
            ←
          </Buttons>
          <p className="dropDownListText">Select {countSelection}</p>
        </div>
        <div className="dropDownListBox">
          {+countSelection > 0 ? (
            <DropDownList id="1" dropDownHandler={dropDownHandler} />
          ) : (
            ""
          )}
          {+countSelection > 1 ? (
            <DropDownList id="2" dropDownHandler={dropDownHandler} />
          ) : (
            ""
          )}
          {+countSelection > 2 ? (
            <DropDownList id="3" dropDownHandler={dropDownHandler} />
          ) : (
            ""
          )}
          {+countSelection > 3 ? (
            <DropDownList id="4" dropDownHandler={dropDownHandler} />
          ) : (
            ""
          )}
          {+countSelection > 4 ? (
            <DropDownList id="5" dropDownHandler={dropDownHandler} />
          ) : (
            ""
          )}
          {+countSelection > 5 ? (
            <DropDownList id="6" dropDownHandler={dropDownHandler} />
          ) : (
            ""
          )}
          {+countSelection > 6 ? (
            <DropDownList id="7" dropDownHandler={dropDownHandler} />
          ) : (
            ""
          )}
        </div>
        <Buttons buttonType="addToCart" onClick={addProductToCart}>
          ADD
        </Buttons>
      </div>
    </div>
  );
};

export default BundleCard;
