const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai)

filha1.nome = 'Anna'
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Biah',
        writable: false, // Não pode ser sobrescrito.
        enumerable: true, // Permeti ser listado.
    }, 
})

filha2.nome = 'Carla'
console.log(filha2.nome, filha2.corCabelo,)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for( let key in filha2) {
    // Verifica se os atributos vieram do objeto ou herança.
    filha2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por herança: ${key}`)
}