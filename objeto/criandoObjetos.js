/*
    Forma des criar um objeto no JavaScript.
*/

// Usando a notação literal.
const Objeto1 = {
    // ...
}
// console.log(Objeto1);


// Object em JS
const Objeto2 = new Object
// console.log(Objeto2);


// Funções construtora
function Objeto3(nome, preco, desc){
    this.nome = nome; // Atributo público.
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

// Crio um objeto com minha própria função construtora.
const p1 = new Objeto3('Caneta', 7.99, 0.15);
const p2 = new Objeto3('Notebook', 2999.99, 0.25);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Maria', 1180, 1);

console.log(f1.getSalario(), f2.getSalario());

// Object.creat
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Transformar um JSON em um Objeto com o JSON.parse()
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON);