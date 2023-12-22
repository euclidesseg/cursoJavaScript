
// declarasion de clases en JavaScript
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, Tu saldo: $${this.saldo}`
    }

    //propiedades estaticas, las propiedades estaticas no requieren de una instancia para que las puedas llamar es decir esta le pertenece a la clase y no a los objetos.
    static bienvenida(){
        return `Bienvenido a cajero`;
    }

}
// creasion de un objeto apartir de la clase

// herencia de clases, cuando  una clase hereda de otra hereda tanto sus metodos como sus atributos
class Emplresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);// esto hace para heredar atributos desde el constructor
        this.telefono = telefono;
        this.categoria = categoria;
    }

    
    static bienvenida(){ // reecribir un metodo
        return `Bienvenido a cajero de empresa`;
    }

}
const euclides = new Emplresa("eulides", 2000, 3122349449, "gold");
console.log(euclides)
console.log(euclides.mostrarInformacion());
console.log(Emplresa.bienvenida());
