// Os objetos do JavaScript são criados a partir de funções.

console.log(typeof Object); // Devolve que é uma função.
console.log(typeof new Object); // Devolve que é um objeto.

// Criando função vazia.
const Cliente = function() {}
console.log(typeof Cliente); // Função.
console.log(typeof new Cliente); // Objeto.

class Produto {}; 
console.log(typeof Produto); // Diz que é função.
console.log(typeof new Produto());

const Funcao = {};
console.log(typeof Funcao); // Retorna objeto.