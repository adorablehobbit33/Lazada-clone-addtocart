import ItemCard from "../ItemCard/ItemCard";
import "./Category.css"
function Category({title, list}){

    return(
        <div className="category-parent">
            <div className="category-container">
                <h1 className="title-of-category">{title}</h1>
                <div className="cards-container">
                {
                    list.map(item => {
                    return(
                        <ItemCard key={item.uniqueID} item={item} />
                    )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Category;