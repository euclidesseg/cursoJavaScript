// en este capitulo estaremos viendo comop acceder a los valores de un objeto 

const producto ={
    Nombre: "robot",
    disponible: true,
    precio: `$` + 20000
}
console.log(producto.Nombre);
console.log(producto.disponible);
console.log(producto.precio);

// Esta es otra forma de hacer imprimir un valor de un objeto
console.log(producto[`Nombre`]);