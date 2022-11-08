
/* Hacer un programa que calcule la suma de los N primeros numeros naturales
 * donde N es el numero limite ingresado */
let limite = prompt(`Ingrese el numero limite para la suma `);
let totalSuma = 0;

for(let i = 0; i < Number.parseInt(limite); i ++){

   totalSuma = totalSuma + i
}
console.log(totalSuma);