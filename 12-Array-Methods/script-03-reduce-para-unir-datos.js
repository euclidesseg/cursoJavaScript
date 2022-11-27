// En este capitulo aprendemos reduce
// reduce es un array method cuya funcion es tomar una gran cantidad de datos unirlos y entregar
// un resultado

let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
]; 

// con un foreach para obtener el valor total de todos los productos
let total = 0;
carrito.forEach((elementos) => {
    console.log(elementos.nombre);
     total = total + elementos.precio;
})
console.log(total)

// con un reduce
let resultado = carrito.reduce((total, producto) =>
    total = total + producto.precio, 0
    // total indica que es el indice 0 donde va a comenzar a iterar el metodo
    // el 0 al final indica el valor sobre el cual inicia es decir,
    // el valor de total se asigna a 0 y este a la variable resultado
    // donde esta el 0 lo puedo inicializar en cualquier numero
)
console.log(resultado);