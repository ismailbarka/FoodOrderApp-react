import Header from "./Components/Layout/Header";
import React,{ useState} from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  

  const ShowCartHandler = () =>{
    setCartIsShown(true);
  }
  const HideCartHandler = () =>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler}></Cart>}
      <Header onShowCart={ShowCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
