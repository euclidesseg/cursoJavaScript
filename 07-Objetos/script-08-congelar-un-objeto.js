// En este capitulo veremos la forma de congelar un objeto para que no pueda ser modificado

"use strict"

// con use strict habilito el modo estricto para que no me permita crear variable sin darle el tipo
// Cuando se agrega la restriccion tambien se habilitan una serie de metodos para objetos
const producto ={
    Nombre: "robot",
    disponible: true,
    precio: `$` + 20000
}
Object.freeze(producto); // no me permite modificar, agregar o eliminar propiedades al objeto
producto.Nombre = "teclado";
console.log(producto);

console.log(Object.isFrozen(producto)); // me premite saber si un objeto esta congelado para que funcione debo conentar las de arriba


