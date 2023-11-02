document.addEventListener("DOMContentLoaded", function () {

    const email = {
        email:'',
        asunto:'',
        mensaje:''
    }
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    const btnReset = document.querySelector("#formulario button[type = 'reset']");
    const spinner = document.querySelector("#spinner");
    
    // asignar eventos para formularios
    // 1 se ejecuta cuando estoy en un campo y me voy hacia otro
    inputEmail.addEventListener("blur", validar)
    inputEmail.addEventListener("blur", validar)
    inputAsunto.addEventListener("blur", validar)
    inputMensaje.addEventListener("input", validar)
    formulario.addEventListener("submit", enviarEmail);
    btnReset.addEventListener("click", (e) =>{
        e.preventDefault();
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        habilitarBotonEnviar();
        formulario.reset();        
    })
    
    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.remove("hidden");
        setTimeout(()=>{
            spinner.classList.add("hidden");
            email.email = '';
            email.asunto = '';
            email.mensaje = '';
            habilitarBotonEnviar();
            formulario.reset();    
            
            const alerta = document.createElement("P");
            alerta.classList.add("bg-green-500","text-white","p-2", "text-center","rounded-lg", "mt-10", "font-bold","text-sm", "uppercase")
            alerta.textContent = "Correo Enviado";
            formulario.appendChild(alerta);

            setTimeout( () =>{
                formulario.removeChild(alerta)
            },3000)
        },3000)
    }
    function validar(event) {
        //aplico tecnica de traversing the DOM recorrer el DOM
        const parentElement = event.target.parentElement;
        const nombreCampo = event.target.getAttribute("name");
        
        // muestra una alerta si no hay nada escrito
        if (!event.target.value.trim()) {
            mostrarAlerta(`El campo ${nombreCampo} es obligatorio`, parentElement);
            email[event.target.getAttribute("name")] = ""
            validarEmail();
            return;
        } 
        
        //funcion que limpia la alerta cuando el campo sea validado y no tenga error
        if(nombreCampo == 'email' && !validarEmail(event.target.value)){
            mostrarAlerta("El email no es valido", parentElement)
            email[event.target.getAttribute("name")] = ""
            validarEmail();
            return;
        }
        
        
        // si el codigo llega hasta aqui es porque las validacioens se pasaron
        limpiarAlerta(parentElement);
        //asignar valores
        email[event.target.getAttribute("name")] = event.target.value.trim().toLowerCase();
        
        habilitarBotonEnviar();
        
    }

    function mostrarAlerta(inputMensaje, parentElement){
        // comprueba si ya existe una alerta para que solo muestre una 
        limpiarAlerta(parentElement);
        

        //Generar alerta en html
        const error = document.createElement('P');
        error.textContent = inputMensaje;
        error.classList.add('bg-red-600', 'p-5', 'text-center', 'text-white', 'h-32')

        // Inyectar el error al formulario junto a su input 
        parentElement.appendChild(error);
    }

    
    //funcion limpiar alerta cuado exista una o cuando el campo sea validado
    const limpiarAlerta = (parentElement) =>{
        const alerta = parentElement.querySelector('.bg-red-600');
        if(alerta) alerta.remove(); //elimina la alerta si ya existe 
    }
    
    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }
    
    const  habilitarBotonEnviar = () =>{
        console.log(email);
        const button = document.querySelector('#formulario button[type="submit"]');
        if(Object.values(email).includes('')){//retorna true si almenos un elemento del objeto esta vacio
            button.classList.add("opacity-50")
            button.disabled = true
            return
        }
            button.classList.remove("opacity-50")
            button.disabled = false
    }
})