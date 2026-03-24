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
            <div className="cart-header">
                <h1 className="cart-header-title">Cart Items</h1>
                <button className="close-button" onClick={() => setFloatingBox(false)}>
                    <img src="\images\cart-window-db\xmark-solid.png" alt="exit" className="exit-button"></img>
                </button>
            </div>
            <div className="cart-cards-container">
                {cart.items.map(cartItem => {
                    return(
                        <CartItem 
                            key={cartItem.cartItemID} 
                            cartItem={cartItem} />
                    )
                })}
            </div>
        </div>
    )
}

export default CartWindow;


