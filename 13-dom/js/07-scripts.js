const header = document.querySelector('h1');

// Change background in h1 with css
// header.style.backgroundColor = 'red';
// header.style.fontFamily = 'Arial';
// header.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
console.log(card.classList);

// Add class
card.classList.add('new-class', 'two-class');

// Remove class
card.classList.remove('two-class');