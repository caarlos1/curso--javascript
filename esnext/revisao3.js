// ES8: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log( Object.values(obj) ) // Retorna Array: [ 1, 2, 3 ]
console.log( Object.entries(obj) ) // Retorna Matriz: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Olá!'
    }
}

console.log(pessoa.nome, pessoa.ola()); // Carla Olá!

// class e extends
class Animal {}
class Cachorro extends Animal {
    falar(){
        return "Auuuuuuu!!!"
    }
}

console.log(new Cachorro().falar() );