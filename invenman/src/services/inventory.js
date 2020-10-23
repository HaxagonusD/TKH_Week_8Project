export default class Inventory{
    constructor(){
        this.inventory = {};
    }

    addItem(something){
        this.inventory[something.id] = something;
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