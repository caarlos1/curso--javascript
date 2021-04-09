const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Desafio: Retornar um array apenas com os preços.

// Minha resolução
const extrairPrecos = (itemArray) => {
    itemArray = JSON.parse(itemArray)
    return itemArray['preco']
}

console.log(carrinho.map(extrairPrecos));

// Resolução do professor.
const extrairJSON = json => JSON.parse(json)
const verPrecos = produto => produto.preco

console.log( carrinho.map(extrairJSON).map(verPrecos) );