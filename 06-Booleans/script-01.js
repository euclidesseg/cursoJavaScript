// los booleans solo estan asociados a dos valores true o false si se le pone el valor como string no va a tomar el valor
// de booleans 

const booleans1 = true;
const booleans2 = false;
const booleans3 = "true"

console.log(`${booleans1 !== booleans2}`);
console.log(`${booleans1 === booleans3}`);

console.log(typeof booleans2);

// esta otra forma de declarar booleans ya la hemops visto al momento de declarar strings
const booleans4 = new Boolean(true);
console.log(booleans4);