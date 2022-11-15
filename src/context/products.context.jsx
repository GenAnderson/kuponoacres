import { createContext, useState } from "react";

import allItems from "../components/shopForm/allItems";

export const allProductContext = createContext({});

export const AllProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(allItems);
  const value = { allProducts };

  return (
    <allProductContext.Provider value={value}>
      {children}
    </allProductContext.Provider>
  );
};
