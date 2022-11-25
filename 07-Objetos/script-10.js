
// En este capitulo estaremos viendo como unir dos objetos

const producto ={
    Nombre: "robot",
    disponible: true,
    precio: `$` + 20000,
}

const medidas = {
    peso: "20kg",
    medida: "20 pulgadas"
}

console.log(producto);
console.log(medidas);

// para unir dos objetos o mas existen dos formas mas usadas

const resultado = Object.assign(producto, medidas);
console.log(resultado);

// Esta forma se conoce como el spread operator
const resultado2 = {...producto, ...medidas};
console.log(resultado2);