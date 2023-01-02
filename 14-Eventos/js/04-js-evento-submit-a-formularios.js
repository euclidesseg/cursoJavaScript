// en este capitulo aprendemo sobre el evento cubmit
const formulario = document.querySelector(`#formulario`);


// formulario.addEventListener(`submit`, (e) => {
//     e.preventDefault();
//     // Con e.preventDefault() se previene la accion por defecto que tiene el formulario
//     console.log(`Buscando...`)
//     console.log(e.target.action);
// });


// Ahora hacemos lo mismo pero con una declaracion de funcion
formulario.addEventListener(`submit`, validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    // Con e.preventDefault() se previene la accion por defecto que tiene el formulario
    console.log(`Buscando...`)
    console.log(e.target.action);
}
