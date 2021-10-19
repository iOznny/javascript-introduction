// Fizz buzz - 100 Números

// 3, 6, 9, 12... fizz
// 5, 10, 15, 20... buzz
// 15, 30, 45 ... Fizzbuzz

for (let i = 1; i < 100; i++) {
    if (i % 15 === 0) {
        // Multiple of 3 and 5
        console.log(`${ i } Fizzbuzz.`);        
    } else if (i % 3 === 0) {
        // Multiple of 3
        console.log(`${ i } Fizz.`);        
    } else if (i % 5 === 0) {
        // Multiple of 5
        console.log(`${ i } Buzz.`);
    }
}