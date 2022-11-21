// En Este capitulo aprenderemos lo que se conoce como while
// El while tambien consta de 3 partes y se ejecuta siempre que sea verdadera al igual que for
// tambien podemos hacer el fizzbuzz

let i = 0;                // Iterador
while (i < 100) {           // consicion 

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZBUZZ`);
    } else if (i % 3 === 0) {
        console.log(`${i} FIZZ`);
    }
    if (i % 5 === 0) {
        console.log(`${i} BUZZ`);
    }
    // console.log(`${i}`)

    i++                  // Incremento
}