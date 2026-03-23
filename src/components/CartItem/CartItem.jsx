function CartItem({cartItem}){
    const { item, quantity } = cartItem;
    return(
        <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{quantity}</p>
        </div>
    )
}

export default CartItem;