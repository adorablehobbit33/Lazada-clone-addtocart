import "./ItemCard.css"

function ItemCard({ item }){
    const {name, price, picture} = item;

    return (
        <div className="card-container">
            <img src={picture} className="card-picture" alt={picture} />
            <p className="card-name">{name}</p>
            <p className="card-price">₱{price}</p>
        </div>
    );
}



export default ItemCard