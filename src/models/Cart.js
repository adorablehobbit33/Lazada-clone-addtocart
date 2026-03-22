class Cart{
    constructor(){
        this.items = [];
    }

    addToCart(item){
        const itemExists = this.items.some(cartItem => cartItem.cartItemID === item.cartItemID);

        if(!itemExists){
            this.items.push(item)
            console.log(`SUCCESS: Added ${item.name} in cart`);
        }else{
            console.log("ERROR");
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
            console.log(`FAILED: ${item.name} already exists in cart`)
        }
    }
}

export default Cart;