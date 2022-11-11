
// En este capitulo aprendemos como multiples funciones se pasan valores o retornan valores


function sumar(a, b){
   // console.log(a + b);  // De esta manera no puedo hacer nada con ese valor 
    return a + b;       // De estya manera ya yo puedo agregar ese retorno a una variable cuando mando llamar a la funcion
}

let resultado = sumar(2, 3);

console.log(`${resultado}`);




// Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(tot){
    return tot + ( tot * 0.19);

}

total = agregarCarrito(300);
total = agregarCarrito(200);
total = agregarCarrito(500);

let totalNeto = calcularImpuesto(total)


console.log(total)
console.log(totalNeto)