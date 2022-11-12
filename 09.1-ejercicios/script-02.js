// Hacer una función que reciba una string y retorne la misma string pero agregando después de cada caracter su í­ndice correspondiente.
// Es decir, que retorne la misma string transformada de la siguiente
let string = `desnarisorejada`
let ocurrencias = 0;
let indices = []

function parametros(string) {
let acumulador = "";
  for (let i = 0; i < string.length; i++) {
    indices.push(i);
    acumulador = acumulador + string.substring(i, i+1) + "" + indices[i];
  }
  return acumulador;
}
 
let resultado = parametros(string);
console.log(resultado)
