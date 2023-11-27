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



//herencia de prototypes

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo); //heredo las propiedades de cliente

    this.telefono = telefono;
}
Persona.prototype = Object.create(Cliente.prototype); // heredando las funciones de cliente
Persona.prototype.constructor = Cliente; // debido a que el contructor se desaparece de estamanera hacemos que el constructor de persona sea igual al de cliente

const euclides = new Persona("euclides", 10000, "45625");
console.log(euclides);
console.log(euclides.mostrarTodasLasPropiedades())

Persona.prototype.mostrarTelefono = function(){
    return this.telefono;
}
console.log(euclides.mostrarTelefono())