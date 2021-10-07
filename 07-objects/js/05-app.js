// Add objects inside another
const product = {
    name: 'Monitor 20 in',
    price: 200,
    available: true,    
    information: {        
        measures: {
            weight: 100,
            measure: 'kg'
        },
        manufacturing: {
            country: 'México'
        }
    }
};

// Access inside the object
console.log(product);
console.log(product.information.manufacturing);
console.log(product.information.manufacturing.country);