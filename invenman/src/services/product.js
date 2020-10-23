export default class Product {
    constructor(price, id, quantity){
        this.price = price;
        this.id =id;
        this.quantity = quantity
    }
    sellProduct(amount){
        this.quantity -= amount;
    }
    restock(amount){
        this.quantity += amount;
    }
    updatePrice(newPrice){
        this.price = newPrice;
    }
    toArray(){
        return Object.entries(this)
    }
}