//constructores

function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
Seguro.prototype.cotizarSeguro = function () {
    /*
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35
    */
    console.log(this.marca);
    const base = 2000;
    let cantidad = 0;
    switch (this.marca) {
        case '1':
            cantidad = base * 1.15
            break;
        case '2':
            cantidad = base * 1.05
            break;
        case '3':
            cantidad = base * 1.35
            break;
        default:
            break

    }
    // leer el año para reducir el costo
    const diferencia = new Date().getFullYear() - this.year;
    // cada año que la diferencia es mayor el ecosto va a reducirse  un 3%
    let porcentaje = diferencia * 3
    
    cantidad = (cantidad - (cantidad * porcentaje)/100)

    if(this.tipo === 'basico'){
        this.cantidad = this.cantidad * 1.30
    }else{
        this.cantidad = this.cantidad * 1.50
    }
    return cantidad;
}

function UI() {}

// llenar las oopciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear();
    const min = max - 20;
    const selectYears = document.querySelector("#year");

    for (let index = max; index > min; index--) {
        let option = document.createElement("OPTION");
        option.value = index;
        option.textContent = index;
        selectYears.appendChild(option);
    }
}
// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = function (mensaje, tipo) { // tipo puede ser de tipo succes o tipo error
    const div = document.createElement("DIV");
    if (tipo == "error") {
        div.classList.add("mensaje", "error");
    } else {
        div.classList.add("mensaje", "correcto");
    }
    div.classList.add("mt-10");
    div.textContent = mensaje;

    // insertar en el HTML
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.insertBefore(div, document.querySelector("#resultado"));
    // El método insertBefore() inserta un nodo hijo antes de un nodo de referencia como hijo de un nodo padre indicado.

    setTimeout(() => {
        div.remove();
    }, 3000);
}


UI.prototype.mostrarResultado = (seguro, total) =>{
    // crear resultado 

    const {marca, year, tipo} = seguro;
    let tipo_texto;

    switch(marca.toString()){
        case '1':
            tipo_texto = 'Americano'
            break;
        case '2':
            tipo_texto = 'Asiatico'
            break;
        case '3':
            tipo_texto = 'Europeo'
            break;
        default:
            break;
    }
    const div = document.createElement("DIV")
    div.classList.add("mt-10");
    div.innerHTML = `
        <p class = "header"> Tu resumen </p>
        <p class = "font-bold">Marca: <span class = "font-normal">${tipo_texto} </span> </p>
        <p class = "font-bold">Año:  <span class = "font-normal">${year} </span>  </p>
        <p class = "font-bold">Tipo:  <span class = "font-normal">${tipo} </span>  </p>
        <p class = "font-bold">Total: <span class = "font-normal">${total} </span>   </p>

    `
    const resultadoDiv = document.querySelector("#resultado");
    
    //mostrar el spinner
    const spinner = document.querySelector("#cargando");
    spinner.style.display = 'block'
    setTimeout(() => {
        spinner.style.display = 'none' // se borra el spinner 
        resultadoDiv.appendChild(div); // y se muestra el resultado
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    // instanciar UI
    const ui = new UI();
    ui.llenarOpciones();
})

eventListeners();

function eventListeners() {
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(event) {
    event.preventDefault();
    const ui = new UI();

    // leer la marca seleccionada
    const marca = document.querySelector("#marca").value.toString();

    // leer el año seleccionado
    const year = document.querySelector("#year").value;

    // leer la cobertura
    // de la siguiente manera seleccionamos un input de tipo radio;
    const tipo = document.querySelector('input[name="tipo"]:checked').value; // selecciona el checket que tenga el name tiop y que ademas este en checked

    if (marca === "" || year === "" || tipo === "") {
        ui.mostrarMensaje("Todos los campos son obligatorios", "error");
        return;
    }
    ui.mostrarMensaje("cotizando...", "exito");

    // ocultar cotizaciones previas cuando hacemos una nueva cotizacion
    const resultados2 = document.querySelector("#resultado");
    if(resultados2.firstChild) resultados2.firstChild.remove();

    //instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    ui.mostrarResultado(seguro,seguro.cotizarSeguro());
}