// En este capitulo estaremos viendo como acceder a los valores de un objeto y asignarlos a una variable

const producto ={
    Nombre: "robot",
    disponible: true,
    precio: `$` + 20000
}
console.log(producto.Nombre);

// si quiero asignar ese valor a una propia variable hago lo siguyiente
// const apodo = producto.Nombre;
// console.log(`${apodo}`)
// Ahora esta era la manera antigua de hacerlo gracias a ecmascript ahora lo hacermos con Destructuring

// Destructuring
const{Nombre} = producto;
const{disponible, precio} = producto;
console.log(Nombre);
console.log(disponible);
console.log(precio);
