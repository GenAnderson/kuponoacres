import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import Buttons from "../buttons/buttons.component";

import "./productCard.styles.scss";

const ProductCard = ({ product }) => {
  const { id, name, price, flavor, photo, description, nutrients } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="productCard" key={id}>
      <div className="productCard__inner">
        <div className="productCard__name">{name}</div>
        <span className="productCard__price">${price}</span>
      </div>
      <div className="productCard__flavor">
        <i>Flavor: {flavor}</i>
        <img className="prodBkg" src={photo} alt={name} />
      </div>
      <span className="productCard__description">{description}</span>
      <span className="productCar__nutrients">{nutrients}</span>

      <div className="btnDiv">
        <Buttons buttonType={"addToCart"} onClick={addProductToCart}>
          Add
        </Buttons>
      </div>
    </div>
  );
};

export default ProductCard;
