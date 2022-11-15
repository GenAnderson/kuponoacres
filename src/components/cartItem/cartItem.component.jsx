import "./cartItem.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, price, photo, quantity } = cartItem;

  return (
    <div className="cartItemContainer">
      <img src={photo} alt={`${name}`} />
      <div className="itemDetails">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
