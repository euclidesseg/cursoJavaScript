// En este capitulo aprendemos a usar el validador de consiciones con else if

let dineroEnBolsa = 300;
let costo = 500;
let targeta = true

if(dineroEnBolsa >= costo){
    console.log(`Si puede pagar`);
}else if(targeta){
    console.log(`Si puede pagar tiene targeta`)
}
else{
    console.log(`No puede pagar`);
}

if(!targeta){
    // de esta manera se niega un acondicion con el signo de esclamacion
    console.log(`No es verdadero`)
}