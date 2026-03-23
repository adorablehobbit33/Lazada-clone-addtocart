import "./ConfirmationWindow.css";
import { useEffect, useRef } from 'react';

function ShowConfirmation({item, cart, setFloatingConfirmation}){
    const {name} = item;

    const boxRef = useRef();    //  useRef creates a global state
    useEffect(() => {
        function clickOutsideOfContainer(event){
            if(boxRef.current && !boxRef.current.contains(event.target)){
                setFloatingConfirmation(false);
            }
        }

        document.addEventListener("mousedown", clickOutsideOfContainer);

        return(() => {
            document.removeEventListener("mousedown", clickOutsideOfContainer)
        });
    }, [setFloatingConfirmation]);

    return(
        <div ref={boxRef} className="confirmation-container">
            <p>Are you sure you want to add <b>{name}</b> to cart?</p>
            <button onClick={() => {
                        setFloatingConfirmation(false); cart.addToCart(item)
                    }
                } className="add-to-cart-button">Add to cart</button>
        </div>
    )
}

export default ShowConfirmation;