// fin crea un nuevo arreglo basado en la condicion que se esta revisando 
// .find me retorna el primer elemento que cumpla la condicion a diferencia de filter

let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
]; 


// Con un forEach
let resultado = ``;
carrito.forEach((producto, indice) => {
    console.log(indice, producto)
    // calidar si hay un producto con el nombre celular iphon y agregar ese objeto a una variable
    if(producto.nombre === `celular iphon`){
        resultado = carrito[indice]
    }
})
console.log(resultado)



// con .find
let resultado2 = carrito.find((producto) => {
    return producto.nombre === `celular iphon`
})
console.log(resultado2);

