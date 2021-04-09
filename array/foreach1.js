const aprovados = ['Agata', 'Aldo', 'Jose', 'Zezinho']

// Dentro do callback de forEach a primeira posição é o valor e segunda é o indice
aprovados.forEach( function( nome, indice ){
    console.log(`${indice + 1} ) ${nome}`);
})

// Com arrow functions
aprovados.forEach( nome => console.log(nome))

// Criando variavel em função e passando para o forEach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

// No terceiro parâmetro podemos passar o array.
aprovados.forEach( (nome, indice, array) => console.log(indice, nome, array))