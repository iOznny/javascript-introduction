// For Loop

for (let i = 0; i <= 10; i++) {
    console.log(`Número: ${ i }`);
}

// Numeros pares e impares
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`Número: ${ i } [Par]`);        
    } else {
        console.log(`Número: ${ i } [Impar]`);
    }
}

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

for (let i = 0; i < shoppingCart.length; i++) {    
    console.log(shoppingCart[i].name);
}