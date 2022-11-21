// En este capitulo veremos el forlup o for tradicional el cual se ejecuta hasta que el codigo deja de cumplir una condicion
// El for consta de 3 partes for(let i = 0; iterador){}   for(let i = 0; i < 10; condicion){} for(let i = 0; i < 10; i++ Incremento){}  
for(let i = 9; i >= 0; i--){
    console.log(`numero ${i}`);
}


let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
];

for (let i = 0; i < carrito.length; i++) {
    console.table(`${carrito[i].nombre} - precio: ${carrito[i].precio}`);
}
