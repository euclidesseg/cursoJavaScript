// En javascript tambien puedes cambiar el css de un elemento 
// tambien se puede agregar o quitar clases

let encabezado = document.querySelector(`.contenedor h1`);
console.log(encabezado)
// mediante la palabra style puedo encontrar todas propiedades de estilos en javascript
// console.log(event.target.style);

// En java script para dar estilos es diferente a css ya que las palabras como background-color
// se elimina el guion y la segunda palabra empieza con camelCase backgroundColor
encabezado.style.color = `blue`
encabezado.style.backgroundColor = `tomato`
encabezado.style.fontFamily = `Arial`
encabezado.style.textTransform = `uppercase`
encabezado.style.borderRadius = '30px'
encabezado.style.padding = `15px`
console.log(encabezado)

// para no hacer el codigo javascript mas largo es eliminar o agregar clases

let card = document.querySelector(`.card`);
// agregando clase
card.classList.add = `nueva-clase, segunda-clase`
// eliminando clase
card.classList.remove(`card`)
console.log(card.classList)
// mostrara la nueva clase

