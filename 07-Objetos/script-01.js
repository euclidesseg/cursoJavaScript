// los objetos son la pieza principal de javasctipt ya que en un objeto puedo agrupar todos los atributos 
// de un producto en vez de declarar un variable para cada atributo 
// Agrupan todo en una sola variable
// Se caraterizan poque se igualan a llaves o corchetes

const profducto = `tv`
const disponible = true;
const precio = 20000; 

// todo lo anterios no los ahorramos poniendo un objeto que tenga dentro las mismas variables propiedades

const producto = {
    Nombre: "pc",
    disponible: true,
    precio: `$` + 20000,
};

console.log(producto);