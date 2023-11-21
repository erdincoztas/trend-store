import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import ProductItem from "./Context/ProductItem";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  };

  return (
    <ProductItem>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <Products />
    </ProductItem>
  );
}

export default App;
