// En este capitulo aprenderemos a dar eventos con el scroll del mouse
window.addEventListener(`scroll`, darScroll);

// function darScroll(){
//     console.log(`scrolling`)
// }


// como detectar la cantidad de scoll que hemos dados
// function darScroll(){
//     let scrollpx = window.scrollY;
//     console.log(scrollpx);
//     // Con esto sabemos cuantos pixseles tiene toda la ventana de nuestra pagina
// }


// hacer que una seccion realize una animacion
function darScroll() {
    let premium = document.querySelector(`.premium`);
    let ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion.top);

    // .getBoundingClientRect();
    // esto me trae toda esta informacion
    // bottom:521.15625 // cuanto falta para llegar al elemento
    // height:448       // la altura de ese elemento
    // left:44         // a cuanto del eje izquierdo esta
    // right:1144      // a cuanto del eje detrecho eta
    // top:73.15625
    // width:1100      // el ancho de ese elemento
    // x:44            // las cordenadas del elemento en x
    // y:73.15625      // las cordenadas del elemento en y
    
    if(ubicacion.top > 683){
        console.log(`aun no hemos llegado`);
    }else{
        console.log(`Hemos llegado`);
    }
}
