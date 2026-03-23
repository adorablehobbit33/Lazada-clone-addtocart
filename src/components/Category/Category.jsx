import ItemCard from "../ItemCard/ItemCard";
import "./Category.css"
import Accessory from "../../models/Accessory";
import Appliance from "../../models/Appliance";
import Gadget from "../../models/Gadget";

const items = [
  new Accessory(
    "Classic Designer Perfume",
    "29.99",
    "public/images/classic-designer-perfume.jpg"
  ),
  new Gadget(
    "Fast Charging USB‑C Cable",
    "9.99",
    "public/images/fast-charging-usb-c-cable.jpg"
  ),
  new Appliance(
    "Portable USB Desk Fan",
    "24.99",
    "public/images/portable-usb-desk-fan.jpg"
  ),
  new Gadget(
    "Smart Fitness Watch",
    "149.99",
    "public/images/smart-fitness-watch.jpg"
  ),

  new Accessory(
    "Luxury Floral Perfume",
    "34.99",
    "public/images/luxury-floral-perfume.jpg"
  ),
  new Gadget(
    "USB Audio Adapter",
    "12.49",
    "public/images/usb-audio-adapter.jpg"
  ),
  new Appliance(
    "Mini Portable Table Fan",
    "19.99",
    "public/images/mini-portable-table-fan.jpg"
  ),
  new Accessory(
    "Digital Sport Watch",
    "79.99",
    "public/images/digital-sports-watch.jpeg"
  )
];


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