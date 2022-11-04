// En este capitulo aprenderemos a acceder a los elementos de un array

let numeros = [10, 20, 30, 40, 50, [1,2,3,]];
// Otra forma de dar acceso para ver esos valores es console.table para darme el indice y para darme el valor 
console.log(numeros);
console.table(numeros);

// Accediendo a un valor especifico 
// Para acceder a un valor de un arreglo se hace de acuerdo a su pocicion o indice, veamosla 
console.log(numeros[4]);

// si pongo un indice aque no existe me daldra un undefined
console.log(numeros[20]);
// para acceder a un arreglo que esta dentro de un arreglo
console.table(numeros[5][1]);
// la posicion 5 seria el arreglo como valor y el 1 seria una sbposicion o la posision del arreglo como valor