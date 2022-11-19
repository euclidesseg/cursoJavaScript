
// En este capitulo aprendemos a usar la estructura de control swith para numerosas condiciones
let numero1 = 90;
let numero2 = 70;
let resultado = 0;

const metodoCondicion = `m`;

switch(metodoCondicion){
    case `s`: resultado = numero1 + numero2;
    break
    case `r`: resultado = numero1 - numero2;
    break
    case `m`:
        // tambien podemos usar fcunciones dentro de los awith
            function multiplicar(valor1, valor2){
            let result = valor1 * valor2
            return result
        }
        resultado = multiplicar(numero1, numero2);
    break
    case `d`: resultado = numero1 / numero2;
    break

    // Sin nunguna condicionse cumple se pone default y tambien lleva un break
    default: resultado = resultado;
    break
}
console.log(resultado);