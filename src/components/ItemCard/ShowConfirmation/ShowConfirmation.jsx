import "./ShowConfirmation.css";

function ShowConfirmation({item, cart}){
    const {name} = item;
    
    return(
        <div className="confirmation-container">
            <h1>Are you sure you want to add {name} to cart?</h1>
            <button onClick={() => cart.addToCart(item)}>Yes</button>
        </div>
    )
}

export default ShowConfirmation;