// Ternary Operator

const authenticated = false;
const payment = true;
console.log(authenticated ? 'Authenticated' : 'Not Authenticated');

// With two conditions

// AND
console.log(authenticated && payment ? 'Payment' : 'Not Payment');

// OR
console.log(authenticated || payment ? 'Payment' : 'Not Payment');

// Two conditions
console.log(authenticated ? payment ? 'Authenticated and payment' : 'Authenticated not payment' : 'Not Authenticated');