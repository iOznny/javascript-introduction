const product = {
    name: 'Monitor 20 in',
    price: 200,
    available: true
};

// Seal the object
Object.seal(product);
product.available = false;

console.log(product);
console.log('Object Seal', Object.isSealed(product));