NOTAS DE JAVASCRIPT 


# CONSOLA DE JAVASCRIPT
======================
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


VARIABLES 
==================
// diferencia etre var let y const
// Las variables var pueden ser modificadas y re-declaradas dentro de su ámbito;
// las variables let pueden ser modificadas, pero no re-declaradas;
// las variables const no pueden ser modificadas ni re-declaradas. 

// No puedo crear dos variables de igual nombre en un mismo nivel 
// Es decir, si en un archivo HTML tengo enlazados dos archivos JS
// y en ambos tengo la misma variable no me dejara ejecutar correctamente el código 

STRING
================
const producto2 = String("monitor de 24 \"");
// si no le pusiera la diagonal invertida me da error 
// eso se conoce como escapar las comillas
// const producto3 = new String('monitor de 27 pulgadas');
    se conoce como crear un nuevo objeto de tipo strings

// Unir una cadena de string al estilo ecmascript
   console.log(`el producto ${producto} tiene un precio de $${precio} y esta en descuento`);  alt + 96