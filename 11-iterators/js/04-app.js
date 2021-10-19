// While Loop

let i = 0; // Initial while

while (i < 10) { // Condition
    console.log(`Número: ${ i }`);
    i++;
}

let j = 1;
while (j < 100) {
    if (j % 15 === 0) {
        // Multiple of 3 and 5
        console.log(`${ j } Fizzbuzz.`);        
    } else if (j % 3 === 0) {
        // Multiple of 3
        console.log(`${ j } Fizz.`);        
    } else if (j % 5 === 0) {
        // Multiple of 5
        console.log(`${ j } Buzz.`);
    }

    j++;
}