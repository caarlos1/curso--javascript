// Criando como classe.
// Pode ter prolema com this.

class Pessoa { 
    constructor (nome) {
        this.nome = nome; // Escrevendo o this, deixamos a variável como pública.
    }
    falar () {
        console.log(`Oi, meu nome é ${this.nome}.`)
    }
}

const pessoas1 = new Pessoa ("João"); // atributos passados ao lado da classe, vão para o construtcor.
pessoas1.falar();


// Function Factory (mais segura quando o this pode variar).
const pessoaFactory = nome => {
    return {
        falar: () => console.log(`Oi, meu nome é ${nome}!`),
    }
}

const pessoa2 = pessoaFactory("Maria");
pessoa2.falar();
