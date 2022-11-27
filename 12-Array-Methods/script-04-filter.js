// filter crea un nuevo arreglo vasado en el parametro que es evaluado
// Permite hacer muchas operaciones sobre los arreglos
let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
]; 

resultado = carrito.filter((producto) =>
    // la siguiiente linea perteneceria a una conicion
    producto.precio > 400

)
console.table(resultado);//me retorna unnuevo arrego con los elementos cuyo precio sea mayor a 400

// una funcion normal
resultado2 = carrito.filter(function(producto){
   return producto.nombre === `consola de videojuegos`;
})
console.table(resultado2);

// Como podemos ver tambien podemos aplicar includ para buscar solo una palabra
// clave dentro del elemento del arreglo
resultado3 = carrito.filter((producto) => {
    return producto.nombre.includes(`45`) 
 })
 console.table(resultado3);


//  Ahora podemos sacar del arrego una palabra un elemento tal cual como 
// sacar un producto de un carrito de compra
 resultado4 = carrito.filter((producto) => {
    return producto.nombre !== `tablet samsung` 
    // me retorna doto el array menos el de la condicion
 })
 console.table(resultado4);