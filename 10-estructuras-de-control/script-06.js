// En este capitulo revisaremos el operador y para que se cumplan 2 condiciones dentro de un codigo 

let edad = 18;
let valorPrestamo = 3000000;

if(edad >= 18 && valorPrestamo <= 1000000){
    console.log(`Si se le puede prestar cumple con los requerimientos`);
}else if(edad < 18){
    console.log(`No tiene la mayoria de edad`);
}else if(valorPrestamo > 2000000){
    console.log(`El valor es muy elevado`)
}else{
    console.log(`No se le puede prestar no cumple con los requerimientos`);
}