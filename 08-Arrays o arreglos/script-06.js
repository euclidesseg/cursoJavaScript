
// En este capitulo aprendemos crear un nuevo arreglos con spread operator(...)
/* En javascript hexisten diferentes funciones para arrays que hacen lo mismo unas se les conoce 
 * como declarativas y otras como declarativas en el capitulo anrerior con push y onshif vimos formas imperativas
 * en las que los metodos push y onshif escriben directamente dobre el arreglo, lo modifica y modifica los datos*/


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

let resultado;
resultado = [...carrito, producto]
// lo que se hace es, tomar en la variable resultado se pega el arreglo carrito y a ese arreglo se le da el objeto producto
// para que asi el arreglo siga vacio y no se toca para nada.
console.table(resultado);
console.table(carrito);