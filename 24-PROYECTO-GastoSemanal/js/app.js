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
    }
}

// mostrara toda la interfaz de presupuesto
class UI {
    insertarPresupuesto(objPresupuesto) {
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

    agregarGastoslistado(gastos = []){
        // limpirar el html para que no se repitan los items
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild)
        }
        // iterar sobre los gastos para mostrarlos en el html
        gastos.forEach( gasto =>{

            const{nombre, cantidad, id} = gasto;
            // crear un li
            const nuevoGasto = document.createElement('LI');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.setAttribute('data-id',id);
            nuevoGasto.dataset.id = id;

            // agregar el html del gasto
            nuevoGasto.innerHTML = `${nombre} <span class = "badge badge-primary badge-pill"> ${cantidad}</span>`

            // boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.textContent = "Borrar"
            nuevoGasto.appendChild(btnBorrar);

            // agregar al listado
            gastoListado.appendChild(nuevoGasto);
        })
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
        return;
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

    
    ui.agregarGastoslistado(gastos);
    // reinicia el formulario
    formulario.reset()
}