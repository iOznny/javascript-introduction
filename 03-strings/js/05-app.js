// Strings with Methods -> replace(), slice(), substring() and charAt().
const example05 = 'Monitor 20 inches';
console.log(example05);

// Replace returns a new string with some or all matches of a pattern
console.log('Replace -> ' + example05.replace('inches', '"'));
console.log('Replace -> ' + example05.replace('Monitor', 'Curved Monitor'));

// The slice () method returns a copy of a part of the array 
// within a new array starting from start to end
console.log('Slice -> ' + example05.slice(0, 7));
console.log('Slice -> ' + example05.slice(7));
console.log('Slice -> ' + example05.slice(2, 1));

// Alternative to slice
// The substring () method returns a subset of a String object
console.log('Substring -> ' + example05.substring(0, 7));
console.log('Substring -> ' + example05.substring(2, 1));

// Cut and get the first letter 
const user = 'Demo';
console.log('Substring -> ' + user.substring(0, 1));
console.log('CharAt -> ' + user.charAt(0));
