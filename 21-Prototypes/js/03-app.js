
// creando prototypes o funciones para acceder mediante objetos

function Cliente(nombre, saldo){ // Objeto constructor mas dinamico menos estatico
    this.nombre = nombre;
    this.saldo = saldo;
}

// agregar una funcion para acceder a ella por medios del objeto
// primero debemos acceder al protorype de nuestra funion
Cliente.prototype.tipoCliente = function(){
    let tipo = "";
   if(this.saldo > 10000){
    tipo = 'Gold'
   }else if(this.saldo> 5000){
    tipo = 'Platino'
   }else{
    tipo = 'Plata'
   }
   return tipo

}

Cliente.prototype.retirar = function (saldoRetirar){
    this.saldo = this.saldo - saldoRetirar
}

Cliente.prototype.mostrarTodasLasPropiedades = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo: ${this.tipoCliente()}`
}

// instanciando el objeto de tipo cliente se comporta tal cual como una clase
const euclides = new Cliente('euclides', 12000);
console.log(euclides);
console.log(euclides.tipoCliente());
euclides.retirar(1000);
console.log(euclides.mostrarTodasLasPropiedades());

console.log(Cliente.prototype);



