// O Array no JavaScript internamente é um Objeto
console.log(typeof Array, typeof new Array, typeof []) // function object object

let aprovados = new Array('Beatriz', 'Marcio', 'Rodrigo')
console.log(aprovados) // [ 'Beatriz', 'Marcio', 'Rodrigo' ]

aprovados = ['Beatriz', 'Marcio', 'Rodrigo']
console.log(aprovados[0]) // Beatriz
console.log(aprovados[2]) // Rodrigo
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
console.log(aprovados[3]) // Paulo

aprovados.push('Maria')
console.log(aprovados.length) // 5

aprovados[9] = 'Pastelão'
console.log(aprovados.length) // 10

console.log(aprovados)
/*
    [
    'Beatriz',
    'Marcio',
    'Rodrigo',
    'Paulo',
    'Maria',
    <4 empty items>,
    'Pastelão'
    ]
*/

aprovados.sort() // Orden o array (modificando)
console.log(aprovados)
/*
    [
    'Beatriz',
    'Marcio',
    'Maria',
    'Pastelão',
    'Paulo',
    'Rodrigo',
    <4 empty items>
    ]
*/

delete aprovados[1] // transformando em underfined
console.log(aprovados)
/*
    [
    'Beatriz',
    <1 empty item>,
    'Maria',
    'Pastelão',
    'Paulo',
    'Rodrigo',
    <4 empty items>
    ]
*/

aprovados = ['Beatriz', 'Marcio', 'Rodrigo']
aprovados.splice(1,1) // indice, quantidade de linhas excluidas
console.log(aprovados) // [ 'Beatriz', 'Rodrigo' ]
