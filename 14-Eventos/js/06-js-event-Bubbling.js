// En este capitulo veremos lo que es el event Bubbling
// El Event Bubbling se produce cuando se preciona en un evento pero este eveneto se propaga por otros
// lugares dando resultados que no son los esperados.

let cardDiv = document.querySelector(`.card`)
let infoDiv = document.querySelector(`.info`)
let tituloDiv = document.querySelector(`.titulo`)

cardDiv.addEventListener(`click`, (event) => {
    event.stopPropagation(); // esto me detiene la propagacion
    console.log(`Click en card`);
})
infoDiv.addEventListener(`click`, (event) => {
    event.stopPropagation();
    console.log(`Click en info`);
})
tituloDiv.addEventListener(`click`, (event) => {
    event.stopPropagation();
    console.log(`Click en  titulo`);
})

// debido a que los titulos y la info esta dentro de card cuando porecione sobre 
// el titulo se va a disparar los demas eventos que estan registrados