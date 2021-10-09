// Concatenation
const product03 = ' Monitor 20 inches ';
const price03 = '30 USD';

// Join strings
console.log('Concat 03 ->' + product03.concat(price03));
console.log('Concat 03 ->' + product03.concat('Discount'));

// Concat Examples
console.log('Concat 03 ->' + product03 + price03);
console.log('Concat 03 ->' + product03 + 'Hola' + price03);

// Backtick ES6
console.log('Concat 03 ->' + ` El producto ${ product03 } tiene un precio de ${ price03 }`);