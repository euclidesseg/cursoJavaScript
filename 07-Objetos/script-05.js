
// En este video estaremos viendo como crear objetos dentro de objetos
const producto ={
    Nombre: "robot",
    disponible: true,
    precio: `$` + 20000,

    informacion:{ // Un objeto dentor del objeto principal 
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

    console.log(producto);
    console.log(producto.informacion);
    console.log(producto.informacion.medidas.peso);
    console.log(producto.informacion.fabricacion.pais);