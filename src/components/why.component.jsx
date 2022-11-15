import "./why.styles.scss";

const WhySection = () => {
  return (
    <div>
      <h2 className="sectionHeading">Why choose us</h2>
      <section className="sectionWhy">
        <div className="whyGrid">
          <div className="whyBox">
            <img
              src={require("../images/icon-honesty.png")}
              alt="honest-icon"
              className="whyIcons"
            />
            <p>Honesty, integrity, transparency</p>
          </div>
          <div className="whyBox">
            <img
              src={require("../images/icon-quality.png")}
              alt="quality-icon"
              className="whyIcons"
            />
            <p>
              Controlled Environment Agriculture (CEA) results in the highest
              consistent quality possible
            </p>
          </div>
          <div className="whyBox">
            <img
              src={require("../images/icon-organic.png")}
              alt="organic-icon"
              className="whyIcons"
            />
            <p>All products are grown 100% organic</p>
          </div>
          <div className="whyBox">
            <img
              src={require("../images/icon-pestfree.png")}
              alt="pesticidefree-icon"
              className="whyIcons"
            />
            <p>
              Our microgreens are free of pesticides, fungicides, and synthetic
              fertilizers
            </p>
          </div>
          <div className="whyBox">
            <img
              src={require("../images/icon-fresh.png")}
              alt="fresh-icon"
              className="whyIcons"
            />
            <p>
              Freshest products and lowest carbon footprint thru a shortened
              food chain resulting in longer shelf life
            </p>
          </div>
          <div className="whyBox">
            <img
              src={require("../images/icon-delivery.png")}
              alt="delivery-icon"
              className="whyIcons"
            />
            <p>Direct connection to farm thru free delivery service</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhySection;
