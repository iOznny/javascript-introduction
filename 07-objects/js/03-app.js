// Create object literal
const product = {
    name: 'Monitor 20 in',
    price: 200,
    available: true,    
};

// Add new property the object
product.imagen = 'imagen.jpg';

// Delete property in the object
delete product.available;

console.log(product);
