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

const a1 = shoppingCart.map( (sc) => `${ sc.name } - ${ sc.precio }`);
shoppingCart.forEach( sc => console.log('Foreach:', `${ sc.name } - ${ sc.precio }`));

console.log(a1);