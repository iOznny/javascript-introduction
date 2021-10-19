// Foreach and .map()
const slopes = ['Homework', 'Eat', 'Project', 'Study Javascript'];

slopes.forEach( (slope, i) => {
    console.log(`${ i }: ${ slope }`);
});

const shoppingCart = [
    { name: 'A', precio: 10 },
    { name: 'B', precio: 20 },
    { name: 'C', precio: 30, discount: true },
    { name: 'D', precio: 40, discount: true },
    { name: 'E', precio: 50 },
    { name: 'F', precio: 60 },
    { name: 'G', precio: 70 },
    { name: 'H', precio: 80 },
    { name: 'I', precio: 90 },
    { name: 'J', precio: 100 },
];

// FOREACH
shoppingCart.forEach(product => console.log('Foreach:', product.name));

// MAP
shoppingCart.map(product => console.log('Map:', product.name));
