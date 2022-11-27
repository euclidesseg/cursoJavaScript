// para poder usar every todos los elementos de un arreglo deben de cumplir esa condicion para retornar un true


let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
];

let resultado = carrito.every((producto) => producto.precio < 2000)
// nos retornara true porque todos los resultados son menores a 2000
console.log(resultado);