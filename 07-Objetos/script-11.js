
// En este capitulo estaremos viendo lo que es la palabra this en javascript
// La palabra this se usa en funciones que estan dentro de objetos para hacer referencia a una propiedad del mismo objeto
const Nombre = `Hola`;
precio = 20;
const producto ={
    Nombre: "robot",
    disponible: true,
    precio: `$` + 20000,
    // lo que haremos ahora se conoce como funciones de javascript lo que en java seria un metodo
    mostrarinfo: function(){
        console.log(`El producto: ${Nombre} tiene un precio de: ${precio}`);
        // este primer console se ira a traer las variables que estan fuera del objeto 

        console.log(`El producto: ${this.Nombre} tiene un precio de: ${this.precio}`);
        // para que me traiga las variables que estan dentro del objeto y no las que estan fuera 
        // Agrego la palabra recervada this y seguido de . el nombre de la propiedad del objeto
        // Busca la propiedad dentro del objeto en que se declaro la funcion
    }
}
producto.mostrarinfo();

const producto2 ={
    Nombre: "tablet",
    disponible: true,
    precio: `$` + 10000,
    mostrarinfo: function(){
        console.log(`El producto: ${this.Nombre} tiene un precio de: ${this.precio}`);
        // se mantiene dentro de su ambito en el objeto declarado
    }
}

producto2.mostrarinfo();