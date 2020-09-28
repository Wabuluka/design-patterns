class Product{
    constructor(){
        this.products = [];
    }

    addProduct(pdt){
        return this.products.push(pdt)
    }
    listProducts(){
        return this.products;
    }
}
let p = new Product()
p.addProduct('book');

console.log(p.listProducts())