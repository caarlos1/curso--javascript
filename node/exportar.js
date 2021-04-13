// console.log(module.exports ===  this); // true
// console.log(module.exports === exports); // true

this.a = 1
exports.b =2
module.exports.c = 3

exports = null // Não funcionada
console.log(module.exports); // Esse é retornado.

// Para mudar o que é exportado em geral é necessário usar o module.exports
module.exports = {
    nome: 'Carlos',
    idade: 23,
}

console.log(module.exports);