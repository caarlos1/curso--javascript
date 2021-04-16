const gerarNumeros = (min, max) => {
    if(min > max)
        [max, min] = [min, max]

    return new Promise( resolve => {
        let aleatorio = parseInt( Math.random() * (max - min + 1) ) + min
        resolve(aleatorio)
    })
}

gerarNumeros(1, 10)
    .then(console.log)