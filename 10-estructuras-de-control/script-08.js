// En este capitulo aprenderememos a detener la ejecucion de un if con una funcion

let autenticado = true;

if (autenticado) {
    console.log(`El usuario esta autenticado`);
}

let puntaje = 500;

function revisarPuntaje() {
    if (puntaje > 400) {
        console.log(`excelente`);
        return
        // Despues del return no va seguir ejecutando ningun codigo, es decir, no ejecutara el siguiente if 
        // y esto funciona solamente dentro de una funcion
    }
    
    if (puntaje > 300) {
        console.log(`Buen puntaje... felicidades`);
        return
    }
    // La forma para que ambos codigos se ejecuten es quitando los return y basado en el puntaje de la condicion, empezar 
    // a condicionar desde arriba hacia abajo
}

revisarPuntaje();

