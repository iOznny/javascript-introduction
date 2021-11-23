// Create element in dom
const link = document.createElement('a');

// Add text
link.textContent = 'Nuevo enlace';

// Add href
link.href = '/new-link';

// Add target
link.target = '_blank';

// Add attribute
link.setAttribute('data-link', 'new-link');

// Add class
link.classList.add('any-class');

// Set event click
link.onclick = myFunction;
//console.log(link);

function myFunction() {
    alert('Diste click');
}

// Add link in contect navegation
const navegation = document.querySelector('.navegacion');
navegation.appendChild(link); // appendChild: Colocar al final del content

//console.log(navegation.children);
navegation.insertBefore(link, navegation.children[1]); // insertBefore: (Valor, Position) Coloca el valor dependiendo la posicion



// Create card in DOM dinamic
const p1 = document.createElement('p');
p1.textContent = 'CONCIERTO';
p1.classList.add('categoria', 'concierto');
//console.log(p1);

const p2 = document.createElement('p');
p2.textContent = 'Concierto de Rammstein';
p2.classList.add('titulo');
//console.log(p2);

const p3 = document.createElement('p');
p3.textContent = '$800 por persona';
p3.classList.add('precio');
//console.log(p3);

// Create div with class info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(p1);
info.appendChild(p2);
info.appendChild(p3);
// console.log(info);

// Create imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid');
imagen.alt = 'Texto Alternativo';
// console.log(imagen);


// Create card
const card = document.createElement('div');
card.classList.add('card');

// Assign img
card.appendChild(imagen);

// Assign info
card.appendChild(info);

// Set new card in html
const container = document.querySelector('.hacer .contenedor-cards');
container.insertBefore(card, container.children[0]);
