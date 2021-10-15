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

const laptop = {
    name: 'MSI',
    price: 1300
}

// Add element at the last position of the array
shoppingCart.push(product, phone, laptop);

const keyboard = {
    name: 'Hyper X Red Switches',
    price: 700
}

// Add element at the first position of the array
shoppingCart.unshift(keyboard);
console.table(shoppingCart);



/* // DELETE last element of array
shoppingCart.pop();
console.table(shoppingCart);

// DELETE first element of array
shoppingCart.shift();
console.table(shoppingCart);

// DELETE middle element of array
shoppingCart.splice(2, 1);
console.table(shoppingCart); */