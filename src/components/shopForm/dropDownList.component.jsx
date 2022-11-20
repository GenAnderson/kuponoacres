import { useEffect } from "react";
import { useContext, Fragment, useState } from "react";

import { allProductContext } from "../../context/products.context";

import "./dropDownList.styles.scss";

const DropDownList = ({ dropDownHandler, id }) => {
  const { allProducts } = useContext(allProductContext);

  return (
    <Fragment>
      <select
        id={id}
        className="dropDown"
        onChange={dropDownHandler}
        // value={selectedItems}
      >
        <option value="select" required>
          Select a product
        </option>
        {allProducts.slice(0, 16).map(({ id, name }) => (
          <option key={id} value={id} required>
            {name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default DropDownList;
