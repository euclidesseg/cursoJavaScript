
// Las funciones  son una serie de procdedimientos o instrucciones  lineas de codigo que realizan una accion 
// Permiten tener un codigo mas organizado y mas facil de leer son reutilizbles
// existen dos formas de crear funciones en javascript una es declaracion de funcion y otra es exprecion de funcion.

// Declaracion de funcion 
function sumar(){
    // Todo lo que se coloque dentro de la  funcion se le conoce como el cuerpo de la duncion 
    console.log(2 +2);
}
sumar();
sumar();
sumar();
// la puedo llamar varias veces
//entre los parentecis se ponen los parametros de la funcion


// Exprecion de funcion
const sumar2 = function(){
    console.log(3 +3);
}
sumar2();