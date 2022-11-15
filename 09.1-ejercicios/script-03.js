// Hacer una función que reciba un array de strings y retorne una string igual a la concatenación de todos sus elementos.

function concatenar() {
    let string = [`i`, `n`, `f`, `o`, `r`, `m`, `a`, `t`, `i`, `c`, `a`]
    let concatenados = "";
    
    string.forEach((elementos) => {
        concatenados = concatenados + `${ elementos}`;
    })
    return concatenados;
}
let elementos = concatenar();
console.log(elementos);