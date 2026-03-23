import ItemCard from "../ItemCard/ItemCard";
import "./Category.css"

import Accessory from "../../models/Accessory";
import Appliance from "../../models/Appliance";
import Gadget from "../../models/Gadget";

const items = [
  new Accessory("Perfume", "1.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Gadget("USB cable", "5.99", "https://img.lazcdn.com/g/p/bce1da24a29479e675abc9b68277eb63.jpg_400x400q80.jpg_.avif"),
  new Appliance("Electric Fan", "7.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Accessory("Watch", "19.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Accessory("Perfume", "1.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Gadget("USB cable", "5.99", "https://img.lazcdn.com/g/p/bce1da24a29479e675abc9b68277eb63.jpg_400x400q80.jpg_.avif"),
  new Appliance("Electric Fan", "7.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Accessory("Watch", "19.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Accessory("Perfume", "1.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Gadget("USB cable", "5.99", "https://img.lazcdn.com/g/p/bce1da24a29479e675abc9b68277eb63.jpg_400x400q80.jpg_.avif"),
  new Appliance("Electric Fan", "7.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Accessory("Watch", "19.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Accessory("Perfume", "1.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Gadget("USB cable", "5.99", "https://img.lazcdn.com/g/p/bce1da24a29479e675abc9b68277eb63.jpg_400x400q80.jpg_.avif"),
  new Appliance("Electric Fan", "7.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
  new Accessory("Watch", "19.99", "https://img.lazcdn.com/g/p/eee1b2dab4cee4b60cb78d213f234d9b.jpg_400x400q80.jpg_.avif"),
]

function Category({title, type, cart}){

    return(
        <div className="category-parent">
            <div className="category-container">
                <h1 className="title-of-category">{title}</h1>
                <div className="cards-container">
                {
                    items.map(item => {
                        if(type === item.type){
                            return(
                                <ItemCard 
                                    key={item.uniqueID} 
                                    item={item} 
                                    cart={cart}
                                    />
                            )
                        }
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Category;