
// En este capitulo veremos algunos problemas y curiosidades que suelen suceder con los objetos

const producto ={
    Nombre: "robot",
    disponible: true,
    precio: `$` + 20000
}

producto.disponible = false;
console.log(producto);

// Una propiedad o variable que esta dentro de un objeto const si se pude reescribir o reasignar