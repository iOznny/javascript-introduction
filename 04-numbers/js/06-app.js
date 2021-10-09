// Convert strings to numbers
const num1 = "20";
const num2 = 30.2;
const num3 = 'Uno';
const num4 = 20;

console.log('Convert strings to numbers -> ' + num1);

// String to Number
console.log('String to Number -> ' + Number.parseInt(num1));
console.log('String to Number -> ' + Number.parseInt(num2));

// Number to float
console.log('Number to float -> ' + Number.parseFloat(num2));

// String letter to number
console.log('String letter to number -> ' + Number.parseFloat(num3));

// Check if a number is integer or not
console.log('Number is integer -> ' + Number.isInteger(num1));
console.log('Number is integer -> ' + Number.isInteger(num4));