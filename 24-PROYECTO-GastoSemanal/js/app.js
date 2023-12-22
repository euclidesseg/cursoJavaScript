// variables yi selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// eventos
eventListeners()
function eventListeners() {
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto)
    formulario.addEventListener('submit', agregarGasto);
}




// clases
// controlara lo relacionado con presupuestos, agregar borrar etc
class Presupuesto {
    constructor(presupuesto) {// cuando se instancia la clase se le manda el presupuesto a travez del constructor
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto); // inicia el restante en el valor del presupuesto
        this.gastos = []; // arreglo para almacenar todos los gastos a medida que vamos agregando
    }

    agregarNuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto]
        console.log(this.gastos);
    }
}

// mostrara toda la interfaz de presupuesto
class UI {
    insertarPresupuesto(objPresupuesto) {
        console.log(objPresupuesto);
        const { presupuesto, restante } = objPresupuesto;
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante
    }

    // imprimir alerta si no se pasan las validadciones
    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger')
        } else {
            divMensaje.classList.add('alert-success')
        }

        divMensaje.textContent = mensaje;

        // insertar en el html
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // quitar la alerta
        setTimeout(() => {
            divMensaje.remove()
        }, 3000);
    }
}

// instancias de clases
let ui = new UI();
let presupuesto;

// funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }
    // Inicializar la instancia de Presupuesto
    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuesto);
}

// añade gastos
function agregarGasto(event) {
    event.preventDefault();

    // leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // validar
    if (nombre === "" || cantidad === "") {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida', 'error')
        return 
    }

    //creamos el objeto con el gasto
    const gasto = {nombre, cantidad, id:Date.now()}

    // desde lainstancia llamo el metodo agregar gasto
    presupuesto.agregarNuevoGasto(gasto);

    // mostrar la alerta de agregado
    ui.imprimirAlerta('Gasto Agregado', 'success');

    // imprimir los gastos en el html
    const {gastos} = presupuesto
    // reinicia el formulario
    formulario.reset()
}