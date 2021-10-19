// Reduce
// El método reduce() ejecuta una función reductora sobre cada elemento 
// de un array, devolviendo como resultado un único valor.

let total = 0;
const shoppingCar = [
    { name: 'Monitor 27 Pulgadas', price: 500 },
    { name: 'Televisión', price: 100 },
    { name: 'Tablet', price: 100 },
    { name: 'Audifonos', price: 300 },
    { name: 'Teclado', price: 400 },
    { name: 'Celular', price: 700 },
];

// Sum total with foreach
shoppingCar.forEach( p => total += p.price);
console.log('Total:', total);

// With reduce
let res = shoppingCar.reduce((total, shoppingCar) => total + shoppingCar.price, 0);
console.log('Reduce', res);