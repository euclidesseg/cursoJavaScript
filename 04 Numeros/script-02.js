// Operaciones con numeros
const numero1 = 200;
const numero2 = 200; 

let resultado;


// Suma
    resultado = (`${numero1 + numero2}`);
    console.log(`${resultado}`);

// Resta
    resultado = (`${numero1 - numero2}`);
    console.log(`${resultado}`);

// Multiplicacion 
    resultado = (`${numero1 * numero2}`);
    console.log(`${resultado}`);

// Division
    resultado = (`${numero1 / numero2}`);
    console.log(`${resultado}`);

// Modulo
    resultado = (`${numero1 % numero2}`);

console.log(`${resultado}`);

// Realizar una divicion y desir si es una divicion exsacta o insesacta


let numeroUno = 300;
let numeroDos = 200
let resultadoDos = (`${numeroUno / numeroDos}`);
let moduloDos = (`${numeroUno % numeroDos}`);
if(moduloDos == 0){
    console.log(`La divicion es una division exsacta, tiene como resultado ${resultadoDos} con un modulo de ${moduloDos}`);
}else{
    console.log(`La division es inexsacta tiene como resultado ${resultadoDos} con un modulo de ${moduloDos}`);
}