// En este capitulo estaremos visndo como convertir Strings a numeros
const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(`${numero1}`);
console.log(Number.parseInt(numero1));

console.log(`${numero2}`);
console.log(Number.parseFloat(numero2));

// console.log(`${numero3}`);
// console.log(String.p(numero3)); // Dara error no es un numero


// Revisar si es un entero o no 
// Retornara un true o false
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero2));

