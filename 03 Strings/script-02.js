
// Los metodos de los strings
// 

const producto2 = String("monitor de 24 \"");

// Si quiero saber cuantas letras tiene esta palabra
console.log(producto2);
console.log(producto2.length);

// Este metodo me o me permite saber si sierta palabra existe dentro de una cadena de texto
// Console.log(producto2.indexOf("24"))
// si sale -1 significa que no lo encontro
// .length es uno de los muy pocos metodos que usan parentecis ya que es una proppiedad


// Este es mucho mas practico y util que lo que dira es falso o veradero
console.log(producto2.includes("table"))
console.log(producto2.includes("Monitor"))
console.log(producto2.includes("monitor"))
// Este metodo discrimina entre mayusculas o minusculas