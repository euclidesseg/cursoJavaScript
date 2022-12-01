// Un id siempre va a ser unico es decir un id no va a estar repetido en dos etiquetas
// Vamos a selecionar nuestro formulario por medios de un id

let formulario = document.getElementById(`formulario`);
console.log(formulario);
// A diferencia de getElementByClassName .getElementById si me trae toda la etiqueta
// con su contenido

let noexiste = document.getElementById(`noexiste`);
console.log(noexiste);

// a diferencia de getElementByClassName que nos retornaba una colecion de html vacia
// getElementByid nos retorna un null 

// si tengo dos id iguales getElementById nos va a retornar el primero que encontremoos 
// ya que va a retornar maximo un resultado