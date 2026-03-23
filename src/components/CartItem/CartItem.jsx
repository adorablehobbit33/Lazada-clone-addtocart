import "./CartItem.css";

function CartItem({cartItem}){
    const { item, quantity } = cartItem;
    return(
        <div className="cart-item-container">
            <div className="cart-item-picture-container">
                <img src={item.picture} className="cart-item-picture" alt={item.name}></img>
            </div>
            <div className="cart-item-description">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">₱{item.price}</p>
                <p className="cart-item-quantity">Quantity: {quantity}</p>
            </div>
        </div>
    )
}

export default CartItem;