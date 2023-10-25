
// variables 
const marcaOption = document.querySelector("#marca")
const yearOption = document.querySelector("#year")
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")
const transmision = document.querySelector("#transmision")
const color = document.querySelector("#color");
const todosLosAutos = document.querySelector("#resultado");// html donde se mostraran todos los autos


const max = new Date().getFullYear();
const min = max -  10;

//generar un objeto con datos de busqueda
const datosBusqueda = {
    marca : "",
    modelo: "",
    year  : "",
    minimo : "",
    maximo : "",
    puertas: "",
    transmision: "",
    color: ""    
}

// eventos 
document.addEventListener("DOMContentLoaded", () =>{
    mostrarAutos(autos);

    // llena las opciones para año
    llenarAños();
});

// event listerner para las opciones de busqueda
marcaOption.addEventListener("change", (e) =>{
    datosBusqueda.marca = e.target.value;

    filtrarAutos(datosBusqueda.marca);
})
yearOption.addEventListener("change", (e) =>{
    datosBusqueda.year = e.target.value;
    filtrarAutos(datosBusqueda.year)
})
minimo.addEventListener("change", (e) =>{
    datosBusqueda.minimo = e.target.value;
    filtrarAutos(datosBusqueda.minimo)
})
maximo.addEventListener("change", (e) =>{
    datosBusqueda.maximo = e.target.value;
    filtrarAutos(datosBusqueda.minimo)
})
puertas.addEventListener("change", (e) =>{
    datosBusqueda.puertas = parseInt( e.target.value);
    filtrarAutos(datosBusqueda.minimo)
})
transmision.addEventListener("change", (e) =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAutos(datosBusqueda.transmision);
})
color.addEventListener("change", (e) =>{
    datosBusqueda.color = e.target.value;
    filtrarAutos(datosBusqueda.color);
})

//funciones
const mostrarAutos = (autos) =>{ //muestra autos en html
    autos.forEach(auto => {

        const {marca, modelo, year, puertas, precio, color, transmision} = auto;        
        const autoHTML = document.createElement("P");

        autoHTML.textContent = `${marca} - ${modelo} - ${year} - #${puertas} - ${precio} - ${color} - ${transmision}`

        // insertar en el html del
        todosLosAutos.appendChild(autoHTML);
    });
}

function llenarAños(){// llena el select de los años
    
   for(let i = max; i > min; i--){
        const yearHtml = document.createElement("OPTION");

        yearHtml.textContent = `${i}`;
        yearOption.appendChild(yearHtml);
    }
}

function limpiarHtml(){ // esta funcion limpia el html previo antes de agregar el resultado de filtrado
    while(todosLosAutos.firstChild){
        todosLosAutos.removeChild(todosLosAutos.firstChild);
    }
}
// funcion que filtra a los los autos
function filtrarAutos(){
    // filtrarMarca es un callback que me retorna algo t me recibe implicitamente un argumento que representa un objeto auto 
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    if(!resultado.length>0){
       mostrarAlerta();
    }else{
        limpiarHtml()
        mostrarAutos(resultado);
    }
}
function filtrarMarca(auto){
    const {marca} = datosBusqueda
    if(!marca) return auto;
    return auto.marca === marca;
}    
//la función callback es filtrarMarca(). La función filtrarMarca() recibe un elemento del array
// original como argumento y devuelve un valor booleano que indica si el elemento debe incluirse
// en el nuevo array.

// En este caso, la función filtrarMarca() devuelve true si la marca del
// elemento es igual a la marca especificada en el objeto datosBusqueda. 
// Si la marca del elemento no es igual a la marca especificada, la función filtrarMarca() 
// devuelve false.

function filtrarYear (auto){
    const {year} = datosBusqueda;
    if(!year) return auto ;
    return auto.year === parseInt(year);
}    
function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(!minimo) return auto;
    return auto.precio >= minimo;
    
}    

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(!maximo) return auto;
    return auto.precio <= maximo;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(!puertas) return auto;
    return auto.puertas === puertas;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(!transmision) return auto;
    return auto.transmision === transmision;
}
function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(!color) return auto;
    return auto.color === color;
}

function mostrarAlerta(){ //muestrar alerta cuando no hay resultados de filtrado
    const alert = document.createElement("DIV");
    alert.classList.add("alerta")
    const message = document.createElement("p");
    message.classList.add("font-bold");
    message.textContent = "Atention: Not Content";

    alert.appendChild(message);
    limpiarHtml()
    todosLosAutos.appendChild(alert);
}