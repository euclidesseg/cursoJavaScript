// Ahora veremos un ejemplo mas avanzado de lo que podemos hacer con js
// para eso agregaremos el evento al boton del final para que me oculte y me aparezca el footer
// que no se muestra en la pagina
// seleccionamos el boton con la clase flotante

let botonFlotante = document.querySelector(`.btn-flotante`);
console.log(botonFlotante)

let footer = document.querySelector(`.footer`);
console.log(footer);

// agregando el evento clik al boton 
// botonFlotante.addEventListener(`click`, () => {
//     // se le agrega una funcion anonima las funciones anonimas son las que 
//     // que no tienen nombre
//     // si el boton flotante alguie le da clik se ejecuta la funcion que esta dentro
//     console.log(`Diste click`);
// });

// tambien se puede crear una funcion aparte para el evento del boton
botonFlotante.addEventListener(`click`, ejecutarFooter)

function ejecutarFooter() {
    // console.log(`Diste click`);
    // verificar si una clase existe en html
    if (footer.classList.contains(`activo`)) {
        // la primera vez que de clic en el boton no va a estar asi que saltara el else de abajo
        // y la crea
        // laproxima vez que de clik si estara y quitara esa clase
        footer.classList.remove(`activo`);
        botonFlotante.classList.remove(`activo`);
        this.textContent = `Idioma Y Moneda`
    }else{
        footer.classList.add(`activo`);
        botonFlotante.classList.add(`activo`);
        this.textContent = `X Cerrar`
        // debido a que la funcion esta llamando al boton tambien podemos usar this
        // ya que estariamos uzando el llamado de la funcion
    }
}
