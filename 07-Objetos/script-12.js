
// En este video estaremos viendo la otra forma de crear objetos en javascript
// object literal
const producto ={
    Nombre: "tablet",
    disponible: true,
    precio: `$` + 10000,
}

// Objet constructor
function Producto(nombre, precio, pais){
    this.nombre = nombre;
    this.precio = precio;
    this.pais = pais;
    this.disponible = true;
//     function Medidas(peso, ancho, largo){
//         this.peso = peso;
//         thhis.ancho = ancho;
//         this.largo = largo;
//     }
 }
 function Producto2(peso, ancho, alto){
    this.peso = peso;
    this.ancho = ancho;
    this.largo = alto;

 }
const producto2 = new Producto(`Monitor de 24 pulgadad`, 500,`china`); //creo un objeto de tipo de Producto y le envio los argumentos
console.log(producto2);

const producto3 = new Producto2(`15kg`, `150`,`80cm`);
console.log(producto3);

// uniendo dos object constructor
resultado = {...producto2, ...producto3}
console.log(resultado);
// aplicando destructuring a un object constructor
const{nombre, precio, pais, disponible} = producto2;
console.log(nombre)
console.log(precio)
console.log(pais)
console.log(disponible)