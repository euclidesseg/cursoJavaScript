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


   VARIABLES 
================================================================================
// diferencia etre var let y const
// Las variables var pueden ser modificadas y re-declaradas dentro de su ámbito;
// las variables let pueden ser modificadas, pero no re-declaradas;
// las variables const no pueden ser modificadas ni re-declaradas, deben ser inicializadas. 

// No puedo crear dos variables de igual nombre en un mismo nivel 
// Es decir, si en un archivo HTML tengo enlazados dos archivos JS
// y en ambos tengo la misma variable no me dejara ejecutar correctamente el código 



   STRING
================================================================================
const producto2 = String("monitor de 24 \"");
// si no le pusiera la diagonal invertida me da error 
// eso se conoce como escapar las comillas
// const producto3 = new String('monitor de 27 pulgadas');
   se conoce como crear un nuevo objeto de tipo strings

// Unir una cadena de string al estilo ecmascript
   console.log(`el producto ${producto} tiene un precio de $${precio} y esta en descuento`);  alt + 96

// Exsisten dos metodos para separar o cortar strings en javascrip 
   slice y substring la diferencia entre ambos es que substring acepta que el primer valor sea mayor y slice no 
   por lo que substring tomara el primer valor y lo pasara al ultimo 

// Tenemos un metodo que permite repetir una cadena de texto que se llama repeat
   si le paso un numero que no es entero lo que hace es redondearlo al valor

   <!-- =================ALGUNOS DE LOS METODOS PARA LOS STRING================= -->
   // 1 .length         = me permite saber vuantas letras tiene una cadena de texto
   // 2 .includes(`criterio de busqueda`) = indica si es falso o verdadero que una palabra existe dentro de una cadena de texto
   // 3 .concat()       = permite concatenar una cadena de texto con variables
   // 4 .trimStart()    = permite eliminar espacios al inicio de la cadena de texto
   // 5 .trimEnd()      = permite eliminar espacios al final de la caden ade texto
   // 6 .trim()         = permite eliminar espacios tanto al inicio como al final de la cadena de texto
   // 7 .replace(`pulgadas`,`"`);       = permite reemplazar una palabra de una cadena de texto o toda la cadena
   // 8 .slice(0, 8);   = permite cortar una cadena de texto
   // 9 .substring(0, 8)  = tambien permite cortar una cadena de texto
   // 10 .repeat(3);    = permite repetir una cadena de texto un determinado numero de veces, se pone en la cadena no en el console
   // 11 .split(` `)    = divide una cadena de texto ya sea por espacios o un carater, lo que indiquemos en las comillas
   // 12 .toUpperCase() = permite pasar una cadena de texto a mayusculas
   // 13 .toLoerCase()  = permite pasar una caden ade texto a minusculas


   NUMEROS
   ================================================================================
   // En javascript a todos los numeros se crean de la misma forma tanto enteros como flotantes o decimales
      o negativos
   // Operaciones una de las operaciones mas rara de JS y de cualquier lenguaej es el modulo 
      en JS se representa con el signo %   y es equivalente al recisuo de una division es ideal para saber si una division 
      es exsacta o inexsacta

   OBJETO MATH Y ALGUNAS FUNCIONES
   ================================
   // 1 Math.round(2.8)   = redondear un numero
   // 3 Math.ceil(2.9)    = redibear hacia arriba
   // 2 Math.floor(2.9)   = redondear hacia abajo
   // 3 Math.sqrt(1600)   = raiz cuadrada
   // 4 Math.abs(-150)    = valor absoluto
   // 5 Math.pow(8,3)     = potenciacion
   // 6 Math.random() * 100) = ramdom 
   
   <!-- =================PASAR DE STRING A NUMEROS================= -->
   // 1 Number.parseInt(numero1);    = De string a entero
   // 2 Number.parseFloat(numero1)  = De string a flotante 


   OPERADORES
   ================================================================================