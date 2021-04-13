// this dentro de um modulo aponta para o module.exports
// this dentro de uma função aponta para o global

console.log(this === global) // false
console.log(this === module) // false

console.log(this === module.exports) // true
console.log(this === exports) // true

function logThis() {
    console.log('Dentro de uma função...');
    console.log(this === module.exports) // false
    console.log(this === global) // true
}

logThis()