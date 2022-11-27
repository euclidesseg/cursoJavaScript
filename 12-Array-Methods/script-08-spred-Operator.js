// En este capitulo estaremos viendo los diferentes usos de spred operator dentro de un arreglo


let meses = [`enero`, `febrero`, `marzo`, `abril`, `mayo`];

let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
];

// Agregar un elemento al final del primer arreglo con spred

// let meses2 = [...meses,...`agosto`] // de esta forma solo agregaria un elemento por cada letra de la palabra o parametro

let meses3 = [...meses, `agosto`]  // esta seria la manera correcta al final 

let meses4= [`primer mes`,...meses]  // agregar al primcipio



// console.table(meses2);

console.table(meses3);

console.table(meses4);

console.table(meses);
// Lo mas importante es que esto no modifica el arreglo principal

// =====================================================
// AHORA VEAMOS COMO USAR SPRED OPERATOR CON ARREGLO DE OBJETOS

let producto = {nombre: `Disco duro`, precio: 300}
let carrito2 = [...carrito, producto]

console.table(carrito2);