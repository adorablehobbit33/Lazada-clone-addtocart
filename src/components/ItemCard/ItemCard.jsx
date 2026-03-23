import "./ItemCard.css"
import ShowConfirmation from "./ConfirmationWindow/ConfirmationWindow";
import {useState} from 'react';

function ItemCard({ item, cart }){
    const [floatingConfirmation, setFloatingConfirmation] = useState(false);

    const {name, price, picture} = item;

    function toggleConfirmationWindow(){
        setFloatingConfirmation(prevValue => !prevValue);
    }

    return (
        <>
            <button className="card-container" onClick={toggleConfirmationWindow}>
                <img src={picture} className="card-picture" alt={picture} />
                <p className="card-name">{name}</p>
                <p className="card-price">₱{price}</p>
            </button>
            {
                floatingConfirmation && <ShowConfirmation 
                    item={item}
                    cart={cart}
                    setFloatingConfirmation={setFloatingConfirmation}/>
            }
        </>
    );
}

export default ItemCard