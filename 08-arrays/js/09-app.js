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

// Tour arrangement with iterador
for (let i = 0; i < shoppingCart.length; i++) {
    console.log('For:', `${ shoppingCart[i].name } - ${ shoppingCart[i].precio }`);
}

// Tour arrangement with foreach (array method)
shoppingCart.forEach(sc => {
    console.log('Foreach:', `${ sc.name } - ${ sc.precio }`);    
});