import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import Cart from "./models/Cart";
import CartItem from "./models/CartItem";

const cart = new Cart();

function App() {

  return (
    <>
      <Navbar cart={cart} />
      <Category title="Appliances" type="Appliance" cart={cart}/>
      <Category title="Gadgets" type="Gadget" cart={cart}/>
      <Category title="Accessories" type="Accessory" cart={cart}/>

    </>
  )
}

export default App
