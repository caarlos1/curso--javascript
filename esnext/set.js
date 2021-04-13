// Set não aceita repetição e não é indexado.
const times = new Set()
times.add('Vasco').add('São Paulo').add('Cruzeiro')
times.add('Vasco') // Não será adicionado, pois é uma repetição.

console.log( times );
console.log( times.size );
console.log( times.has('Vasco') ); // true
console.log( times.has('vasco') ); // false

times.delete( 'São Paulo' )
console.log( times.has('São Paulo') ); // false

// Criando Set
const nomes = ['Marcelo', 'Ricardo', 'Rapunzel', 'Ricardo']
const nomesSet = new Set(nomes)
console.log( nomesSet );