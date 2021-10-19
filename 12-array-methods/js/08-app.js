// Spread Operator
// La sintaxis extendida o spread syntax permite a un elemento iterable tal 
// como un arreglo o cadena ser expandido en lugares donde cero o más argumentos 
// (para llamadas de  función) o elementos (para Array literales) son esperados, 
// o a un objeto ser expandido en lugares donde cero o más pares de valores clave 
// (para literales Tipo Objeto) son esperados.

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'];

const shoppingCar = [
    { name: 'Monitor 27 Pulgadas', price: 500 },
    { name: 'Televisión', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Audifonos', price: 300 },
    { name: 'Teclado', price: 400 },
    { name: 'Celular', price: 700 },
];

const m = [...months, 'Octubre'];
console.log('Spread Operator', m);

const product = {
    name: 'Disco duro',
    price: 200
};

const cart = [...shoppingCar, product];
console.log('Cart 2:', cart);