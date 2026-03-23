import "./CartWindow.css"
import CartItem from "../CartItem/CartItem";
import { useEffect, useRef } from 'react';

function CartWindow({setFloatingBox, cart}){
    const boxRef = useRef();    //  Close when mouse clicks outside of container
    useEffect(() => {
        function clickOutsideContainer(event){
            if(boxRef.current && !boxRef.current.contains(event.target)){
                console.log("clicked")
                setFloatingBox(false);
            }

        }
        document.addEventListener("mousedown", clickOutsideContainer);

        return (() => {
            document.removeEventListener("mousedown", clickOutsideContainer);
        });
    }, [setFloatingBox])

    return(
        <div ref={boxRef} className="cart-window-container">
            <div className="close-button-container">
                <button className="close-button" onClick={() => setFloatingBox(false)}>
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


