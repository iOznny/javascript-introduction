// Forof - Itera sobres arreglos

const slopes = ['Homework', 'Eat', 'Project', 'Study Javascript'];

const shoppingCart = [
    { name: 'A', precio: 10 },
    { name: 'B', precio: 20 },
    { name: 'C', precio: 30, discount: true },
    { name: 'D', precio: 40, discount: true },
    { name: 'E', precio: 50 },
    { name: 'F', precio: 60 },
    { name: 'G', precio: 70 },
    { name: 'H', precio: 80 },
    { name: 'I', precio: 90 },
    { name: 'J', precio: 100 },
];

for(let sl of slopes) {
    console.log(sl);
}

for(let p of shoppingCart) {
    console.log(p.name);
}
