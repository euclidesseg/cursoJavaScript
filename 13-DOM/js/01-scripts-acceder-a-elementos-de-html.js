// Ahora veremos como acceder a elementos dentro de un documento html
// Lo mas importante es que en javascript con el DOM tenemos acceso a un objeto que se llama Document

// Document es basiamente todo el html que tenemos en nuestro proyecto

let elemento;

elemento = document;
// Siempre se va usar document para seleccionar un elemento del html
elemento = document.all;
// Que seleccione todos los elementos que conforman el hml
elemento = document.head;
// head se va a referir a la parte superior del documento donde estan las etiquetas metas
// y los linsk en general
elemento = document.domain;
// Seleccionar el dominio actual
elemento = document.forms;
// Acceder a los formularios del elemento
elemento = document.forms[0]
// Accediento al primer elemento ya que nos retorna un arreglo y puedo acceder a ellos
// por medios del indice
elemento = document.forms[0].id;
// accediendo al un id si lo hay
elemento = document.forms[0].method
// accediento al metodo
elemento = document.forms[0].classList;
// accediendo a cada una de las clases del formulario
elemento = document.forms[0].action;

elemento = document.links;
// eso me retorna un arreglo con todos los enlaces agregados como elementos
elemento = document.links[15].href
// seleccionando un indice del arreglo
elemento = document.images;
// para saber cuantas imagenes estamos uzando en nuestro proyecto
elemento = document.scripts


console.log(elemento);