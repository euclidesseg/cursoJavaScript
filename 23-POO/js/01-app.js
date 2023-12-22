
// declarasion de clases en JavaScript
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //creando un metodo para esta clase, se le llama metodo y no funcion ya que el metodo debera ser llamado directamente desde un objeto de esta clase, es decir, ya pertenece a la clase.
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, Tu saldo: $${this.saldo}`
    }

    //propiedades estaticas, las propiedades estaticas no requieren de una instancia para que las puedas llamar es decir esta le pertenece a la clase y no a los objetos.
    static bienvenida(){
        return `Bienvenido a cajero`;
    }

}
// creasion de un objeto apartir de la clase
const euclides = new Cliente("eulides", 2000);

console.log(euclides);
console.log(euclides.mostrarInformacion())
//llamado de un metodo estatico
console.log(Cliente.bienvenida());