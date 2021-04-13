const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then( r => {
    listarFuncionarios(r.data)
} )

// Minha Resolução:
const listarFuncionarios = f => {
    const ehMulher = fun => fun.genero === 'F'
    const ehChines = fun => fun.pais === 'China'
    const getSalario = (menor, atual) => atual.salario < menor.salario ? atual : menor

    const filtrado = f.filter(ehMulher).filter(ehChines).reduce(getSalario)
    console.log(filtrado);
}
