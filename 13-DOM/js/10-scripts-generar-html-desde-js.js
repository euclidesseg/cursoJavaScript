// En este video estaremos viendo como generar html desde javascript

// agregar un nuevo enlace al menu de navegacion
// primra forma de crear elementos
let enlace = document.createElement(`a`);
enlace.textContent = `Acerca de`
// agregando enlace al nuevo
enlace.href = `https://www.google.com/`;
// agregando clase al nuevo elemento
enlace.classList.add(`acerca-de`);
// agregando id al nuevo  elemento
enlace.id = `acerca`;  
// agregando target
enlace.target = `_blank`;
// console.log(enlace)

// agregando el nuevo elemento al DOM
// traemos el menu de navegacion donde vamos a crear el nuevo enlace
let navegacion = document.querySelector(`.navegacion`);
// agregamos el nuevo enlace al menu de navegacion
// navegacion.appendChild(enlace) 
// appendChild agrega un nuevo elemento al una etiqueta pero la pone al final
// para agregarlo en medio de un elemento usamoos 
navegacion.insertBefore(enlace, navegacion.children[1]); 
// insertBefore significa insertar antes el primer argumento es lo que vamos a insertar el
// el seundo es traer la pocision mediante la navegacion y el children con la pocicion
console.log(navegacion);

// traer el contenedor de las cards para crear una nueva y agregarla
let contenedor = document.querySelector(`.hacer .contenedor-cards`)
console.log(contenedor)
// crear un card
let nuevoCard = document.createElement(`div`);
nuevoCard.classList.add(`card`);
// agregando una imagen a card
let img = document.createElement(`img`);
// agregoando la imagen para la card
img.src = `img/programar.jpg`;

// agregando el div para la informacion
let info = document.createElement(`div`);
info.classList.add(`info`);

let categoria = document.createElement(`p`);
categoria.classList.add(`categoria`, `concierto`);
categoria.textContent = `Actividad`;

let titulo = document.createElement(`p`);
titulo.classList.add(`tutilo`);
titulo.textContent = (`Programa con los mejores`);

let precio = document.createElement(`p`);
precio.classList.add(`precio`);
precio.textContent = `total mente gratis`;

info.appendChild(categoria);
info.appendChild(titulo);
info.appendChild(precio);

nuevoCard.appendChild(img);
nuevoCard.appendChild(info);

console.log(nuevoCard);
contenedor.appendChild(nuevoCard);

