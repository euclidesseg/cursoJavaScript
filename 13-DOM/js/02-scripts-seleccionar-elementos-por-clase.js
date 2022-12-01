// Seleccionar elementos por clases getElementByid
// En el html hay un etiqueta header con la clase header podemos crear una etiqueta

let header = document.getElementsByClassName(`header`);
console.log(header);
// Eso va a tomar solamente la etiqueta mas no el contenido de la misma
// Esto va a discriminar entre mayusculas y minusculas es decir, si se pone en mayusculas
// Eso no funcionara

let hero = document.getElementsByClassName(`hero`);
console.log(hero);


// Si las clases se repiten mas de una vez
let contenedores = document.getElementsByClassName(`contenedor`);
console.log(contenedores);
// Esto me llenaria un htmlcollection con todos las clases que existan 


// Si una clase no existe en el documento
let noexiste = document.getElementsByClassName(`Noexiste`);
console.log(noexiste)
// Me va a retornar un htmlcollection vacio