const shoppingCart = [];

// Define a product
const product = {
    name: 'Monitor',
    price: 400
}

const phone = {
    name: 'Samsumg S20+',
    price: 800
}

const keyboard = {
    name: 'Hyper X Red Switches',
    price: 700
}

// Add elements in array with Spread Operator

// Imperative form: Modify array with method push in array
// Declarative form: Does not directly modify the arrangement and create new variable
let result;

result = [...shoppingCart, product];
result = [...result, phone];
// Add element in first position
result = [keyboard, ...result];

console.table(result);