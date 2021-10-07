// Objecto like const with use strict
"use strict";

const product = {
    name: 'Monitor 20 in',
    price: 200,
    available: true
};

// Prevent object modification
Object.freeze(product);

//product.imagen = "imagen.jpg";

// Check the object is freeze
console.log('Object Freeze ' + Object.isFrozen(product));

// Object Methods
//freeze()
//isFrozen()
