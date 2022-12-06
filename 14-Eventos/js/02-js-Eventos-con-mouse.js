let nav = document.querySelector(`.navegacion`);
// Registrar un eventlistener al selector

// nav.addEventListener(`click`, ejecutar);

// function ejecutar(){
//     console.log(`click en nav`);
// }

// masuenter indica cuando se entra a la navegacion
nav.addEventListener(`mouseenter`, () => {
    // este evento se activa con solo pasar el mouse
    console.log(`te paraste en la navegacion`);
});