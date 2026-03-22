import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import Accessory from "./models/Accessory";
import Appliance from "./models/Appliance";
import Gadget from "./models/Gadget";
import Cart from "./models/Cart";
import CartItem from "./models/CartItem";


const items = [
  new Accessory("Watchqwfqqefqefqweqwefqwefqwfqwfqwfqwfqwfqwfqwfqfqw", "1.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Accessory("Watch", "1.99", "https://img.lazcdn.com/g/p/bce1da24a29479e675abc9b68277eb63.jpg_400x400q80.jpg_.avif"),
  new Accessory("Watch", "1.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Accessory("Watch", "1.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
]

const cartItems = [
]

function App() {

  return (
    <>
      <Navbar />
      <Category title="items" list={items}/>
    </>
  )
}

export default App
