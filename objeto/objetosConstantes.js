// Por que podemos modificar o conteúdo que tem dentro de uma função constante?

// Quando criamos uma constante e adicionamos um objeto, na verdade a cosntante guarda
// apenas o endereço do objeto na memória, e não seu conteúdo.


// Para conseguir fazer que um objeto seja imutável como uma constante.
// Utilize Object.freeze(objeto)

const Pessoa = {
    nome: "Anna",
}

Pessoa.nome = "Anna Karolina";
console.log(Pessoa.nome);

// Congelando
Object.freeze(Pessoa);

Pessoa.nome = "Anna Biscoitera";
console.log(Pessoa.nome); // Retorna: Anna Karolina

// Criando objeto que já é constante (congelado).
const PessoaConstante = Object.freeze({ nome: "Juninho",});

console.log(PessoaConstante.nome);