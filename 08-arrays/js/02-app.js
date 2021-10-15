const numbers = [10, 20, 30, 40, 50, [1, 2, 3]];
console.log('Numbers', numbers);
console.table(numbers);

// Access to array
console.log('Access position 0:', numbers[0]);
console.log('Access position 2:', numbers[2]);
console.log('Access position unknown:', numbers[10]);
console.log('Access position in other array:', numbers[5][1]);