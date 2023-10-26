// Eliminar y actualizar elementos del localStorage

// Eliminar
localStorage.removeItem("nombre");



// Actualizar
// el localstorage no tiene un metodo como tal para actualizar pero si podemos reescribir loos valores
// obteniendo la regerencia y volviendola a almacenar

let gastosArray = JSON.parse(localStorage.getItem("gastos"));
console.log(gastosArray);

let item1 = gastosArray[0]
item1["junio"] = 9000;
gastosArray.pop(0,1)
gastosArray.push(item1);

console.log(gastosArray);
localStorage.setItem("gastos", JSON.stringify(gastosArray));