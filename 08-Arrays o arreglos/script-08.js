// En ester capitulo apreendemos a hacer destructuring de arreglo

// destructuring de objetos
const producto ={
    Nombre: "robot",
    disponible: true,
    precio: `$` + 20000
}
const{Nombre} = producto;
console.log(Nombre);


// Destructuring de arreglos
let numeros = [20, 30, 40, 50];

// En este caso se escoje por pocicion y no por indice
// let [primero, segundo, tercero] = numeros;

// si quiero traer un solo valor en este caso el tercer valor separo los valores que no necesito por comas
let [, , tercer] = numeros;
let [, second] = numeros;
let [primero, segundo, ...siguientes] = numeros;
// con esta segunda forma estamos adignando el primer y segunso elemento a una variable y el resto lo asignamos en otro objeto
console.log(primero);
console.log(tercer);
console.log(second);
console.log(siguientes);
