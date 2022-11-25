// En este capitulo aprenderemos la estructura forEach 
// El forEach es ideal para recorrer arreglos va a ejecutarse al menos una vez por cada vez que halla elementos en el arreglo es decir,
// si hay 12 elemento se ejecuta 12 veces si hay 6 elementos se ejecuta 6 veces

let pendientes = [`tarea`, `Comer`, `Proyecto`, `Estudiar javascript`];

// El forEach recorre cada uno de los elementos del arreglo y los agrega al parametro pendiente de la funcion, luego de eso,
// debido a que el foreah va iterando sobre cada elemento se manda a imprimir cada elemento 
pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`);

    // Si le ponfogo otro parametro ese perteneceria al indice de cada elemento
})


let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
];

let nuevoArreglo2 = carrito.forEach( (producto) => {    // imprimira undefined porque foreach no permite retornar nada
    console.log( `${producto.nombre} - precio: ${producto.precio}`);

})
console.log(nuevoArreglo2) //no retorna nada porque foreach no crea un nuevo arreglo ni puede retornara nada



let nuevoArreglo = carrito.map((producto) => {
    return producto.nombre})
    
console.log(nuevoArreglo); //.map me retorna valores y me crea un nuevo arreglo 