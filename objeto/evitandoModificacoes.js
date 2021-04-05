// Object.preventExtensions 
const produto = Object.preventExtensions({
    nome: 'Sapato',
    preco: 80,
    tag: 'Novo'
})

// Verifica se é possivel adicionar novos atributos.
console.log(Object.isExtensible(produto)) // false

produto.nome = 'Tênis'
produto.descricao = 'É muito legal' // Não será adicionado.
delete produto.tag // Apaga tag

console.log(produto)

// Object.seal
const pessoa = {
    nome: 'Carlinhos',
    idade: 23,
}
Object.seal(pessoa) // Selamos o objeto, mas ainda conseguimos os atributos.

console.log(Object.isSealed(pessoa)) // true

pessoa.sobrenome = 'Roberto', // Não vai ser adicionado.
delete pessoa.nome // Não vai ser deletado
pessoa.idade = 18 // Vai ser alterado.

console.log(pessoa)

// Object.freeze == selado com os valores constantes
