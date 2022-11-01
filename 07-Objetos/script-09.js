// En este capitulo veremos la forma de sellar un objeto para que no pueda ser modificado

"use strict"

// con use strict habilito el modo estricto para que no me permita crear variable sin darle el tipo
// Cuando se agrega la restriccion tambien se habilitan una serie de metodos para objetos
const producto ={
    Nombre: "robot",
    disponible: true,
    precio: `$` + 20000
}
Object.seal(producto); // A diferensia de freeze no se pueden agregar ni eliminar propiedades, pero si se pueden modificar las existenes
producto.disponible = false;
producto.Nombre = "teclado";
console.log(producto);
console.log(Object.isSealed(producto)); // me premite saber si un objeto esta sellado

const{Nombre} = producto;
console.log(Nombre);


