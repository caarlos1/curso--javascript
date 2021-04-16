const { reject } = require("lodash")

const gerarNumeros = (min, max, proibidos) => {
    if(min > max)
        [max, min] = [min, max]

    return new Promise( (resolve, reject) => {
        let aleatorio = parseInt( Math.random() * (max - min + 1) ) + min

        if( proibidos.includes(aleatorio) ) reject('Número repetido')
        else resolve(aleatorio)
    })
}

// Fazendo um for com promises e escolhendo a quantidade loops
async function gerarMegaSena(qtNumeros) {
    try {
        const numeros = []
        for( let _ of Array(qtNumeros) ){
            numeros.push( await gerarNumeros(1, 60, numeros) )
        }
        return numeros
    } catch(e) {
        return gerarMegaSena(qtNumeros)
    }
}

// gerarNumeros(1, 5, [1, 2, 4] )
//     .then(console.log, console.log)

gerarMegaSena(8).then(console.log)