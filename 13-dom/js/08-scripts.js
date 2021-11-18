// Traversing the DOM
const navegation = document.querySelector('.navegacion');

console.log(navegation);
console.log(navegation.firstElementChild);
console.log(navegation.lastElementChild);
// console.log(navegation.childNodes);
// console.log(navegation.children);

// console.log(navegation.children[1].nodeName);
// console.log(navegation.children[0].nodeType);

const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'New heading form traversing the dom';
card.children[0].src = './img/hacer2.jpg';


// Traversing the Children to Parent
//console.log(card.parentNode);
//console.log(card.parentElement);

// Select next element down
console.log(card.nextElementSibling);


// Select prevent element up
const lastCard = document.querySelector('.card:nth-child(4)');
console.log(lastCard.previousElementSibling);
