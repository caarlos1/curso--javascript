// Exemplos de callbacks:

const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(elemento, indice){
    console.log(`${indice + 1}. ${elemento}.`);
}

fabricantes.forEach(imprimir);

// Passando o callback.
fabricantes.forEach(function(elemento, indice){
    console.log(`${indice + 1}. ${elemento}.`);
});

// Função arrow:
fabricantes.forEach( (elemento, indice) => console.log(`${indice + 1}. ${elemento}.`) )

// Link da documentação de .forEach
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#imprimindo_os_conte%C3%BAdos_de_uma_ordem
