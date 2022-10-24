// En este capitulo estaremos viendo como pasar a mayusculas o minusculas un texto
// Supongamos que hacemos una tienda virtual y nos dicen requerimos todos los textos en mayusculas

const producto  = (`Monitor de 20 pulgadas`);

// .toUpperCase() para transformarlo todo a mayousculas
console.log(`${producto}.`.toUpperCase());

// .toLoverCase para transformar todo en minusculas
console.log(`${producto}.`.toLowerCase());

// Una buena idea es para mandar un correo a la base de datos
const correo = (`EUDER0206@GMAIL.COM`);
console.log(`${correo}`.toLowerCase());

const precio = 300;
console.log(`${precio}`);
// .toString para pasar un numero  string 
console.log(`${precio}`.toString());