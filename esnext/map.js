// Criando Set:
const tecnologias = new Map()
tecnologias.set( 'react', { framework: false} )
tecnologias.set( 'angular', { framework: true} )

console.log(tecnologias);
console.log( tecnologias.get('react').framework );

// Criando Map na mão:
const chavesVariadas = new Map([
    [ function () {}, 'Função' ],
    [ {}, 'Objeto' ],
    [ 123, 'Número' ],
])

console.log(chavesVariadas);

chavesVariadas.forEach( (valor, chave ) => {
    console.log(chave, valor);
} )

console.log(chavesVariadas.has( 123 )) // true // Verifica se existe.
chavesVariadas.delete( 123 ) // Exclui elemento.
console.log( chavesVariadas.has(123) ) // false
console.log( chavesVariadas.size ) // 2