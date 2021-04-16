const fs = require('fs')
const caminho = __dirname + '/dados.txt'

const importarArquivo = (arquivo) => {
    return new Promise( (resolve, reject) => {
        fs.readFile(arquivo, 'utf-8', (err, conteudo) => {
            resolve(conteudo)
        } )
    } )
}

importarArquivo(caminho)
    .then( string => string.split('\r\n') )
    .then( linhas => linhas.join(', ') )
    .then( final => console.log(`Resultado Final: ${final}.`) )