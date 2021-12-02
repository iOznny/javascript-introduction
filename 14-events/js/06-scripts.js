// Event Bubbling

const card = document.querySelector('.card');
const info = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// stopPropagation(): Permite evitar el evento bubbling

card.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click card');
});

info.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click info');
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click titulo');
});