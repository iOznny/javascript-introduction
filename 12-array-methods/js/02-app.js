// Find Index
// El método findIndex() devuelve el índice del primer elemento 
// de un array que cumpla con la función de prueba proporcionada. 
// En caso contrario devuelve -1.

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'];

const shoppingCar = [
    { name: 'Monitor 27 Pulgadas', price: 500 },
    { name: 'Televisión', price: 100 },
    { name: 'Tablet', price: 100 },
    { name: 'Audifonos', price: 300 },
    { name: 'Teclado', price: 400 },
    { name: 'Celular', price: 700 },
];

months.forEach( (m, i) => {
    console.log(i);
    console.log(m);
});

// Search index of April
const idx = months.findIndex(m => m === 'Septiembre');
console.log('Find Index:', idx);

const cart = shoppingCar.findIndex(p => p.price === 100);
console.log('Find Index Car:', cart);