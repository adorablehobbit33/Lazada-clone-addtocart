import { v4 as uuidv4 } from "uuid";

class Item{
    constructor(name, price, picture){
        this.uniqueID = uuidv4(); //  provide a unique id as an item to be bought
        this.name = name;
        this.price = price;
        this.picture = picture;
    }

    getPrice(){
        return this.price;
    }
}

export default Item;