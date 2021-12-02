// Delegation stop to event bubbling

const card = document.querySelector('.card');

card.addEventListener('click', (e) => {
    if (e.target.classList.contains('card')) {
        console.log('Click in Card');
    }

    if (e.target.classList.contains('titulo')) {
        console.log('Click in Titulo');
    }

    if (e.target.classList.contains('precio')) {
        console.log('Click in Precio');
    }
});