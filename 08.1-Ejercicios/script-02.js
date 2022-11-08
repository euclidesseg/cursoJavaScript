/* Hacer un programa que pida N calcular el promedio de las notas aprobadas
 * y el peomedio de las notas desaprobadas aprueba con un promedio de 3*/

let  nNotas = prompt(`Ingresa el numero de notas`);
let nota;
let notasApro = 0; 
let notasRepro = 0;
let sumaNotasRepro = 0;
let sumaNotasApro = 0;
let promApro = null;
let promRepro = null;

for(let i = 0; i < Number.parseInt(nNotas); i ++){
    nota = Number.parseInt(prompt(`Ingresa la nota # ${i + 1}`));
    if(nota < 3){
        notasRepro = notasRepro + 1;
        sumaNotasRepro = sumaNotasRepro + nota;
        promRepro = sumaNotasRepro / notasRepro;
    }else if(nota >= 3){
        notasApro = notasApro + 1;
        sumaNotasApro = sumaNotasApro + nota;
        promApro = sumaNotasApro / notasApro;
    }

}
console.log(`El numero de notas reprobadas fueron = ${notasRepro}`);
console.log(`El numero de notas aprobadadas fueron = ${notasApro}`);
console.log(`La suma de notas aprobadas es  =  ${sumaNotasApro}`);
console.log(`La suma de notas reprobadas es = ${sumaNotasRepro}`);
console.log(`El promedio de notas aprobadas = ${promApro}`);
console.log(`El promedio de notas reprobadas es =  ${promRepro}`);



