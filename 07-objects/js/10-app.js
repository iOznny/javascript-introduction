const product = {
    name: 'Monitor 20 in',
    price: 200,
    available: true
};

const measures = {
    weight: 1000,
    measure: 'kg'
}

// Join objects
const res = Object.assign(product, measures);
console.log('Join Objects with assign()', res);

// Join Objects operator Spread
const resTwo = { ...product, ...measures };
console.log('Join Objects operator Spread', resTwo);