// Strings with Methods -> repeat(), split()
const example06 = 'Monitor 20 inches';

// Repeat text: Copies of the string on which it was called
const text = ' in promotion'
console.log('Repeat ->' + text.repeat(4));

// The split () method splits an object of type String into an array (vector) 
// of strings by separating the string into substrings.
const activity = 'I learning javascript modern';
console.log(activity.split(" "));

const hobbies = 'Read, Walk, Listen music, Write, Learn to programing';
console.log(hobbies.split(', '));

const tweet06 = "Learn javascript modern #JSISTODAY";
console.log(tweet06.split('#'));