
// En este capitulo estaremos viendo como eliminar elementos de un arreglo

let carrito = [];

const producto = {
    nombre: `Computador`,
    precio: 5000000
}

const producto2 = {
    nombre: `Celular`,
    precio: 1000000
}
const producto3 = {
    nombre: `tablet`,
    precio: 500000
}
const producto4 = {
    nombre: `tv`,
    precio: 500000
}


carrito.push(producto2);
carrito.push(producto);
carrito.unshift(producto3);
carrito.unshift(producto4);


console.table(carrito);

// Eliminando el ultimo elemento de un arreglo
// carrito.pop();
// console.table(carrito);


// Eliminando el ultimo elemento de un arreglo
// carrito.shift();
// console.table(carrito);


// Eliminar de entre el medio de un array
carrito.splice(1,1);
// toma dos parametros el primero desde que posision empezara a eliminara elementos el 2do cuantos elementos quiere eliminar 
console.table(carrito);