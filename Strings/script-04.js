
const producto = "          monitor 20\" ";

console.log(producto);
console.log(producto.length);

// Todos los espacios esn blancos dentro de las comillas ya cuentan como una letra

// Esta es la primera forma para eliminar los espaacios al inicio de las cadenas
console.log(producto.trimStart())
// Este metodo me elimina los espacios al final pero me concerva los del inicio
console.log(producto.trimEnd())

// En llavascript tambien se puden crear cadenas de metodos y usamos este para eliminar espacios al inicio y final
console.log(producto.trimStart().trimEnd())

// Elimina en ambas direcciones 
console.log(producto.trim())
