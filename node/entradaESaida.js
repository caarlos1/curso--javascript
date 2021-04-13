const anonimo = process.argv.indexOf('-a') !== -1 // procura pela flag -a
// console.log(anonimo);

if (anonimo) {
    process.stdout.write('Opa, e aí anônimo! \n')
    // process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', (data) => {
        const nome = data.toString().replace('\n', '')
        const resposta = `Fala aí ${nome}`
        console.log(resposta);
        // process.stdout.write( `${resposta}` )
        process.exit()
    })
}
