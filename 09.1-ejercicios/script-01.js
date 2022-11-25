//Hacer una función que reciba dos parámetros del tipo string.
//La función deberá retornar la cantidad de apariciones que tiene el segundo parámetro en el primer parámetro. Ejemplo:
let cadena = `contar cuantas veces aparece la a en esta cadena`
let criterio = `a`
let ocurrencias = 0;

function s(parameter1, parameter2) {
  for (let i = 0; i < parameter1.length; i++) {
    let acumulador = "" + parameter1.substring(i, i+1);
    if(acumulador === parameter2){
        ocurrencias = ocurrencias + 1;
    }
  }
  return ocurrencias;
}
 

let resultado = parametros(cadena, criterio);
console.log(`La cadena "${cadena}" tiene la letra ${criterio} repetida ${resultado} veces`)
