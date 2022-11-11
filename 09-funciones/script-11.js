
// En este capitulo aprendemos a pasarle parametros a un arrow function

let aprendiendo = function(tegnologia, tegnologia2){
    console.log(`Aprendiendo ${tegnologia}, ${tegnologia2}`);
}


let aprendiendo2 = tegnologia => `Aprendiendo  ${tegnologia}`;
// Cuando le paso solo un parametro a un arrow function ya los parentesis no son necesarios

let aprendiendo3 = (tegnologia,tegnologia2) => `Aprendiendo  ${tegnologia}, ${tegnologia2}`;

aprendiendo(`JavasCript`, `Node.js`);
console.log(aprendiendo2(`JavasCript y arrow function`));
console.log(aprendiendo3(`JavasCript y arrow function`, `Node.js`));