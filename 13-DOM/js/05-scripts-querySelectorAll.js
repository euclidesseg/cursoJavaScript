// En este capitulo aprenderemos lo que es el queySelectorAll
// la sintaxis para selectores es basicamente la misma que css 
// la diferencia entre querySelectorAll y querySelector es que querySelector retorna
// el primer elemento y maximo uno y querySelectorAll retorna todos los elemetos que cimplan
// la condicion del selector

let card = document.querySelectorAll(`.card`);
console.log(card)
// Retorna un nodeList que es basicamaente  un arreglo y es que a los elementos que retorna
// un seelctor se le conocen com nodos

let formulario = document.querySelectorAll(`#formulario`);
console.log(formulario);

// Si un elemento no existe nos retorna un nodeList vacio