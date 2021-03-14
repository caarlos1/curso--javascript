// Criando um array simples com números.
const arraySimples = [7.6, 8.5, 3.8, 6.3]

console.log(arraySimples); // Imprime a estrutura do array completa.
console.log(arraySimples[0], arraySimples[2]); // Imprime o valor pelo índice.
console.log(arraySimples[4]) // Puxando um valor que não existe, retorna undefined.

// Caso criemos um espaço
// arraySimples[10] = 2.1;
// console.log(arraySimples); 
// Resultado: [ 7.6, 8.5, 3.8, 6.3, <6 empty items>, 2.1 ]

// Funções principais.
console.log(arraySimples.length); // .lenght retorna o tamanho do array.
arraySimples.push({id: 3}, false, null, "Batata"); // .push insere novos valores.

console.log(arraySimples); 
// Resultado: [ 7.6, 8.5, 3.8, 6.3, { id: 3 }, false, null, 'Batata' ]

// Editando o Array:
console.log(arraySimples.pop()); // Retira o último valor do array (editando) e devolve.
delete arraySimples[0]; // Excluo o valor do primeiro índice.

// O engraçado é que, o array.. É tipo objetc.
console.log(typeof arraySimples);