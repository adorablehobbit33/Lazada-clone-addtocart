import Item from "./Item.js";

class Gadget extends Item{
    constructor(name, price, picture){
        super(name, price, picture);
        this.type = "Gadget";  //  provides the type to be the name of the class
    }
}

export default Gadget;