import { v4 as uuidv4 } from "uuid";

class CartItem{
    constructor(item, quantity){
        this.cartItemID = uuidv4();   //  provide a unique id as a cart item
        this.item = item;
        this.quantity = quantity;
    }

    increase(){
        this.quantity++;
    }

    getSubTotal(){
        return this.item.price * this.quantity;
    }
}

export default CartItem;