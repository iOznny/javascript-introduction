// Switch Case

const methodPayment = 'cash';

switch (methodPayment) {
    case 'cash':
        console.log('Pagaste con cash.');
        break;

    case 'card':
        console.log('Pagaste con card.');
        break;

    default:
        console.log('Método de pago no soportado.');
        break;
}