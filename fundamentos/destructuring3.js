// Crio e já passo um objeto com os valores min e max com valores padrões

function rand( { min = 0, max = 1000 } ){
    const valor = Math.random() * (max - min) + min;
    return console.log(Math.floor(valor));
}

// Passando valores
rand( { max: 300 } );

// Sem passar valores:
rand( {} ); // É necessário adicionar o {}, ou dá erro.
