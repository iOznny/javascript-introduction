// Find
// El método find() devuelve el valor del primer elemento del array que 
// cumple la función de prueba proporcionada.

const shoppingCar = [
    { name: 'Monitor 27 Pulgadas', price: 500 },
    { name: 'Televisión', price: 100 },
    { name: 'Tablet', price: 100 },
    { name: 'Audifonos', price: 300 },
    { name: 'Teclado', price: 400 },
    { name: 'Celular', price: 700 },
];

// Foreach
let res = '';
shoppingCar.forEach((p, i) => {
    if (p.name === 'Tablet') {
        res = shoppingCar[i];
    }
});
console.log('Foreach', res);

// Find
let res2 = shoppingCar.find(p => p.name === 'Tablet');
console.log('Find', res2);