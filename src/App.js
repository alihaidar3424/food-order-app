import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIShown, setCartIShown] = useState(false);

  const showCartHandler = () => {
    setCartIShown(true);
  };

  const hideCartHandler = () => {
    setCartIShown(false);
  };

  return (
    <CartProvider>
      {cartIShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
