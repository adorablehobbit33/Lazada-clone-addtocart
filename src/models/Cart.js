import CartItem from "./CartItem";

class Cart{
    constructor(){
        this.items = [];
    }

    addToCart(item){
        const itemExists = this.items.some(cartItem => cartItem.item.uniqueID === item.uniqueID);

        if(!itemExists){
            this.items.push(new CartItem(item, 1));
            console.log(`SUCCESS: Added ${item.name} to cart`);
        }else{
            //  Look for the id, then increase quantity
            this.items.forEach(itemInItems => {
                if(item.uniqueID === itemInItems.item.uniqueID){
                    itemInItems.increase();
                }
            })
            console.log(`SUCCESS: Added quantity of ${item.name}`);
        }
    }

    removeFromCart(item){
        const itemExists = this.items.some(cartItem => cartItem.cartItemID === item.cartItemID);

        if(itemExists){
            //  Remove item
            this.items = this.items.filter(cartItem => {
                return cartItem !== item;
            });
            console.log(`SUCCESS: Removed ${item.name} in cart`);
        }else{
            console.log(`FAILED: ${item.name} already exist in cart`)
        }
    }
}

export default Cart;