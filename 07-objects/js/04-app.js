// Create object literal
const product = {
    name: 'Monitor 20 in',
    price: 200,
    available: true,    
};

// Assign to variable 
const name = product.name;
console.log(name);

// Destructuring an object
const { price, available } = product;
console.log(price);