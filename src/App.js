import { Routes, Route } from "react-router-dom";

import Home from "./routes/home.route";
import Navigation from "./components/navigation/navigation.component";
import Shop from "./routes/shop.route";

import "./App.scss";
import FinalizeOrder from "./routes/finalize-order.route";
import Recipes from "./routes/recipes.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="finalize-order" element={<FinalizeOrder />} />
        <Route path="recipes" element={<Recipes />} />
      </Route>
    </Routes>
  );
}

export default App;
