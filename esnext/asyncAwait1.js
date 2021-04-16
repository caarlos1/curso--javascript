function esperar( tempo = 1 ) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            // console.log('Executando promisse...')
            resolve('Resolvido')
        }, tempo * 1000 )
    } )
}


const retornarValor = () => new Promise( (resolve, reject) => {
    setTimeout( () => resolve(1), 5000 )
})


// Em funções async eu forço a espera das promises para a execução do código.
async function executar() {
    let valor = await retornarValor()
    console.log(`Executando Async/Await ${valor}...`);
    await esperar()
    console.log(`Executando Async/Await ${valor + 1}...`);
    await esperar()
    console.log(`Executando Async/Await ${valor + 2}...`);
    await esperar()
}

executar()