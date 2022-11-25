// En este video aprenderemos el metodo .fintIndex para encontrar la posicion de un elemento en un array
// vamos a trabajar con el mismo arreglo ya que vamos a terner dos esenarios un arreglo de indices y un arreglo de objetos

let meses = [`enero`, `febrero`, `marzo`, `abril`, `mayo`];

let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
];

meses.forEach((mes, i) => {
    console.log(i)
    if(mes === `abril`){
        console.log(`Abril se encuentra en la posicion ${i}`);
    }
})

// En contrar el indice de abril
let  indice = meses.findIndex((mes) =>{
    mes === `abril`
})
console.log(indice)