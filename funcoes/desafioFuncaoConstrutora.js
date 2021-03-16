// Eu prefiro usar uma Função construtora para criar objetos.

function Pessoa (nome = "Carlos") {

    this.nome = nome;

    this.falar = function () {
        console.log(`Olá, meu lindo nome ${ this.nome }.`);
    }
}

// precisa do new para iniciar um objeto com uma função Construtora.
const pessoaNormal = new Pessoa();

pessoaNormal.falar();