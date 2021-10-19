
// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log('CINCO');
//         // break; // Rompe la ejecución.
//         continue; // Continua con la ejecución.
//     }
//     console.log(`Número: ${ i }`);
// }

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

for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].discount) {
        console.log(`${ shoppingCart[i].name } tiene descuento.`);       
        continue;
    }

    console.log(shoppingCart[i].name);
}