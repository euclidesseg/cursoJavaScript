// En este capitulo aprenderemos a usar el oérador or para que se cumpla por lo menos una de las condiciones

let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let  totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible >= totalPagar){
    console.log(`Si se puede pagar`)
}else{
    console.log(`Fondos insuficientes`);
}