
// Hacer una función que reciba un array y retorne otro array con la misma cantidad de elementos,
//  pero que cada elemento sea el tipo de dato del array original.

let elementos = "";
let transformar  = (array) =>{

    array.forEach(element => {
        elementos = elementos +" " + typeof(element);
    });
    return elementos;

}

let retorno = transformar([1, `artificial`, false, [1,2,1]]);
console.log(retorno);