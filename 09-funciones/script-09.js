
// En este capitulo aprendemos a añadir funciones a un objeto

let reproductor = {
    //en un objeto se le conoce como propiedades pero si es una funcion se le llama metodos de propiedades
    reproducir: function (id) {
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar: function () {
        console.log(`Pausando canciopn....`);
    },
   
    borrar: function (id) {
        console.log(`Borrando cancion con el id ${id}`);
    },

    crearPlayList: function(nombre){
        console.log(`Creando PlayList ${nombre}`);
    }
}
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList(`Mozart`);
reproductor.crearPlayList(`Betoben`);

console.log(reproductor);