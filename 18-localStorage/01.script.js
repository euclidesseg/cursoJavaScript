//Obtener del localStorage


// esto me retornara el usuario como un string ya que asi se guardo en el localStorage
const usuario = localStorage.getItem("usuario");
console.log(usuario);

// para obtenerlo en formato json o arreglo usamos el siguiente metodo
// este metodo que tambien pertenese a JSON convierte un string a json o arreglo dependiendo la forma que tenga el sting
console.log(JSON.parse(usuario))



// ejemplo con el arreglo que tenemos
console.log(localStorage.getItem("gastos"));
const gastos = JSON.parse( localStorage.getItem("gastos"));
console.table(gastos);