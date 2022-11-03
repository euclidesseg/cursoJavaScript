//  Los arreglos sirven para agrupar multiples elmentos del mismo tipo van entre corchetes
const numeros = [10, 20 ,30];
console.log(numeros);

// se imprimira esto 
/* 
(3) [10, 20, 30]
0: 10
1: 20
2: 30
length: 3 */

// los nueros 0,1,2 se llaman indices e indican la posicion de los valores del arreglo inician en 0

// Otra forma de declarar arreglos
 const meses = new Array(`enero`,`febrero`, `marzo`);
 console.log(meses);


//  puedo crear arreglos que contienen datos de todo tipo  y tambien puedo poner un arreglo dentro de otro objeto
const datos = [`Hola`, 10, true, `si`, null,{nombre: `Euclides`, trabajo: `programador`}, [1,2,3] ];
console.log(datos);
