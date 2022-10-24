// En este capitulo estaremos viendo varios metodos tales como la dorma de reemplazar el texto de una cadena

const producto = (`Monitor de 20 pulgadas`);

// .replace para reemplazar
console.log(producto);
console.log(producto.replace(`pulgadas`,`"`));
console.log(producto.replace(`Monitor de 20 pulgadas`,`Monitor Curvo de 20"`));

// Y de esta  forma ya remplazamos los una palabra en la cadena este metodo es util cuando vamos a modificar en una
// Base de datos 

// .slice para cortar
console.log(producto.slice(0, 8));
// Que me muestre o imprima solamente desde la letra 0 hasta la 8

console.log(producto.slice(8));
// Si solo le paso un valor va a recorrer esas 8 primeras letras y me mostrara lo que este despues de las 8

console.log(producto.slice(2, 1));
// Si el primer numero es mayor al segundo no imprimaira nada 


// Alternativa a slice
// Metodo .substring
console.log(producto.substring(0, 8))
// esta alternativa es mucho mas inteligente ya que esta si le pones un numero mayor al principio si se imprimira
console.log(producto.substring(2, 1))

let usuario = `Euclides`
console.log(usuario.substring(0, 1))






