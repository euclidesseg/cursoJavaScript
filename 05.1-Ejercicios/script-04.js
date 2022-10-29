// Realizar un algoritmo para ingresar un Destino y la cantidad de cuotas que se paga el viaje.
// Se debe mostrar el total del valor del viaje y cuanto tiene que pagar en cada cuota. Además tener en cuenta que si las cuotas son mayores a 6 se le agrega al total del viaje un recargo de $1000.
// Destinos: Cataratas: $10000, portugal: $12000, suiza: $25000, Mar del Plata: $13000.

let numeroPersonas;
let valorPersona;
let valorNeto;
let destino;
const nombre = prompt(`POR FAVOR INGRESE SU NOMBRE`);
let opcion = prompt(`PARA CONTINUAR ELIJE EL DESTINO:
                        1. PARA CATARATAS
                        2. PARA PORTUGAL
                        3. PARA SUIZA
                        4. MAR DE PLATA`); 
numeroPersonas = prompt(`POR FAVOR INGRESA EL NUMERO DE PERSONAS PARA EL VIAJE`);

if(opcion === `1`){
    valorPersona = 10000;
    destino = `CATARATAS`;
}else if(opcion === `2`){
    valorPersona = 12000;
    destino = `PORTUGAL`;
}else if(opcion === `3`){
    valorPersona = 25000;
    destino = `SUIZA`;
}else if(opcion === `4`){
    destino = `MAR DE PLATA`;
    valorPersona = 13000;
}

valorNeto = valorPersona * Number.parseInt(numeroPersonas);
let numeroCuotas = prompt(`A CUANTAS CUOTAS QUIERES PAGAR TU VIAJE?`);

if(Number.parseInt(numeroCuotas) > 6){
    valorNeto = valorNeto + 1000;
}

console.log(`HOLA ${nombre} EL VALOR TOTAL DEL TU VIAJE ES ${valorNeto}
CON DESTINO HACIA ${destino}
FELIZ VIAJE..!!`);