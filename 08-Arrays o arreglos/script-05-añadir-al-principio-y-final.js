// En este capitulo aprendemos a añadir elementos al final o al primcipio del array

let meses = [`enero`, `febrero`, `marzo`, `abril`, [`mayo`, `junio`, `julio`, ]];


// Agregando un elemento al final de todo el arreglo
meses.push(`octubre`);

// Aregando un elmento al final del arregloa anidado
meses[4].push(`agosto`);
meses[4].push(`septiembre`);

// agregando un elemento al principio de un arreglo 
// El unshift desplaza todos los elementos un indice hacia adelante
meses.unshift(`primer mes`);
meses[5].unshift(`Otro primer mes`);
// console.table(meses);






/* CARRITO DE COMPRAS */

let carrito = [];
// Se inicia con un arreglo bacio porque inicial mente los carritos de compras son vacios y 
// en vace a las interacciones de lo ususarios se van llenando
// Le puedo agregar un objeto tambien a un arreglo

const producto = {
    nombre: `Computador`,
    precio: 5000000
}

const producto2 = {
    nombre: `Celular`,
    precio: 1000000
}
carrito.push(producto);
carrito.push(producto2);
console.table(carrito);