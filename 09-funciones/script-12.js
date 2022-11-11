
// En este capitulo aprenderemos a usar un arrow function en con foreah y map


let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
];

carrito.forEach( producto => console.log(`${producto.nombre} - precio: ${producto.precio}`))
let nuevoArreglo = carrito.map( producto => `${producto.nombre} - precio: ${producto.precio}`)

console.log(nuevoArreglo);


