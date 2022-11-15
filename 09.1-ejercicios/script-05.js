// Hacer una función que reciba un objeto y retorne un array con todos los valores de sus propiedades cómo elementos.
let array = [];
let devolver =  (objeto)=>{
    array.push(Object.values(objeto));
    return array
}

let resultado = devolver({a: `inteligencia`, b: `artificial`, c: `python`});
console.log(resultado);