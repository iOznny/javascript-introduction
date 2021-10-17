function sum(a, b) {
    return a + b;
}

const res = sum(2, 3);
//console.log(res);


let total = 0;

function addShoppingCart(price) {
    return total += price;
}

function calImp(total) {
    return total * 1.16;
}

total = addShoppingCart(300);
total = addShoppingCart(100);
total = addShoppingCart(200);

const totalPay = calImp(total);
console.log(total, totalPay);

