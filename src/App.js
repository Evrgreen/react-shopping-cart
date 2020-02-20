import React, { createContext, useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import Product from "./components/Product";

export const CartContext = createContext();
export const ProductContext = createContext();

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // add the given item to the cart
  };

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routes */}

      <ProductContext.Provider value={products}>
        <Route exact path="/" component={Products} />
      </ProductContext.Provider>

      <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
    </div>
  );
}

export default App;
