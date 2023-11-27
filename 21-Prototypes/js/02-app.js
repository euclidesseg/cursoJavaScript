function Cliente(nombre, saldo){ // Objeto constructor mas dinamico menos estatico
    this.nombre = nombre;
    this.saldo = saldo;
}
const euclides = new Cliente('euclides', 2000);
const alan = new Cliente('alan', 3000);


function Empresa(nombre, saldo, caterogira){ // Objeto constructor mas dinamico menos estatico
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = caterogira
}
const bitForge = new Empresa('BitForge', 40000, 'desarrollo-investigacion');


// funcion que me formatea un cliente
function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `nombre cliente: ${nombre}, saldo: ${saldo}`
}
function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `nombre Empresa: ${nombre}, saldo: ${saldo}, caterogira ${categoria}`

}
console.log(formatearCliente(alan))// ya aqui me indica que el argumento que le mando es de tipo Cliente
console.log(formatearEmpresa(bitForge))// ya aqui me indica que el argumento que le mando es de tipo Cliente


//Notas:
// Los prototypes son muy utiles al momento de trabajar con proyectos grandes en el que varias personas 
// esten trabajando.