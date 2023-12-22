// propiedades privadas en una clase

class Cliente{

    //declarando un atributo privado ahora nombre es una propiedada privada
    #nombre
    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, Tu saldo: $${this.saldo}`
    }

    //propiedades estaticas, las propiedades estaticas no requieren de una instancia para que las puedas llamar es decir esta le pertenece a la clase y no a los objetos.
    static bienvenida(){
        return `Bienvenido a cajero`;
    }

    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }

}
const euclides = new Cliente("Euclides", 2000);
console.log(euclides.getNombre());
euclides.setNombre("Avel");
console.log(euclides.getNombre());

