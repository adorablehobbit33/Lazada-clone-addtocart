import Item from "./Item.js";

class Appliance extends Item{
    constructor(name, price, picture){
        super(name, price, picture);
        this.type = "Appliance";  //  provides the type to be the name of the class
    }
}

export default Appliance;