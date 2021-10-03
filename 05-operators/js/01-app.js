// Operators

const num01 = 20;
const num02 = "20";
const num03 = 30;

// Greater than operator 
console.log('>', num01 > num03);

// Greater than or equal to operator
console.log('>=', num01 >= num03);

// Less than operator
console.log('<', num01 < num03);

// Less than or equal to operator
console.log('<=', num01 <= num03);

// Compare numbers
console.log('==', num01 == num02);

// Strictly the same
console.log('===', num01 === num02);
console.log('=== and parseInt', num01 === parseInt(num02));

// Typeof
console.log('typeof', typeof num01);
console.log('typeof', typeof num02);

// It is not the same
let password1 = 'admin';
let password2 = 'Admin';
console.log('!=', num01 != num02);
console.log('!==', password1 !== password2);
