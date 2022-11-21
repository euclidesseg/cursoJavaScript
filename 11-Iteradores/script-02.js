// En este video aprenderemos lo que son las palabras break y continue en un for lup
// breack nos permite cortar la ejecucion de un for lup
// continue interserta un elemento y continua la ejecucion

// for(let i = 9; i >= 0; i--){
//     if(i === 5){
//         console.log(`Numero ${i} encontrado `);
//         break
//         // Aqui break corta totalmente todos los del forlup
//     }
//     console.log(`numero ${i}`);
// }

 
// for(let i = 9; i >= 0; i--){
//     if(i === 5){
//         console.log(`CINCO`);
//         continue
//         // Aqui continue corta unicamente el siclo actual y se pasa al siguiente es decir cuando llegue a 5 corta y ejecuta lo que este ahi 
//         // y se pasa al siguiente siclo
//     }
//     console.log(`numero ${i}`);
// }



let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400, descuento: true },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000, descuento: true },
    { nombre: `consola de videojuegos`, precio: 900 }
];

// Decirle al cliente que uno de los elementos que agrego al carrito tiene descuento
for (let i = 0; i < carrito.length; i++) {

    console.table(`${carrito[i].nombre} - precio: ${carrito[i].precio}`);

    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue
    }

}