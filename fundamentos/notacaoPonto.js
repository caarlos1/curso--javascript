/*
    A notação ponto é quando usamos o "." na frente de alguma variavel, constante 
    ou objeto, e assim, acessamos certas funções ou acessas informações de algum objeto.
*/

console.log("Oie!"); // .log é notação ponto.

const Pessoa = {}
Pessoa.nome = "Jéssica"; // Usando a notação ponto .nome
Pessoa['nome'] = "Jéssica Ramones";

console.log(Pessoa['nome']);

function Animal(nome){
    this.nome = nome;
}

// Crio um objeto baseado na função Animal
const Pet = new Animal('Juninho');
console.log(Pet.nome); // Dessa forma consigo chamar o Pet.nome no console.