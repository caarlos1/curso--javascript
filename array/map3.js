Array.prototype.map2 = function(callback) {
    let novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push( callback(this[i], i, this) )
    }

    return novoArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

const extrairJSON = json => JSON.parse(json)
const verPrecos = produto => produto.preco

console.log( carrinho.map2(extrairJSON).map2(verPrecos) );