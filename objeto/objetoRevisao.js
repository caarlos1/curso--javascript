// Objetos são coleção de pares de chave/valor.

const Produto = new Object;

// Adição dinâmica.
Produto.nome = "Cadeira"; // Posso fazer tanto assim
Produto['marca do produto'] = "Genérica"; // Quanto assim
// console.log(Produto['marca do produto']);
Produto.preco = 200;

console.log(Produto);

// Exclusão dinâmica
delete Produto.preco;
delete Produto['marca do produto'];
// console.log(Produto);

// Exemplo de objeto real.
const Carro = {
    modelo: 'A4',
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123,
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    }, {
        nome: 'Ana',
        idade: 42,
    },],

    calcularValorDoSeguro: function() {
        //...
    }
}

// Acessando
let numeroCasa = Carro.proprietario.endereco.numero = 1000;
console.log("Numero:", numeroCasa);
