// En este capitulo aprendemos a usar el iterador for IN
// A diferencia del for of que itera sobre arreglos el for in itera sobre objetos


let automovil = {
    Nombre: `masda`,
    Año: 2022,
    motor: `6.0`
};

for(let propiedades in automovil){
    console.log(propiedades);
    // Si quiero solo las propiedades
    console.log(`${automovil[propiedades]}`);
}

// con ecmascript 7 hay otra forma de acceder a las propiedades y valores de un objeto

for(let [propiedad, valor] of Object.entries(automovil)){
    console.log(propiedad);
    console.log(valor);

}