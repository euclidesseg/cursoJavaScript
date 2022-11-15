// Hacer una función que reciba un objeto el cual posee propiedades con valores de string y retorne una string cómo resultado de la concatenación
// de todos los valores de las propiedades del objeto.

let array = [];
let concatenar = (objeto) =>{
    let string = "";
    
    let valores = Object.values(objeto);
    for(let i = 0; i < valores.length; i ++){
        array.push(valores[i])
        string = string + array[i];
    }
    return string;
}
let resultado = concatenar({a: `h`, b: `o`, c: `l`, d:`a`});
console.log(resultado);