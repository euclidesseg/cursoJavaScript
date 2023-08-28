// Traversing es recorrer el dom es decir entrar a un elemento y poder acceder los hijos
// sigientes de ese elemento

// En javascript todo esta conectado el document pero la forma en la que te vas a mover 
// por los elementos se le conoce como traversing the DOM

// let navegacion = document.querySelector(`.navegacion`);
// console.log(navegacion);
// console.log(navegacion.firstElemtnCild); // trae el primer elemento
// console.log(navegacion.lastElemtnCild); // trae el ultimo elemento
// // En javascript a los enlaces se les conoce como nodos la forma de acceder a ellos es 
// // de la siguiente forma

// console.log(navegacion.childNodes);// Los espacios en blanco son conciderador elementos
// // los elementos text que retorna el nodelist son los espacios o saltos de linea en el html
// // es decir los espacios o los saltos de linea entre las etiquetas a deberian estar 
// // una delante de la otra pero esto me desordena el codigo html 

// //Exite otra forma alternativa para solucionar ese detalle 
// console.log(navegacion.children); //Me lista elementos reales
// console.log(navegacion.children[3], navegacion.children[3].textContent); //Me lista el elemento en la posicion 3 y su texto


// veamos un ejemplo con card que tine mas elementos
let card = document.querySelector(`.card`);
console.log(card.children[1].children);
// estamos naveganso por los diferenteese elementos hijos de un elemento y esta forma 
// con children es lo que me va a permitir hacerlo

// Acceder al titulo del primer card con children y modificarlo
console.log(card.children[1].children[1].textContent);
card.children[1].children[1].textContent = `Musica vallenata desde traversing the DOM`
console.log(card.children[1].children[1].textContent);

// // cambiar la imagen con traversing 
// card.children[0].src = `img/hacer4.jpg`



// Hemos estando accediendo al hijo desde el padre pero con javascript y el Dom tambien 
// podemos acceder al padre mas arriba del html

// traberding del hijo al padre

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement);

// // Ahora veremos otra forma forma para acceder a elementos hermanos

console.log(card.nextElementSibling.textContent)// nos selecciona el segundo elemento
// console.log(card.nextElementSibling.nextElementSibling)// nos selecciona el segundo elemento
// // nextElementSibling va a ir al siguiente y al siguiente elemento del mismo nivel


// // de esta forma tomamos el ultimo card
//  let ultimoCard = document.querySelector(`.card:nth-child(4)`)
//  console.log(ultimoCard.previousElementSibling); // previousElementSibling se regresa
//                                                  // un elemento antes