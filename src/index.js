import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { CartProvider } from "./context/cart.context";

import "./index.scss";
import App from "./App";
import { AllProductProvider } from "./context/products.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AllProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AllProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
