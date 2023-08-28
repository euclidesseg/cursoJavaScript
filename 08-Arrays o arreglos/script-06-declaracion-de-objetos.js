
// En este capitulo aprendemos crear un nuevo arreglos con spread operator(...)
/* En javascript hexisten diferentes funciones para arrays que hacen lo mismo unas se les conoce 
 * como imperativas y otras como declarativas en el capitulo anrerior con push y onshif vimos formas imperativas
 * en las que los metodos push y onshif escriben directamente sobre el arreglo, lo modifica y modifica los datos*/


/* Ahora vamos a veremos la forma declarativa, expresa la logica sin describir el flujo del codigo
 * no modifica la variable si no que crea una nueva*/



let carrito = [];
// Se inicia con un arreglo bacio porque inicial mente los carritos de compras son vacios y 
// en vace a las interacciones de lo ususarios se van llenando

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

let resultado;
resultado = [...carrito, producto,]
// Se esta creando una nueovo arreglo  que contiene una copia de los elementos de carrito y el objeto producto,
//  y ese nuevo arreglo  se almacena en la variable resultado.

// tambien puedo indicarle el orden de los elementos de la siguiente manera 
resultado = [producto2, ...resultado]
resultado = [producto3, ...resultado] // se agrega el poroducto 3 al inicio del carrito
console.table(resultado);
console.table(carrito);