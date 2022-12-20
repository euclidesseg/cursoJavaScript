// En este capitulo aprendemos a darle un evento a un boton de submit 
let formulario = document.querySelector(`#formulario`);

formulario.addEventListener(`submit`, (e) => {
    e.stopPropagation();
    console.log(`Buscando...`)
    console.log(e.target.action);
});
