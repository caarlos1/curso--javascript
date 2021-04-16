// promises é uma promessa.
function falarDepoisDe(segundos, frase){
    return new Promise( (resolve, reject) => {
        setTimeout( () => { 
            resolve(frase) 
        }, segundos * 1000 )
    })
}

falarDepoisDe(1, 'Frase normal...')
    .then( frase => frase.concat('!?!?') )
    .then ( outraFrase => console.log(outraFrase) )
    .catch ( e => console.log(e) )