// Filter: 
// El método filter() crea un nuevo array con todos los elementos 
// que cumplan la condición implementada por la función dada.

const shoppingCar = [
    { name: 'Monitor 27 Pulgadas', price: 500 },
    { name: 'Televisión', price: 100 },
    { name: 'Tablet', price: 100 },
    { name: 'Audifonos', price: 300 },
    { name: 'Teclado', price: 400 },
    { name: 'Celular', price: 700 },
];

let res = shoppingCar.filter(p => p.price === 100);
res = shoppingCar.filter(p => p.price < 600);
res = shoppingCar.filter(p => p.name !== 'Audifonos');

console.log('Filter:', res);