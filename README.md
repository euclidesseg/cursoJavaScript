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






 

 OPERADORES
 ================================================================================
 //1. ==  comparador de igualdad normal
 //2. ===  comparador de igualdad estricto
 //3. !=  comparador diferenncia normal
 //4. !==  comparador diferenncia estricto
 //5. >    mayor que
 //6. <    menor que 

 OBJETOS
 ================================================================================
 // Los objetos son la pieza fundamental de javasctipt 
 // Agrupan todo en una sola variable 
 // las variables van dentro y se conocen como propiedad del objeto 
 // Su sintaxis
 // la svariables no se igualan con (=) si no con (:)
  const objeto = {
    propiedad1: "si",
    propiedad2: "no"
  }
  console.log(objeto);
  //Destructuring acceder propiedades y agregarlas a una variable
    const{propiedad1, propiedad2} = producto;
    console.log(propiedad1);

 METODOS DE LOS OBJETOS
 ========================
 
 Object.freeze(objeto);    = No me permite modificar eliminar o agregar propiedades a un metodo se activa cuando hacemos uso de "use strict"
 Object.seal(objeto);      = A diferensia de freeze no se pueden agregar ni eliminar propiedades, pero si se pueden modificar las existenes
 const resultado2 = {...producto, ...medidas}; = Une dos objetos en una Variable

 console.log(Object.keys(producto));     = Me retorna las propiedades
 console.log(Object.values(producto));   = Me retorna los valores de las propiedades
 console.log(Object.entries(producto));  = Me retorna todo lo que tiene el objeto
 delete producto.imgagen;                = eliminar una propiedad de un objeto

 console.log(`El producto: ${this.Nombre} tiene un precio de: ${this.precio}`);   
 = la palabra this se usa en funciones dentro de objetos para hacer referencia a una propiedad 



 ARRAYS O ARREGLOS
 ==========================================
 // Los arreglos sirven para agrupar elmentos del mismo tipo
 // la diferencia entre arreglo y objetos es: los arreglos tienen solo valores y se reconocen porque van entre corchetes
 // los objetos tienen propiedades y valores, se reconocen porque van entre llaves
 // Les puedo agregar objetos tambien a los arreglos

 METODOS DE LOS ARREGLOS 
 =========================

 // meses.push(`abril`) = Agregar un elemento al final de un array
 // meses.unshift(`primer mes`); = agreagar un elemento al inicio de un arreglo 
 // En el capitulo 6 de arrays esta la informacion de como agregar elementos a un arreglo con spread operator
 // carrito.pop();            =  eliminar el ultimo elemento de un arreglo
 // carrito.shift();           =  eliminar el primer elemento de un arreglo
 // carrito.splice(1,1);        = eliminar en cualquier posicion de un arreglo

 let [, , tercer] = numeros;    = aplicar destructuring a arreglos numeros hace referencia al nombre del array
// Exsisten dos formas de iterar un arreglo que contenga objetos con forlup y con forEach en el capitulo 9 de arreglo se ven las dos formas
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


Array Methods
=================================






DOM
===============================
todos los elementos que vallasmoa a seleccionar en html lo hacemos mediante la palabra 
recervada document que se refiere al documento principal del html
getElementByClassName   =  Selecciona un elemento por clase
getElementById   =  Selecciona un elemento por id solo va a seleccionar uno y el primero que 
encuentre

get
