// En este capitulo aprendemos como comparar null y undefined

// Ondefined se da cuando no inicializamos una variable y la imprimimos asi
let numero;
console.log(`${numero}`);
console.log(`${typeof numero}`);
// Me imprimera ondefined ya que no esta definida (definicion apagada)


// en el caso de null es mas bien asignarla
let numero2 = null;
console.log(`${numero2}`);
console.log(`${typeof numero2}`);
// si le doy typeof me dara como resultado object porque la especificacion de ecma dice que los null deben ser un objeto

console.log(`${numero === numero2}`);