const moduloA = require('../../moduloA')
console.log(moduloA.ola);

const c = require('./pastaC/') // Caso tenha um arquivo index.js não precisa do nome do arquivo.
console.log(c.ola);

// Modulos do core do Node.js podem ser acessados sem caminho:
// const http = require('http')
// http.createServer( (req, res) => {
//     res.write('Bom dia')
//     res.end()
// } ).listen(8080)