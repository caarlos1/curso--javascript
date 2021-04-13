const fs = require('fs')

const produto = {
    nome: 'Celular', 
    preco: 1234.50, 
    desconto: 0.10,
}

// Escrevendo arquivos com o node.
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (err) => { console.log( err || 'Arquivo Salvo' ) } )