// Exemplo de uso de Classes.
class Lancamento {
    constructor(n, v) {
        this.nome = n
        this.valor = v
    }
}

class CicloFinanceiro {
    constructor(m, a) {
        this.mes = m,
            this.ano = a,
            this.lancamentos = []
    }

    adicionarLancamento(...lancamentos) {
        // Percorre o array passado com ...lancamentos e adiciona em this.lancamentos
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 1100)
const contaDeLuz = new Lancamento('Luz', -110)

const contas = new CicloFinanceiro(6, 2018)
contas.adicionarLancamento(salario, contaDeLuz)

console.log(contas.sumario())