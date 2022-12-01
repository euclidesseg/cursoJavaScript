// En este capitulo estaremos biendo lo que es querySelector
// querySelector actua similar en algunas cosas a getElementById
// me permite tambien seleccionar clases

let card = document.querySelector(`.card`)
// querySelector me va a retornar solo 1 elemento el primero que encuentra cuendo 
// existe mas de un elemento con el mismo id o clase

console.log(card);

let formulario = document.querySelector(`#formulario`)
console.log(formulario);

// podemos tener selectores espesificos como en css

let info = document.querySelector(`.premium .info`)
console.log(info);
// seleccione una clase prinsipal llamada primium y luego tome una clase ija
// de esa clase, llamada info

// Seleccionar el segundo card de ospedaje
let segundoCard = document.querySelector(`.hospedaje .card +.card`);
console.log(segundoCard);
// esta es una forma de seleccionar un segundo elemento mediante selectores hermanos

let segundocard = document.querySelector(`.hospedaje .card:nth-child(2)`);
// nth-child(2)  quiere desir que dentro de esa clase hospedaje hay mas de un elemento 
// y con 2 seleccionamos el segundo de 3 elementos
console.log(segundocard)


// Seleccionar elementos de html
let navegacion = document.querySelector(`nav`);
console.log(navegacion)