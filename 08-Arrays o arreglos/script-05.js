// En este capitulo aprendemos a añadir valores al final o al primcipio del array

let meses = [`enero`, `febrero`, `marzo`, `abril`, [`mayo`, `junio`, `julio`, ]];

meses.push(`octubre`);
meses[4].push(`agosto`);
meses[4].push(`septiembre`);

console.table(meses);