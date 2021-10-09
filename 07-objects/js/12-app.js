// Object Literal
const product = {
    name: 'Monitor 20 in',
    price: 200,
    available: true
};

// Object Constructor
function Product(name, price, available) {
    this.name = name;
    this.price = price;
    this.available = available;
}

const productTwo = new Product('Monitor', 500, true);
console.log(productTwo);