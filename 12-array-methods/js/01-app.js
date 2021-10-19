// Includes and Some
// El método includes() determina si una matriz incluye un determinado elemento, 
// devuelve true o false según corresponda.

// El método some() comprueba si al menos un elemento del array cumple 
// con la condición implementada por la función proporcionada.

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'];

const shoppingCar = [
    { name: 'Monitor 27 Pulgadas', price: 500 },
    { name: 'Televisión', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Audifonos', price: 300 },
    { name: 'Teclado', price: 400 },
    { name: 'Celular', price: 700 },
];

// Check if a value exist in a array
months.forEach( m => {    
    if (m === 'Enero') {
        console.log('Foreach:', 'Enero exists.');
    }
});

// Array method "includes()"
const res = months.includes('Enero');
console.log('Includes:', res);

// In array objects use .some()
const e = shoppingCar.some( p => p.name === 'Celular');
console.log('Some Object:', e);

// In a tradition array
const e2 = months.some(m => m === 'Febreroo');
console.log('Some Array:', e2);