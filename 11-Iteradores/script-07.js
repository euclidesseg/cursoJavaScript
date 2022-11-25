// En este capitulo aprendemos a usar el iterador forOF
// For ofitera sobre arreglo
let pendientes = [`tarea`, `Comer`, `Proyecto`, `Estudiar javascript`];

let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
];

for(let pendiente of pendientes){
    // Este for va iterando sobre el arreglo original y va asignando cada elemento a la variable pendiente, es decir,
    // pendiente se comporta como un nuevo arreglo
    console.log(pendiente);
}


for(let producto of carrito){
    console.log(`${producto.nombre}: ${producto.precio}`);
}