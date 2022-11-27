// .concat me permite juntar dos arreglos en uno solo

let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
];
let carrito2 = [
    { nombre: `carro`, precio: 50000 },
    { nombre: `Moto`, precio: 1000 },
    { nombre: `avion`, precio: 100000 },
    { nombre: `bisicleta`, precio: 200 },
    { nombre: `patineta`, precio: 100 },
    { nombre: `camion`, precio: 4000 }
];

// con .concat 
let carrito3 = carrito.concat(carrito2) // si tengo otro arreglo solo es ponerle coma y el nombre del arreglo
console.table(carrito3)

//con spred Operator
let carrito4 = [...carrito2, ...carrito]//el orden de los spred importan mucho
console.table(carrito4);