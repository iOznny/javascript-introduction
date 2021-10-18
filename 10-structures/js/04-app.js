// Else If

const money = 1000;
const payment = 500;
const card = false;
const check = false;


if (money >= payment) {
    console.log('Se puede pagar.');
} else if (check) {
    console.log('Si tengo cheque');
} else if (card) {
    console.log('Puedo pagar con tarjeta.');
} else {
    console.log('Fondos insuficientes.');
}