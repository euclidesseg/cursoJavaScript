let nav = document.querySelector(`.navegacion`);
// Registrar un eventlistener al selector

// nav.addEventListener(`click`, ejecutar);

// function ejecutar(){
//     console.log(`click en nav`);
// }

// mauseenter indica cuando se pone el mouse sobre el elemento navegacion
nav.addEventListener(`mouseenter`, () => {
    // este evento se activa con solo pasar el mouse
    console.log(`te paraste en la navegacion`);

    nav.style.backgroundColor = `red`;
});

// mouseout para indicar cuando se quit a el mouse de el menu de navegacion

nav.addEventListener(`mouseout`, () =>{
    console.log(`Saliendo del menu`);
    nav.style.backgroundColor = `blue`;
})

// mouseup para dar click y soltar el mouse se ejecuta solamente cuando sueltas el click
nav.addEventListener(`mouseup`, () =>{
    console.log(`soltando el click`);
    nav.style.backgroundColor = `tomato`;
})


// dblclick para desencadenar una accion con doble clik
nav.addEventListener(`dblclick`, () =>{
    console.log(`diste doble clik`);
    nav.style.backgroundColor = `magenta`;
})
