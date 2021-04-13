// let e const (escopo de bloco)
{
    var a = 2
    let b = 3
    console.log(b); // Só consigo imprimir b dentro do bloco.
}
console.log(a) // A var é global.

// Template String
const produto = 'iPad'
console.log(`${produto} muuuuuuuito caro...`)

// Destructuring
const [l, e, ...tras] = "cod3r"
console.log(l, e, tras); // c o [ 'd', '3', 'r' ]

const [x, , y] = [1, 2, 3]
console.log(x, y); // 1 3

// Retiro o nome e idade do objeto.
const { nome, idade: i } = { nome: 'Anna', idade: 20}
console.log(nome, i);