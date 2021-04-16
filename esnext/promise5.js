function funcionarioOuNao(valor, chanceErro) {
    return new Promise( ( resolve, reject ) => {
        if(Math.random() < chanceErro)
            reject('Ocorreu um erro.')
        else resolve(valor)
    } )
}

funcionarioOuNao('Funcionário encontrado.', 0.3)
    .then( // É possível tratar erros pelo .then
        valor => console.log(valor), 
        err => console.log( `Erro: ${err}` ) 
    )
    // .catch( err => console.log(err) )
    .then(() => console.log('Fim do processo.'))