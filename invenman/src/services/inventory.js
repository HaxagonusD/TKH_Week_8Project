export default class Inventory{
    constructor(inventory={}){
        this.inventory = inventory;
        console.log(this.inventory)
    }

    addItem(product){
        this.inventory[product.id] = product;
        return this;
    }

    getInventory(){
        return this.inventory;
    }
    getItems(){
        return Object.values(this.inventory);
    }
    removeItem(item){
        delete this.inventory[item.id];
    }
}