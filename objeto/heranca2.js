Object.prototype.att0 = 'Z' // Apenas para exemplo, mas não utilizar.

const avo = {
    att1: 'A',
}

const pai = {
    __proto__: avo,
    att2: 'B',
}

const filho = {
    __proto__: pai,
    att3: 'C',
}

console.log(filho.att0, filho.att1, filho.att2, filho.att3)

const carro = {
    velocidadeAtual: 0,
    velocidadeMax: 200,
    acelerar(delta) {
        if (this.velocidadeAtual + delta <= this.velocidadeMax)
            this.velocidadeAtual += delta
        else
            this.velocidadeAtual = this.velocidadeMax
    },
    status() {
        return `${this.velocidadeAtual} km/h de ${this.velocidadeMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velocidadeMax: 320,
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // O super puxa a função do Pai.
    }
}

// Setando o Prototype.
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerar(120)
volvo.acelerar(80)


console.log(ferrari.status())
console.log(volvo.status())