/* En este capitulo estaremos viendo la diferencia entre declaracion de funcion y expresion de funcion*/

sumar();
function sumar(){
  console.log(2 +2);
}



sumar2();
const sumar2 = function(){
    console.log(3 +3);
}


// La diferencia entre declaracion y exprecion de funcion es que cuando unja declaracion de funcion la podemos usar antes de declararla
// Eso se deve a la doble buelta que da javascript antes de ejecutar un codigo es decir la primer vuelta
// se le conoce como creaccion y la segunda se le conoce como ejecucion.