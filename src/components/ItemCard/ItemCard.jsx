import "./ItemCard.css"
import ShowConfirmation from "./ShowConfirmation/ShowConfirmation";
import {useState} from 'react';

function ItemCard({ item, cart }){
    const [floatingConfirmation, setFloatingConfirmation] = useState(false);

    const {name, price, picture} = item;

    function showConfirmation(){
        setFloatingConfirmation(floatingConfirmation !== true);
    }

    return (
        <>
            <button className="card-container" onClick={showConfirmation}>
                <img src={picture} className="card-picture" alt={picture} />
                <p className="card-name">{name}</p>
                <p className="card-price">₱{price}</p>
            </button>
            {
                floatingConfirmation && <ShowConfirmation 
                    item={item}
                    cart={cart}/>
                }
            
        </>
    );
}



export default ItemCard