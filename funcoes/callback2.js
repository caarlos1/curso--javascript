const notas = [7.7, 6.9, 4.8, 9.8, 3.2, 4.6, 7.8];

let notasBaixas = [];

for (let i in notas) {
    if(notas[i] < 7){
        // notasBaixas recebe um push com o valor do arry.
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);

// O .filter espera uma função callback que retorna uma condicional.
notasBaixas = notas.filter( (nota) => nota > 7 );

console.log(notasBaixas);