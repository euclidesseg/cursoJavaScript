// variables
const carrito = document.querySelector("#carrito"); // seleccionar el carrito
const contenedorCarrito = document.querySelector(".tbody"); //para agregar el curso al carrito
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector(`#lista-cursos`); //selector de lista cursos
let articulosCarrito = []; // este sera el arreglo que tendra nuestros articulos en el carrito lo llenamos en la funcion leerDatosCursos

carritoHtml();
//funcion para registrar todos los eventListener
registrarEventListeners();

function registrarEventListeners() {
  //Cuando se agrega un curso precionando el boton agregar un curso
  listaCursos.addEventListener(`click`, agregarCurso);
  carrito.addEventListener('click', eliminarElemento)
}

//funciones
function agregarCurso(event) {
  event.preventDefault();
  let cursoSeleccionado;

  if (event.target.classList.contains(`agregar-carrito`)) {
    cursoSeleccionado = event.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
  if (event.target.classList.contains(`span-btn`)) {
    cursoSeleccionado = event.target.parentElement.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
    carritoHtml;
  }

  // hago dos if porque en el css tengo otro elemento animado
}
/* OBTENIENDO LOS DATOS DEL CURSO*/
// por el momento estamos accediendo al boton pero devemos acceder a los demas elementos del curso
// la siguiente funcion lee el contrenido del html al que le dimos click y trae la informacion del curso
function leerDatosCurso(curso) {
  //objeto
  infoCurso = {
    imagen: curso.querySelector(`#img-curso`).src,
    titulo: curso.querySelector(`#titulo-curso`).textContent,
    precio: curso.querySelector(`.precioNuevo`).textContent,
    id: curso.querySelector(`a`).getAttribute(`data-id`),
    cantidad: 1,
  };
  // revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);

  if (existe) {
    const cursos  = articulosCarrito.map(curso => {
        if(curso.id === infoCurso.id){
            curso.cantidad ++;
            return curso; //retorna el objeto actualizado
        }
        else{
            return curso; //retorna los objetos que no son los duplicados
        }
    })
  } else {
    //agrega elementos al arreglo de carrito
    /* hacemos una copia del carrito para no perder la referencia a los cursos que ya hemos agregado y me agrega un nuevo elemento*/
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  carritoHtml();
}

//eliminar elemento del carrito o eliminar carrito 
function eliminarElemento (event){
  if(event.target.classList.contains("btn__eliminar")){
    idCurso = event.target.getAttribute("data-id");
    
    articulosCarrito = articulosCarrito.filter((articulo) => articulo.id != idCurso);
    carritoHtml();
  }
  else if(event.target.classList.contains("btn__variar__carrito")){
    articulosCarrito = [];
    limpiarHTML()
  }
}
/* ahora esta funcion es para mostrar el carrito en html*/
function carritoHtml() {
  /* limpiar el html antes de agreagr el contenido del carrito*/
  limpiarHTML();
  /* esta funcion recorre el carrito y genera el html para el carrito*/
  articulosCarrito.forEach((curso) => {
    //array function
    /* cada curso se va ir insertando en un tableBody para eso creamos un elelemto llamado tableRow*/
    const row = document.createElement(`tr`); //creo el elemento par la fila
    row.classList.add(`filasArticulosGuardados`);
    const { imagen, titulo, precio, cantidad } = curso;
    row.innerHTML = `
            <tr> 
            <td>
                 <img src = "${imagen}" class = "imagenEnCurso">
            </td>
            <td class="nombreEnCarrito">
                 ${titulo} 
            </td>
            <td class="precioEnCarrito">
                 ${precio}
            </td>
            <td class="cantidadEnCarrito">
                 ${cantidad}
            </td>
            <td class = "accioncarrito">
                <button class="btn__eliminar" data-id = ${curso.id}> Eliminar </button>
            </td>
            </tr>
         `;
    //AGREGAR EL HTML DEL CARRITO EN EL TBODY
    contenedorCarrito.appendChild(row);
  });
}

//Elimina los cursos del tbody no obtener duplicados de los elementos del arreglo
function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
  /* mientras el contenedor de carrito tenga hijos los va a ir eliminando desde el primero hijo
   * hacia debajo */
}
