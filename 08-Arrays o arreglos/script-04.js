// En este capitulo aprendemos a agregar valores a un array luedo de declarados
// Igual que los objetos los arreglos se pueden modificar a pesar de que esten declarados con const

let meses = [`enero`, `febrero`, `marzo`, `abril`, [`mayo`, `junio`, `julio`, ]];

// Modificando un arreglo en javascript
meses[0] = `Nuevo mes`;

// Tambien puedo declarar una nueva posicion en el arreglo
meses[7] = `Ultimo mes`;

console.table(meses);

