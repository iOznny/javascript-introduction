const header = document.querySelector('.contenido-hero h1');
console.log(header);

// Get text in header
console.log('innerText:', header.innerText);

// Text content in header
console.log('textContent:', header.textContent);

// Inner html in header
console.log('innerHTML:', header.innerHTML);

// Change dom in header
document.querySelector('.contenido-hero h1').textContent = 'New header';

const image = document.querySelector('.card img');
console.log(image);
image.src = 'img/hacer2.jpg';