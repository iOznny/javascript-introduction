// Forin - Itera sobre objetos

const vehicle = {
    model: 'Camaro',
    year: 2021,
    motor: '6.0'
};

const slopes = ['Homework', 'Eat', 'Project', 'Study Javascript'];

// for (const v in vehicle) {
//     console.log(`${ vehicle[v] } `);
// }

for (let [ key, value ] of Object.entries(vehicle)) {
    console.log(key);
    console.log(value);
}