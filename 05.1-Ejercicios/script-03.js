const nota1 = prompt(`Ingrese la nota del primer trimestree`);
const nota2 = prompt(`Ingrese la nota del segundo trimestree`);
const nota3 = prompt(`Ingrese la nota del tercer trimestree`);

let notaFinal =  (Number.parseInt(nota1) + Number.parseInt(nota2) + Number.parseInt(nota3)) / 3;

if(notaFinal > 3){
    console.log(`El estudiante gano la materia con una nota de ${notaFinal}`);
}else{ 
    console.log(`El estudiante perdio la materia con una nota de ${notaFinal}`);
}