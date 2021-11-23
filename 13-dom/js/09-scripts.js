// Delete element
const firstLink = document.querySelector('a');
console.log(firstLink);
//firstLink.remove();

// Delete form parent
const navegation = document.querySelector('.navegacion');
console.log(navegation.children);
navegation.removeChild(navegation.children[2]);
