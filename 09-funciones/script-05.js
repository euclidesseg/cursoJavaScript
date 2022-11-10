// En este capitulo aprendemos funciones que toman parametros y argumentos


function sumar(a, b ){  // a y b son parametros
    console.log(a+ b);
}
sumar(2,3); // 2 y 3 son argumentos
sumar(152,223); // 152 y 223 son argumentos


function saludar(nombre, apellido){
    console.log(` Hola ${nombre} ${apellido}`);
}
saludar(`Euclides`, `Perez`);
saludar(`Euclides`);