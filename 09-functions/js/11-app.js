// Arrow Functions

// Declaration Function
const learning = function(theme) {
    console.log(`Learning ${ theme }`);
}
learning('Technology');

// Arrow Function
const learningArrow = (theme) => `Learning ${ theme }`;
const learningArrow2 = theme => `Learning ${ theme }`;

console.log(learningArrow('Javascript'));
console.log(learningArrow2('Javascript'));