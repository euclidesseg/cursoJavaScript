// En este capitulo aprendemos como se comunican las funciones 


// En la vida real los proyectos pueden tener 20 30 50 funciones ahroa veamos como se van a mandar a llamar o comunicarse
// En lugar de tener un gran funcion de 600 lineas es recomendable que las funciones esten divididas en pequeñas partes
// Realicen una accion y manden a llamar a otra funcion

iniciarApp();

function iniciarApp(){
    console.log(`Iniciando app......`);

    segundaFunction();
    // para no ejecutar una funcion por aparte la puedo llamar desde otra funcion y asi encadenar una tras otra
}

function segundaFunction(){
    console.log(`Desde la segunda funcion`);
    autenticandoUsuario(`Euclides`); // LLamado de la funcion autenticandoUsuario() y envio de argumento
}

function autenticandoUsuario(nombre){//esta funcion  me pide un parametro que le debo enviar cuando la llame 
    console.log(`Autenticando usuario.....`);
    console.log(`Usuario autenticado Exitosamente ${nombre}`);
}