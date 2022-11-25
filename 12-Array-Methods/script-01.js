// Al igual que vimos metodos para strings para objetos para numeros tambien hay metodos que son bastante utiles para arreglos

let meses = [`enero`, `febrero`, `marzo`, `abril`, `mayo`];

let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
];

// Comprobar si un valor existe en un arreglo

meses.forEach((mes) => {
    // Esta seria la forma manuel ade hacerlo
    if(mes === `enero`){
        console.log(`Estamos en el primer mes ${mes}`);
    }
    
})

// En la vida real seria de la siguiente manera
// Retornara un booleano
let resultado = meses.includes(`enero`);
console.log(resultado)

// .incluede funciona solamente con arreglos basados en un indice mas no en un arreglo de objetos 

// En un arreglo de objetos se utiliza .some

let existe = carrito.some((objeto) => {
    // va a ir iterando sobre cada uno de los objetos y supongamos que queremos verificar si celular esta en uno de los objetos
    return  objeto.nombre === `celular iphon`;
})

console.log(existe);


// .some tambien funciona en un arreglo tradicional o de indices 
let existe2 = meses.some((mes) =>{
    return mes === `febrero`
})

console.log(existe2);