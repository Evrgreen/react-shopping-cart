import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

import useLocalStorage from "./hooks/useLocalStorage";
import { ProductContext } from "./context/ProductContext";
import { CartContext } from "./context/CartContext";
// Components

import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import Product from "./components/Product";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useLocalStorage("cart", []);

  const addItem = (item) => {
    const cartItem = products.filter((product) => product.id === item.id);
    setCart([...cart, ...cartItem]);
  };

  const removeItem = (item) => {
    console.log(item);

    const cleanedArray = cart.filter((product) => product.id !== item);
    setCart(cleanedArray);
  };
  console.log(cart);
  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation />

          {/* Routes */}

          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
