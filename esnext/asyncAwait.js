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

// Recurso do ES8 com o objetivo de simplificar o uso de promisse
// Async / Await transformam uma função em assincrona
let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    // Retorna um objeto AsyncFunction
    return [].concat(turmaA, turmaB, turmaC)
}

obterAlunos()
    .then( alunos => alunos.map( aluno => aluno.nome) )
    .then( nomes => console.log(nomes) )