// En este capitulo aprendemos a usar forEach paa iterar un array

let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
];

// Iterando con forlup
for (let i = 0; i < carrito.length; i++) {
    console.table(`${carrito[i].nombre} - precio: ${carrito[i].precio}`);
}


// ahora veremos como iterar con foreach
// A tener en cuenta:
// 1. se le debe dar un nombre a la funcion 
// 2. al forEach no se le cierran llaves solo se le habre y sierran parentesis

// carrito seria el plural de todo el arreglo que es sobre el cual correra el forEach
// y producto seria cada uno de los objetos que van dentro del arreglo 
carrito.forEach(function (producto) {
    // Debido a que estamos trallendo al tiempo cada objeto no es necesarioo tener la misma sintaxis que forlup
    console.table(`${producto.nombre} - precio: ${producto.precio}`);

})