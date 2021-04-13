// O Node.js faz cache dos requires, ou seja, para se instanciar uma nova instância
// uma solução e usar Functions Factory

const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // Função factory
const contadorD = require('./instanciaNova')() // Função factory

contadorA.inc()
contadorA.inc()
console.log( contadorA.valor, contadorB.valor ) // 3 e 3, por causa da instancia no cache.

contadorC.inc()
contadorC.inc()
console.log( contadorC.valor, contadorD.valor ) // 3 e 1, pois usamos uma factory.