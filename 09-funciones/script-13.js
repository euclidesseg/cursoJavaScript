
// En este capitulo aprendemos a crear el capitulo 9 de esta seccion con arrow function y a usar el metodo get y set 

let reproductor = {
    //en un objeto se le conoce como propiedades pero si es una funcion se le llama metodos de propiedades
    reproducir:  id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar:  () => console.log(`Pausando canciopn....`),
    borrar:  id => console.log(`Borrando cancion con el id ${id}`),
    crearPlayList: nombre => console.log(`Creando PlayList ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(this.cancion);
    }

    // metodos set y get para obtener y agregar valores a un 
}
reproductor.nuevaCancion = `Perfect`
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList(`Mozart`);
reproductor.crearPlayList(`Betoben`);

console.log(reproductor);