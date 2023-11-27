const cliente = { //objeto literal mas estatico menos dinamicos
    nombre: 'euclides',
    saldo: 2000
}

console.log(cliente);
console.log(typeof cliente);


function Cliente(nombre, saldo){ // Objeto constructor mas dinamico menos estatico
    this.nombre = nombre;
    this.saldo = saldo;
}

const euclides = new Cliente('euclides', 2000);
const alan = new Cliente('alan', 3000);

console.log(euclides);
console.log(typeof euclides);
// es dinamico porque puedo crear multiples instancias con un mismo objeto
console.log(alan);
console.log(typeof alan);

