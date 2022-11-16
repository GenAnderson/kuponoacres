import { useRef } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context.jsx";

import Buttons from "../buttons/buttons.component";

import "./contactInfo.styles.scss";

const ContactInfo = () => {
  const { cartItems } = useContext(CartContext);
  const { cartTotal } = useContext(CartContext);

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const numberInputRef = useRef();

  const submitHandler = function (event) {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;
    const total = cartTotal;

    const finalCart = [];
    cartItems.forEach((item) => {
      const buyItem = {
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      };
      finalCart.push(buyItem);
    });

    const allInfoSend = {
      First_Name: enteredFirstName,
      Last_Name: enteredLastName,
      Email: enteredEmail,
      Number: enteredNumber,
      Cart_Total: total,
      Cart_Items: finalCart,
    };
    console.log(allInfoSend);
  };

  return (
    <div className="orderFormContainer">
      <h1>Order Form</h1>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label className="regularInput">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
                ref={firstNameInputRef}
              />
            </label>

            <label className="regularInput">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
                ref={lastNameInputRef}
              />
            </label>
          </div>
          <div>
            <label className="regularInput">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                ref={emailInputRef}
              />
            </label>
          </div>
          <div>
            <label className="regularInput">
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Number"
                required
                ref={numberInputRef}
              />
            </label>
          </div>
          <div className="submitInstructions">
            <p>1. Fill out the contact form above.</p>
            <br />
            <p>2.Review your order below.</p>
            <br />
            <p>
              3. Hit submit when you're done and we'll contact you if needed!
            </p>
            <Buttons buttonType={"finalizeSubmit"}>Submit!</Buttons>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;
