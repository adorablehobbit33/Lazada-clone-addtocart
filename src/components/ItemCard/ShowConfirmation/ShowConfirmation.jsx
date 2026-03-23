import "./ShowConfirmation.css";
import { useEffect, useRef } from 'react';

function ShowConfirmation({item, cart, setFloatingConfirmation}){
    const {name} = item;
    const boxRef = useRef();
    
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
            <h1>Are you sure you want to add {name} to cart?</h1>
            <button onClick={() => cart.addToCart(item)}>Yes</button>
        </div>
    )
}

export default ShowConfirmation;