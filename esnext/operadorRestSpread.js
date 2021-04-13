// operador ... rest (juntar) / spread (espalhar)

// Usando como parâmetro de função:
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log( total( 2, 3, 4, 5 ) ); // 14

// Usando spread com Objeto
const funcionario = { nome: 'Maria', salario: 1500.00 }
const clone = { ativo: true, ...funcionario } // Espalho (copio) os atributos de funcionarios em clone
console.log(clone); // { ativo: true, nome: 'Maria', salario: 1500 }

// Usando spread com array.
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA] // Espalho grupoA em grupoFinal
console.log(grupoFinal);