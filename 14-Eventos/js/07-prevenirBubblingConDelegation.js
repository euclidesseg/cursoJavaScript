// En este capitulo aprenderemos a prevenir el Bubbling con Delegation en funcion del elemento que se 
// precione

// Para este ejemplo solo necesitamos un solo card
let cardDiv = document.querySelector(`.card`)

cardDiv.addEventListener(`click`, (event) => {
    // console.log(event.target);
    // Recordemos que el event.target nos trae el emenento al que le estamos dando click
    if(event.target.classList.contains(`titulo`)){
        console.log(`diste click en titulo`);
    }
    if(event.target.classList.contains(`precio`)){
        console.log(`diste click en precio`);
    }
    if(event.target.classList.contains(`card`)){
        console.log(`diste click en card`);
    }
});
