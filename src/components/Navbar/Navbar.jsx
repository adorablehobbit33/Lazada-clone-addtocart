import CartWindow from "../CartWindow/CartWindow";
import "./Navbar.css";
import { useState } from 'react';

function Navbar({cart}){
    const [floatingBox, setFloatingBox] = useState(false);

    function showCartWindow(){
        setFloatingBox(floatingBox !== true);
    }

    return(
        <div className="navbar-lazada">
            <a href="/" className="lazada-button">
                <img src="src\components\Navbar\db\lazada-image.png" className="lazada-image" />
            </a>
            <div className="search-lazada">
                <input type="search" placeholder="Search in Lazada" className="search-area" />
                <button onClick={() => console.log("hello world")} className="search-button">
                    <img src="src\components\Navbar\db\magnifying-glass-solid.png" alt="magnifying glass" />
                </button>
            </div>
            <button onClick={showCartWindow} className="cart-button">
                <img src="src\components\Navbar\db\cart-arrow-down-solid.png" alt="shopping cart" />
            </button>

            {
                floatingBox && 
                <CartWindow 
                    showCartWindow={showCartWindow}
                    cart={cart}  
                />
                }
            
        </div>
    )
}

export default Navbar;