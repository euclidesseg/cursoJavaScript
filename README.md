NOTAS DE JAVASCRIPT 


   # CONSOLA DE JAVASCRIPT
================================================================================
podemos declarar variables en js desde la consola
        let nombre = ("hola desde la consola ") 
        y solamente agrgamos la parabra hola para imprimir lo que dice esa variable 

        tambien podemos agregaar arreglos 

        console.log ([1,2,3,4]); 

        solo le damos enter y se imprimira como un arreglo 
         
        tambien podemos usar console.table([1,2,3,4]); 
         para que se ponga como tabla

         // para ver cuanto tiempo se demora un codigo en ejecutar 

        console.time("hola");

        console.warn("esto no esta permitido");
        console.warn("esto no esta permitido");
        console.warn("esto no esta permitido");
        console.warn("esto no esta permitido");
        console.warn("esto no esta permitido");
        console.warn("esto no esta permitido");
        console.warn("esto no esta permitido");
        console.warn("esto no esta permitido");
        console.warn("esto no esta permitido");
        console.warn("esto no esta permitido");
        console.warn("esto no esta permitido");
 

        console.timeEnd("hola"); 

        tambien podemos cargar objetos desde la consola de javascript 

        const obj = { nombre: "juan"};

        solo escribimos obj y se llamara al contenido del objeto

 FUNCIONES 
 =====================
 // Las funciones  son una serie de procdedimientos o instrucciones  lineas de codigo que realizan una accion 
 // Permiten tener un codigo mas organizado y mas facil de leer son reutilizbles
 // existen dos formas de crear funciones en javascript una es declaracion de funcion y otra es exprecion de funcion.

 // function saludar(nombre, apellido = `....`){}  = poner un parametro por default cuando no se recibe ningun argumento

 ARROW FUNCTION
 ======================

 funcion de flecha
 let aprendiendo2 = () => `Aprendiendo JavasCript y arrow function`;

// Lo que cambia en un arrow function
// 1.  debido a su sintaxis se da solo cuando hacemos uso exprecion de funcion
// 2.  se borra la palabra function y se pasa en forma de => del lado derecho de los parentesis
// 3.  el parentesis se mantiene porque ahi es donde se pasan los parametros de la funcion 
// 4.  Cuando solamente tengo una funcion con una linea las llaves {} ya no son necesarias asi que las puedo cortar
// 5.  Cuando tienen una sola linea dan por implicito el return  es decir, ya esta retornando su valor entonces si se elimina el console.log
//     tiene el valor de `Aprendiendo JavasCript y arrow function` y asi puedo hacer console.log(aprendiendo2);


DOM
===============================
todos los elementos que vallasmoa a seleccionar en html lo hacemos mediante la palabra 
recervada document que se refiere al documento principal del html
getElementByClassName   =  Selecciona un elemento por clase
getElementById   =  Selecciona un elemento por id solo va a seleccionar uno y el primero que 
encuentre

get
