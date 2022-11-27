// En este capitlo aprendemos a poner parametros por default

function saludar(nombre, apellido = `....`){
    // si en la llamada a la funciion no se le manda ningun argumento tomara por default la igualdad del parametro 
    // si por el contrario si se le da un argumento ese ya no sera tomado en cuenta
    // aplica tambien para nombre
    console.log(`Hola ${nombre} ${apellido}`);
}
saludar(`Euclides`);
saludar(`Paula`, `Sotomayor`);