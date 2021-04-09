Array.prototype.reduce2 = function (callback, valorInicial) {
    let acumulador = valorInicial || this[i]
    let inicial = valorInicial ? 0 : 1
    for (let i = inicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador
}

// Ação que o reduce vai executar em seu callback
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]

console.log(nums.reduce2(soma, 10));