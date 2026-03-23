import Cart from "../../models/Cart";
import "./CartWindow.css"
import CartItem from "../CartItem/CartItem";

function CartWindow({showCartWindow, cart}){

    return(
        <div className="cart-window-container">
            <div className="close-button-container">
                <button className="close-button" onClick={showCartWindow}>
                    <img src="src\components\CartWindow\db\xmark-solid.png" alt="exit" className="exit-button"></img>
                </button>
                
            </div>
            <h1>Cart Items</h1>
            {cart.items.map(cartItem => {
                return(
                    <CartItem 
                        key={cartItem.cartItemID} 
                        cartItem={cartItem} />
                )
            })}
        </div>
    )
}

export default CartWindow;


