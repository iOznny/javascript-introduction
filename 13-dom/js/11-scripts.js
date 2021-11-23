const btn = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btn.addEventListener('click', show);

function show() {
    // Checking class in element
    if (footer.classList.contains('activo')) {        
        footer.classList.remove('activo');
    } else {
        footer.classList.add('activo');
    }
}
