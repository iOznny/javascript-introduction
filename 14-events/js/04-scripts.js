// Events in form

const form = document.querySelector('#formulario');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e.target.method);
//     console.log(e.target.action);
// });


// Checking form with Declaracion de funcion
form.addEventListener('submit', checkForm);
function checkForm(e) {
    e.preventDefault();
    console.log(e.target.method);
    console.log(e.target.action);
}