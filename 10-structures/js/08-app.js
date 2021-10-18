const authenticated = true;

if (authenticated) {
    console.log('Usuario authenticated.');
}

const point = 550;

function checkPoints() {    
    if (point > 400) {
        console.log('¡Excelente!');
        return;
    } 
    
    if (point > 300) {
        console.log('Felicidades, buen puntaje.');
        return;
    }
}

checkPoints();