

import React from "react";
import { useState } from "react";
import CartContextProvider from "./store/CartContextProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  }

  const hideCartHandler = () => {
    setCartIsVisible(false);
  }
 

  return (
      <CartContextProvider>
        {cartIsVisible && <Cart onHideCard={hideCartHandler}/>}
        <Header  onShowCard={showCartHandler} />
        <main>
          <Meals/>
        </main>
      </CartContextProvider>
  );
}

export default App;
