// com promise
const http = require('http')
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise( (resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on ('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve( JSON.parse(resultado) )
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}


// Quando todas as promessas forem cumpridas:
Promise.all ( [ getTurma('A'), getTurma('B'), getTurma('C') ] )
    .then( turmas => [].concat(...turmas)  ) // .concat junta arrays em um só.
    .then ( alunos => alunos.map( aluno => aluno.nome) )
    .then( nomes => console.log(nomes) )
    .catch( err => console.log(err.message))