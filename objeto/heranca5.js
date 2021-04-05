// A maria das paradas no JS é uma função, e toda função tem um .prototype
console.log( typeof String)
console.log( typeof Array)
console.log( typeof Object)

// Sabendo disso, podemos adicionar funções nelas.

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

// Criamos uma função que pode ser acessada pro todas as strings:
console.log('Meu nome é Carlinhos'.reverse());

Array.prototype.first = function () {
    return this[0]
}

console.log(['Macaco', 'Banana', 'KingKong'].first());
