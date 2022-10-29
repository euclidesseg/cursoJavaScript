// Consejos para escribir codigos que utilize booleans

const autenticado = true;

// if(autenticado === true){// esto no deveria usarse ya que el valor se da por implicito que ya es true
// Incluso si cambias el valor de la variable a false se lansara al else
if(autenticado){
    console.log(`Puedes ver netflix`)
}else{
    console.log(`NO, no puedes ver netflix`);
}

console.log(autenticado ? `si esta autenticado` : `no esta atutenticado`);