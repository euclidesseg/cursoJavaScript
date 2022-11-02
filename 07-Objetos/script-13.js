// Ahora veremos los ultimos metodos para objetos

const producto ={
    Nombre: "tablet",
    disponible: true,
    precio: `$` + 10000,
}

// Me retorna las propiedades
console.log(Object.keys(producto));

// Me retorna los valores de las propiedades
console.log(Object.values(producto));

// Me retorna todo lo que tiene el objeto
console.log(Object.entries(producto));


