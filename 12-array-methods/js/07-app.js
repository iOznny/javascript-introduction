// Concat
// El método concat() se usa para unir dos o más arrays. 
// Este método no cambia los arrays existentes, 
// sino que devuelve un nuevo array.

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'];
const months2 = ['Enero', 'Febrero'];
const months3 = ['Demo', 'Demo 2'];

// Concat
const months4 = months.concat(months2, months3, 'OTRO');
console.log('Concat', months4);

// Spread Operator
const res2 = [ ...months, ...months2, ...months3, 'OTRO' ];
console.log('Spread Operator', res2);