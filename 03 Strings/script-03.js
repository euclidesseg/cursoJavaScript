// En este capitulo aprenderemos a unir o concatenar dos variables en js

const producto = "monitor 20\" ";
const precio = " 20 USD";
// La primera forma de concatenar es el metodo .concat
// console.log(producto.concat(precio));

// Tambien le puedo concatenar un string 
console.log(producto.concat(" En descuento"));

// Otra forma de concatenar es con el signo mas +
console.log(producto + "con un precio de " +precio + " en descuento  ");

// Veamos otra forma de concatenar
console.log("El producto " + producto + "tiene un precio de " + precio + " y se encuentra den descuento");

// Veamos la ultima forma de concatenar variables que es la de egmascript 6
console.log(`el producto ${producto} tiene un precio de $${precio} y esta en descuento`);
