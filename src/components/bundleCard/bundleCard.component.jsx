import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Buttons from "../buttons/buttons.component";

import DropDownList from "../shopForm/dropDownList.component.jsx";
import "./bundleCard.styles.scss";

const BundleCard = ({ product }) => {
  const { id, name, price, description, photo, countSelection } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  function handleClick(event) {
    event.currentTarget.parentElement.classList.add("rotateFront");
    event.currentTarget.parentElement.nextSibling.classList.add("rotateBack");
  }

  function goBack(event) {
    event.currentTarget.parentElement.classList.remove("rotateBack");
    event.currentTarget.parentElement.previousSibling.classList.remove(
      "rotateFront"
    );
  }

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
          Order
        </Buttons>
      </div>
      <div className="mainBundles bundle__back">
        <Buttons buttonType="smallBack" onClick={goBack}>
          ←
        </Buttons>
        <p className="dropDownListText">Select {countSelection}</p>
        <div className="dropDownListBox">
          {+countSelection > 0 ? <DropDownList /> : ""}
          {+countSelection > 1 ? <DropDownList /> : ""}
          {+countSelection > 2 ? <DropDownList /> : ""}
          {+countSelection > 3 ? <DropDownList /> : ""}
          {+countSelection > 4 ? <DropDownList /> : ""}
          {+countSelection > 5 ? <DropDownList /> : ""}
          {+countSelection > 6 ? <DropDownList /> : ""}
        </div>
        <Buttons buttonType="addToCart" onClick={addProductToCart}>
          ADD
        </Buttons>
      </div>
    </div>
  );
};

export default BundleCard;
