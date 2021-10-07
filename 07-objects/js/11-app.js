// Defined Variable
let price = 20;

const product = {
    name: 'Monitor 20 in',
    price: 200,
    available: true,
    // The use of "this" references within 
    // the same object that is iterated
    showInformation: function() {
        console.log(`El producto tiene un precio de: ${ this.price }`);
    }
};

product.showInformation();