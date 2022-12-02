// En los capitulos anteriores estuvimo viendo como seleccionar y mostrar elementos del html
// en este capitulo veremos como modificarlos
// hay dos id iguales voy a eliminar uno por mala practica

let encabezado = document.querySelector(`.contenido-hero h1`);
console.log(encabezado);

// Acceder al texto del h1 
console.log(encabezado.innerText); // si en el css visivility: hidden  no lo va a encontrar
console.log(encabezado.textContent); // este si 
// Esta forma tambien me trae los espacios en blanco que tenga el texto
console.log(encabezado.innerHTML);
// Esta forma tambien se trae el html que tenga dentro la etiqueta html

// Cuando estamos usando este tipo de selectores tambien pouedo aplicar algo que se conoce
// como encadenamiento

let encabezado2 = document.querySelector(`.contenido-hero h1`).textContent;
console.log(encabezado2); // me trae directamente el contenido sin usar los metodos accesores

// ahora puedo tambien modificar el contenido de la siguiente manera
document.querySelector(`.contenido-hero h1`).textContent = `Un nuevo texto`;


// aparte de modificar textos tambien puedo modificar imagenes

let imagen = document.querySelector(`.card img`);
console.log(imagen);

imagen.src = `img/menu.png`
