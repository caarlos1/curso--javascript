// Função construtora.
function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(MeuObjeto.prototype === obj2.__proto__) // true

// Adicionando no pai "MeuObjeto" novos métodos e propriedades.
MeuObjeto.prototype.nome = 'Juca' // Acionando
MeuObjeto.prototype.falar = function () {
    console.log(`Opa! Meu nome é ${this.nome}`);
}

obj1.falar()
obj2.nome = 'Marciel'
obj2.falar()

// Resumão:
console.log( (new MeuObjeto).__proto__ === MeuObjeto.prototype ) // true
console.log( MeuObjeto.__proto__ === Function.prototype ) // true
console.log( Function.prototype.__proto__ === Object.prototype ) // true

// Toda objeto tem um __proto__ e toda funão tem um .prototype