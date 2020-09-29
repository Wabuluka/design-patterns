const product = require('./product/product');

class Cart{
    constructor(){
        this.carts = [];
    }

    addProduct(pdt){
        return this.carts.push(pdt);
    }

    listCart(){
        return `Your cart: ${this.carts}`;
    }
}

let p = new Cart();
p.addProduct('book');
p.addProduct('soda');
p.addProduct('cake');

console.log(p.listCart());