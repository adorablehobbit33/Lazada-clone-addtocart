// NAME: BACAR, Jericko B.
// SECTION: CMSC100 C-2L
// DATE: March 24, 2026
// DESCRIPTION: React Components

import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import Cart from "./models/Cart";

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
