// Destructuring with large objects
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

// Destructuring of the object
const { 
    name, 
    information, 
    information: { 
        manufacturing, 
        manufacturing: { 
            country 
        } 
    } 
} = product;

console.log(name);
console.log(information);
console.log(manufacturing);
console.log(country);