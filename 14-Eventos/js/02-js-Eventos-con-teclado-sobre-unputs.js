// En este capitulo estaremos aprendiendo algunos eventos con el teclado cuando llenamos un 
// formulario

const busqueda = document.querySelector(`.busqueda`);

// key down para ejecutarse cuando estas escibiendo sobre el input
// busqueda.addEventListener(`keydown`, keydown);

// function keydown(){
//     console.log(`estas ecribiendo.....`);
// }


// // keyup para ejecutarse cuando se preciona y se suelta una tecla
// busqueda.addEventListener(`keyup`, () => {
//     console.log(`Acabas de soltar la tecla del teclado`);
// });


// // blur para desencadenar una accion cuando das click fuera del input luego estar escribiendo 
// // es ideal para validaciones, por ejemplo, si el correo no tien un formato establecido

// busqueda.addEventListener(`blur`, () => {
//     console.log(`saliste del input`);
// });

// // copy para ejecutar una accion cuando copias el texto del input
// busqueda.addEventListener(`copy`, () => {
//     console.log(`has copiado un texto`);
// });


// // paste para ejecutar una accion cuando pegas un texto en el input
// busqueda.addEventListener(`paste`, () => {
//     console.log(`has pegado un texto en el input`);
// });

// // cut para ejecutar una accion cuando cortas el texto de un input
// busqueda.addEventListener(`cut`, () => {
//     console.log(`cortaste el texto del input`);
// });

// // input para ejecutar una accion cuando se haga cualquiera de las acciones anteriores menos el blur
// // es decir esta va a desencadenar una accion cuando copias, cortas, pegas, rscribes,

// busqueda.addEventListener(`input`, () => {
//     console.log(`este es un input`);
// });


// para saber que se esta escribiendo le pasamos un parametro en la funcion
// busqueda.addEventListener(`input`, (event) => {
//     // console.log(event.data);
//     // event indica todo el evento que se esta presentando
//     // me trae el lugar en donde se presenta el evento 
//     // en que formulario
//     // el tipo de elemento en el que estoy escribiendo
//     // event.type = me trar el tipo de elemento
//     // event.target = el me trae todo el input en especifico en con nombre tipo clase etc

//     // traer lo que el usuario esta ecribiendo 
//     console.log(event.target.value);
// });

// validar que un input tenga algo de informacion
busqueda.addEventListener(`input`, (event) =>{
    if(event.target.value === ``){
        console.log(`por favor escribe algo el input esta vacio`)
    }else{
        console.log(event.target.value);
        let palabra = event.target.value;
    console.log(palabra);
    }
})