function getPreco (imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 5496,
    desc: 0.1,
    getPreco, // Paasei a função que estava la fora para aqui dentro.
}

console.log( produto.getPreco() );
console.log( getPreco() )

const televisao = { preco: 5000, desc: 0.1 }


// Call passa os parametros do objeto para a função.
console.log(getPreco.call(televisao));
console.log(getPreco.apply(televisao));


// A diferença entre os dois é que os parametros em call são passados soltos
// e no apply são passados em um array.

// Por completo estou passando primeiro o contexto e depois os parametros.
console.log(getPreco.call(televisao, 0.3, "$"));

// Primeiro vem o objeto do cotexto e depois um array com os parametros.
console.log(getPreco.apply(televisao, [0.3, "$$"]));
