const Pessoa = {
    nome: "Anna Karolina",
    idade: 21,
    peso: 50,
}

console.log(Object.keys(Pessoa)); // Pega chaves de um objeto
console.log(Object.values(Pessoa)); // Valores
console.log(Object.entries(Pessoa));  // Passa um array com arrays com a chave e valores.
// [ [ 'nome', 'Anna Karolina' ], [ 'idade', 21 ], [ 'peso', 50 ] ]

// Usando Object.entries e .forEach juntos.
// Object.entries(Pessoa).forEach( e => console.log(`${e[0]}: ${e[1]}`) );

// Ou nomendo com o destructuring:
Object.entries(Pessoa).forEach( ([chave, valor]) => console.log(`${chave}: ${valor}`) );

// Definindo proriedades com caracteristicas expecíficas.
Object.defineProperty(Pessoa, 'dataNacimento', {
    enumerable: true, // Listavel
    writable: false, // Não é possivel re-escrever.
    value: '03/12/2000'
})

// console.log(Pessoa.dataNacimento);
Pessoa.dataNacimento = 03/12/1998;
console.log(Pessoa.dataNacimento); // Não altera.


// Object.assign (ECMAScript 2015)
const destino = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3, a: 4}

// Essa função junta vários objetos no primeiro passado "destino".
const obj = Object.assign(destino, obj1, obj2)
console.log(obj); // Colquei nesse.
// console.log(destino); // Mas o destino também foi modificado.

// Para congelar um objeto:
Object.freeze(obj);
obj.c = 123; // Não vai funcionar.
console.log(obj);