// Every
// Determina si todos los elementos en el array satisfacen una condición.

const shoppingCar = [
    { name: 'Monitor 27 Pulgadas', price: 500 },
    { name: 'Televisión', price: 100 },
    { name: 'Tablet', price: 100 },
    { name: 'Audifonos', price: 300 },
    { name: 'Teclado', price: 400 },
    { name: 'Celular', price: 700 },
];

const res = shoppingCar.every(p => p.price > 1000);
console.log('Every', res);