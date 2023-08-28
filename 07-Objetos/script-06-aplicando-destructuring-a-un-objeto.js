
// En este capitulo aprenderemos como aplicar destructuring a un objeto anidado

const producto ={
    Nombre: "robot",
    disponible: true,
    precio: `$` + 20000,

    informacion:{ // Un objeto dentro del objeto principal 
        medidas:{ // Un objeto dentro del segundo objeto 
            peso: "20kg",
            medida: "20 pulgadas"
        },
        fabricacion:{ // Oro objeto dentro del sefunfo objeto 
            pais: "china",
            fecha: "2022"
        } 
    }
}
// const{Nombre, informacion, informacion:{fabricacion}} = producto;
// La primera palabra informacion no es una variable la siguiente si es una variable 
// console.log(Nombre);
// console.log(informacion);
// console.log(fabricacion);

// si quiero traer una propiedad del objeto fabricacion hago lo siguiente
const{Nombre, precio,informacion, informacion:{fabricacion:{fecha}}} = producto;
console.log(`Nombre    = ${Nombre}`);
console.log(`Peecio    = ${precio}`);
console.log(informacion);// accedo a la variale informacion que ha sido desestructurada
console.log(`Fecha-fab = ${fecha}`);
// console.log(fabricacion);
// Y ya fabricacin no es una variable porque estoy indicando que quiero extraer especificamente a la propiedad pais de ese objeto
// Por lo que console.log(fabricacion); me dara error

const {fabricacion:{pais}}= producto.informacion;
console.log(`Pais      = ${pais}`);
// De esta forma ingreso extraigo una propiedad de un objeto anidado sin pasar por el primero