
// En este capitulo estaremos visndo como unir dos objetos

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

const resultado2 = {...producto, ...medidas};
console.log(resultado2);