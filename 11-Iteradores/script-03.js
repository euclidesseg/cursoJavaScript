// En este video estaremos viendo lo que se conoce como el reto fizz buzz

// 3, 6, 9, 12, 15... fizz
// 5, 10, 15, 20, 25 30...buzz
// 15, 30, 45.....FIZZBUZZ

for(let i = 1; i <= 100; i++){

    // Para que funciones se deve poner la condicion menos comun al principio de todas las iteraciones
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FIZZBUZZ`);
        } else if(i % 3 === 0 ){
         console.log(`${i} FIZZ`);
    }
    if(i % 5 === 0 ){
        console.log(`${i} BUZZ`);
    }
}