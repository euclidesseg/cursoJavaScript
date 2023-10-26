// Restricciones
/* 
    1. Almacena datos en par clave valor
    2. Sus valores siempre se almacenan como string
    3. limite de almacenamiento de 5MB
*/

localStorage.setItem("nombre", "Euclides")

// Almacenar objeto en localstorage

const usuario = {
    nombre: "Euclides",
    token: "GD85KY0023F1BNYKZ"
}

//podemos convertir el objeto en un string para guardarlo en el localStorage usando el metodo stringify de JSON
const usuarioString = JSON.stringify(usuario); 
console.log(usuarioString);

localStorage.setItem("usuario",JSON.stringify( usuario));

const gastos = [
    {
        enero: 2000,
        febrero: 3000,
        marzo: 5000,
        abril: 10000,
        mayo: 1000
    }
]
localStorage.setItem("gastos", JSON.stringify(gastos)); 