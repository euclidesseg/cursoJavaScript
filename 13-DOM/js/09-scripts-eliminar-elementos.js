// En este capitulo aprenderemos a elminiar elementos del html con el DOM
// Existen dos formas de hacerlo una es eliminar el elemento por si mismo, 
// y la otra es eliminar el elemento desde el padre

let primerEnlase = document.querySelector(`a`);
// primerEnlase.remove();
// si vemos al documento veremos que ya no aparece en el menu de navegacion
console.log(primerEnlase);

// elmininar desde el padre
let navegacion = document.querySelector(`.navegacion`);
console.log(navegacion.children)
navegacion.removeChild(navegacion.children[1])
// si vemos nuevamente al documento veremos que ya no aparece ayuda en el menu de navegacion
// porque se elimino el segundo elemento