const gerarNumeros = (min, max, tempo = 1) => {
    if(min > max)
        [max, min] = [min, max]

    return new Promise( resolve => {
        setTimeout( () => {
            let aleatorio = parseInt( Math.random() * (max - min + 1) ) + min
            resolve(aleatorio)
        }, tempo * 1000)
    })
}

// gerarNumeros(1, 10, 1)
//     .then(console.log)

// Promise.all espera todos os promises serem resolvidos para dar sua resposta.
const gerarVariosNumeros = () => {
    return Promise.all([ 
        gerarNumeros(1, 50, 1),
        gerarNumeros(1, 50, 2),
        gerarNumeros(1, 50, 3),
        gerarNumeros(1, 50, 4),
        gerarNumeros(1, 50, 5),
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then( () => {
        console.timeEnd('promise')
    } )