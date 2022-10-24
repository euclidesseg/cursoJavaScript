// En este capitoulo veremos los metodos repeat y split 

// Repeat permite repetir una cadena de texto 
const producto = (`Monitor de 20 pulgadas `).repeat(3);
// A diferencia de los demas metodos que hemos visto este metodo se pone despues de la cadena de texto y no en el console.log
console.log(producto);

const texto = (`en promocion `).repeat(3);
console.log(` ${producto} ${texto} !!!`);

// Si le paso a repeat un numero que no ees entero lo que hace es redondear ese numero 

// Split para dividir un string
const actividad = (`Estoy aprendiendo Javascript Moderno`);
console.log(`${actividad}`.split(` `));
// Le doy como parametro el espacio para que cada una de las palabras de la cadena me las separe por el espacio que tiene
// la cadena

// Es util en caso de que tenga un listado de recetas o una lista de hobbies

const hobbies = (`Leer, caminar, listen to music, write, aprender a programar`);
console.log(`${hobbies}`.split(`, `));

const tweet = (`Aprediendo JavaScript #JSModernoConJuan`);
console.log(`${tweet}`.split(`#`))