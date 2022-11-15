import "./contactInfo.styles.scss";

const ContactInfo = () => {
  return (
    <div className="mainShopContainer">
      <h1>Order Form</h1>
      <div>
        <form>
          <div>
            <label className="regularInput">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
              />
            </label>

            <label className="regularInput">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
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
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;
