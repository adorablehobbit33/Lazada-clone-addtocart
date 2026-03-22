import "./Navbar.css"

function Navbar(){
    return(
        <div className="navbar-lazada">
            <img src="src\components\Navbar\db\lazada-image.png" className="lazada-image" />
            <div className="search-lazada">
                <input type="text" placeholder="Search in Lazada" />
                <button onClick={() => console.log("hello world")} className="search-button">
                <img src="src\components\Navbar\db\cart-arrow-down-solid.png" />
                </button>
            </div>
            <i></i>
        </div>
    )
}

export default Navbar;