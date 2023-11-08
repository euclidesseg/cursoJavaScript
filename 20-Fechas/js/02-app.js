// moment.js
//  es una libreria que nos permite agregar formato a nuestras fechas
console.log(new Date()) // me da las fechas como yo queira

moment.locale('es');
console.log(moment().format('MMM Do YYYY h:mm:ss a')) // obtener la fecha actual formateada

console.log(moment().format('LLLL', new Date())) // puede obtener la fecha mucho mas formateada

console.log(moment().add(3, 'days').calendar()); // agrega tres dias mas a la fecha actual para fechas de vencimientos de productos, cupones etc
