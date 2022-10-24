// En este capitulo estaremos visndo algunas funcionalidades deL objeto Math

let resultado;

// PI
resultado = (`${Math.PI}`);
console.log(`${resultado}`);

// Redondear
// lo redondea hacia su numero entero mas sercano en este caso es 3 pero si fuera 2.3 lo redondea a 2
resultado = (`${Math.round(2.8)}`);
console.log(`${resultado}`);

// Redondear hacia arriba siempre
resultado = (`${Math.ceil(2.1)}`);
console.log(`${resultado}`);

// Redondear hacia abajo
resultado = (`${Math.floor(2.9)}`);
console.log(`${resultado}`);


// Raiz cuadrada
resultado = (`${Math.sqrt(1600)}`);
console.log(`${resultado}`);

// Valor absoluto
resultado = (`${Math.abs(-150)}`);
console.log(`${resultado}`);

// Mayor valor
resultado = (`${Math.max(1500, 3000, 4000)}`);
console.log(`${resultado}`);

// Menor valor
resultado = (`${Math.min(1500, 3000, 4000)}`);
console.log(`${resultado}`);

// Potenciasion
resultado = (`${Math.pow(8,3)}`);
console.log(`${resultado}`);

// Aleatorio dentro de un rango cn math.floor y math.random
resultado = (`${Math.floor(Math.random() * 100)}`);
console.log(`${resultado}`);
