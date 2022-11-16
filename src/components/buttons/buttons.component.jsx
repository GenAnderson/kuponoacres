import "./buttons.styles.scss";

const BUTTON_TYPE_CLASSES = {
  inverted: "inverted",
  smaller: "smaller",
  addToCart: "addToCart",
  smallBack: "smallBack",
  sendOrder: "sendOrder",
  finalizeSubmit: "finalizeSubmit",
};

const Buttons = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Buttons;
