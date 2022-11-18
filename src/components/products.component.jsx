import Buttons from "./buttons/buttons.component";
import "./products.styles.scss";
import pdf from "../aboutMicrogreens.pdf";

const ProductsSection = () => {
  return (
    <div className="sectionContainer" id="products">
      <div className="products-box grid5col2row">
        <div className="fixSpanGrid">
          <p className="sectionHeading">Products</p>
          <Buttons buttonType={"smallBack"}>
            <a href={pdf} target="_blank">
              Learn more about microgreens →
            </a>
          </Buttons>
        </div>
        <div className="products-text-box">
          <p className="number">01</p>
          <p className="desc">Nutrient-Dense Microgreens</p>
          <img
            src={require("../images/dense.jpg")}
            className="products-miniphoto"
            alt="microgreens"
          />
        </div>
        <div className="products-text-box">
          <p className="number">02</p>
          <p className="desc">Functional Health Microgreen Blends</p>
          <img
            src={require("../images/blend.JPEG")}
            className="products-miniphoto"
            alt="microgreen blend"
          />
        </div>
        <div className="products-text-box">
          <p className="number">03</p>
          <p className="desc">Chef Select Microgreens</p>
          <img
            src={require("../images/chef.jpg")}
            className="products-miniphoto"
            alt="microgreen variety"
          />
        </div>
        <div className="products-text-box">
          <p className="number">04</p>
          <p className="desc">Specialty Mushrooms</p>
          <img
            src={require("../images/mushroom.jpg")}
            className="products-miniphoto"
            alt="microgreen red mushroom"
          />
        </div>
        <div className="products-text-box">
          <p className="number">05</p>
          <p className="desc">Edible Flowers and Foliage</p>
          <img
            src={require("../images/flowers.jpg")}
            className="products-miniphoto"
            alt="microgreen edible flowers"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
