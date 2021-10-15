// Iterar array with operator MAP
const shoppingCart = [
    { name: 'A', precio: 10 },
    { name: 'B', precio: 20 },
    { name: 'C', precio: 30 },
    { name: 'D', precio: 40 },
    { name: 'E', precio: 50 },
    { name: 'F', precio: 60 },
    { name: 'G', precio: 70 },
    { name: 'H', precio: 80 },
    { name: 'I', precio: 90 },
    { name: 'J', precio: 100 },
];

// Method (map) iterar array: Map creates a new array compared to foreach
shoppingCart.map(sc => {
    console.log('Map:', `${ sc.name } - ${ sc.precio }`);
});