// En este capitulo aprenderemos a usar map para iterar un arreglo
// .map me crea un nuevo arreglo a partir de uno ya existente

let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
];

carrito.forEach(function (producto) {
    // Debido a que estamos trallendo al tiempo cada objeto no es necesarioo tener la misma sintaxis que forlup
    // console.table(`${producto.nombre} - precio: ${producto.precio}`);

})
let nuevoArreglo = carrito.map(function (producto) {
    return `${producto.nombre} - precio: ${producto.precio}`;

})
let nuevoArreglo2 = carrito.forEach(function (producto) {    // imprimira undefined porque foreach no permite retornar nada
    return `${producto.nombre} - precio: ${producto.precio}`;

})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

// la sintaxis entre map y forEach es basicamente la misma 
// la diferencia entre map y forEach es que .map crea un nuevo arreglo  y forEach no