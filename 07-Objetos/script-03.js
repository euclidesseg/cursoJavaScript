
// En este video estaremos viendo como agregar una nueva propiedad a nuestro objeto vuando ya estamos por fuera de el
const producto ={
    Nombre: "robot",
    disponible: true,
    precio: `$` + 20000
}

// Agregar nuevas propiedades al objeto
producto.imgagen = "imagen.jpg";
// Para agregar una nueva propiedad tenemos en cuenta 2 puntos 
//1. que la propiedad no este declarada dentro del objeto ya que la reescribiriamos 
//2. Ya que estamos fuera del objeto si usamos la sintaxis te punto y el signo de igual para igualar el valorde de la propiedad

// Con el siguiente metodo podremos eliminar un producto
delete producto.imgagen; 
console.log(producto);