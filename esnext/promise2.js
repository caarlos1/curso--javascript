// setTimeout( () => {
//     console.log('Executando callback...');

//     setTimeout( () => {
//         console.log('Executando callback...');
    
//         setTimeout( () => {
//             console.log('Executando callback...');
        
//         }, 2000 )

//     }, 2000 )

// }, 2000 )

function esperar( tempo = 1 ) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Executando promisse...')
            resolve('Resolvido')
        }, tempo * 1000 )
    } )
}

esperar()
    .then(console.log)