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

// Add element at the last position of the array
shoppingCart.push(product, phone);

const keyboard = {
    name: 'Hyper X Red Switches',
    price: 700
}

// Add element at the first position of the array
shoppingCart.unshift(keyboard);
console.table(shoppingCart);