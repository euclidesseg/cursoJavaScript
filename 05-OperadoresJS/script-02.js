// En este capitulo estaremos viendo el signo ()==) para comparar entre dos numeros

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

console.log(`${numero1 == numero3}`);

// (==) este signo no discrimina entre string o numeros es por eso que si se compara entre numero1 y numero 2
// dara como resultado verdadero o true
console.log(`${numero1 == numero2}`);


// Comparador estricto (===) este operador si discrimina entre si es numero o string es decir se fija en el tipo de datos
// si se compara entre un numero y un string dara falso

console.log(`${numero1 === numero2}`);

// let nombre = `euclides`;
// let nombre2 = `euclides`;

// console.log(`${nombre == nombre2}`);

console.log(`${numero1 === Number.parseInt(numero2)}`);
// Y de esta manera lo convertimos a entero para que si lo reconozca como un nuemero entero y de true

// =====================================================================================
// Diferente de ...(!=)

const pasword1 = "admin";
const pasword2 = "Admin";

console.log(`${pasword1 != pasword2}`);

// Al igual que con el signo de comparacion (===) que me compara el tipode datos, pasa lo mismo con el de diferencia (!==) 
console.log(`${numero1 != numero2}`);
// Auque sean diferente tipo de datos dara false es decir, no son diferentes

console.log(`${numero1 !== numero2}`);
// Ahora dara true porque dicriminaa el tipo de datos




