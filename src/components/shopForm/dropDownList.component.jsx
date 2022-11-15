import { useContext } from "react";
import { Fragment } from "react";

import { allProductContext } from "../../context/products.context";

import "./dropDownList.styles.scss";

const DropDownList = () => {
  const { allProducts } = useContext(allProductContext);

  return (
    <Fragment>
      <select className="dropDown">
        <option value="select" required>
          Select a product
        </option>
        {allProducts.slice(0, 16).map(({ id, name }) => (
          <option key={id} value={name} required>
            {name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default DropDownList;
