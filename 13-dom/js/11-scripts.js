const btn = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btn.addEventListener('click', show);

function show() {
    // Checking class in element
    if (footer.classList.contains('activo')) {        
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}
