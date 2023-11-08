const day = new Date(); // obtiene todas el dia actual
console.log(day);

const year = day.getFullYear(); //obtiene el año actual
console.log(year);

const month = day.getMonth(); // obtiene el mes actual, los meses comienzan desde el indice 0
console.log(month)

const hour = day.getHours();
console.log(hour);

const minutes = day.getMinutes();
console.log(minutes);

const time = day.getTime()// obtiene los milisegundos desde el 1 de enero de 1970 hasta la fecha
console.log(time);

// cuando se va a trabajar con fechas es recomendable hacerlo desde el servidor ya que el usuario simplemente 
// puede cambiar la fecha de su computadora y asi simplemente pasar las validasiones.
