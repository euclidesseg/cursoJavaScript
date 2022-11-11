
// En este capitulo aprendemos que son las arraw function
// Los arrow function son una nueva forma de declarar funciones 

let aprendiendo = function(){
    console.log(`Aprendiendo JavasCript`);
}


let aprendiendo2 = () => `Aprendiendo JavasCript y arrow function`;


// Lo que cambia en un arrow function
// 1.  se borra la palabra function y se pasa en forma de => del lado derecho de los parentesis
// 2.  el parentesis se mantiene porque ahi es donde se pasan los parametros de la funcion 
// 3.  Cuando solamente tengo una funcion con una linea las llaves {} ya no son necesarias asi que las puedo cortar
// 4.  Cuando tienen una sola linea dan por implicito el return  es decir, ya esta retornando su valor entonces si se elimina el console.log
//     tiene el valor de `Aprendiendo JavasCript y arrow function` y asi puedo hacer console.log(aprendiendo2);


aprendiendo();
aprendiendo2(); // este ya no se imprimira
console.log(aprendiendo2);