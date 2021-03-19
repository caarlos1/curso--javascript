// Recurso do ES2018
// Exemplos de Desestruturação de um objeto.

const Pessoa = {
    nome: "Carlos Roberto",
    idade: 22,
    endereco: {
        logradouro: 'Rua do Caju',
        numero: 1000
    }
}

// Extraindo / criando constantes com o valor de "nome" e "idade".
const { nome, idade } = Pessoa; 
// console.log(nome, idade);

// Salvando com nomes diferentes:
const { nome : n, idade : i } = Pessoa;
console.log( n, i );

// Caso queira buscar valores e ele não exista, é possível atribuir um padrão:
const { corDePele : cor = "Pardo", tamanhoDoCabelo : cabelo = "Grande" } = Pessoa;
console.log(cor, cabelo);

// Agora para criar em cima de um objeto dentro de outro.
const { endereco: { logradouro, numero } } = Pessoa;
console.log( logradouro, numero );

// Também posso fazer assim:
const { endereco } = Pessoa;
console.log(endereco.numero);