// Create object literal
const product = {
    name: 'Monitor 20 in',
    price: 200,
    available: true,    
};

// Destructuring an object
const { name } = product;
//console.log(name);


// Destructuring an array
const numbers = [10, 20, 30, 40, 50];
const [ n1, n2, n3, n4, n5 ] = numbers;
console.log('Numbers with destructuring:', n1, n2, n3, n4, n5);

// Get element specific of Destructuring 
const [ , , , , s5 ] = numbers;
console.log('Element specific: ', s5);

// Get elements with spread operator
const [ first, ...last ] = numbers;
console.log('Elements with spread operator: ', last);