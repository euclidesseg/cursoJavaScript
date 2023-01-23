// variables 
const carrito = document.querySelector('#carrito'); // seleccionar el carrito
const contenedorCarrito = document.querySelector("lista-carrito tbody"); //para agregar el curso al carrito
const vaciarCarrito = document.querySelector("#vaciar-carrito");;
const listaCursos = document.querySelector("#lista-cursos"); //selector de lista cursos

//funcion para registrar todos los eventListener
registrarEventListeners();
function registrarEventListeners(){
    //Cuando se agrega un curso precionando el boton agregar un curso
    listaCursos.addEventListener('click', agregarCurso() )
}

//funciones
function agregarCurso(){
    console.log(`precionando en cursos`)
}