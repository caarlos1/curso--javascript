// Função factory que retorna produto com atributos passaveis.
const criarProduto = function (nome, preco, desconto = 0.1) {
    return { // Não precisa passar por exemplo "nome: nome,"
        nome,
        preco,
        desconto,
    }
}

console.log( criarProduto("Picole", "1.50") );