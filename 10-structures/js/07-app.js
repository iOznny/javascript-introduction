// Operator OR (||)

const cash = 300;
const credit = 1000;
const available = cash + credit;
const total = 600;

//  300  > 600   || 1000   > 600   || 1300      > 600
if (cash > total || credit > total || available > total) {
    console.log('Podemos pagar.');
} else {
    console.log('Fondos insuficientes.');
}