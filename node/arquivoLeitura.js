const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// Lendo de forma sincona...
const conteudo = fs.readFileSync(caminho, 'utf-8') // preciso passar o encode.
console.log(conteudo);

// Assincrona usando callback.
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log('Assincrono:', config );
} )

const config = require('./arquivo.json') // Já faz o JSON.parse e vem como objeto.
console.log(config); // Já é um objeto.

// Lendo e buscando nomes dos arquivos da pasta.
fs.readdir(__dirname, (err, arquivos ) => {
    console.log('Conteudo da pasta:', arquivos)
    // console.log();
})