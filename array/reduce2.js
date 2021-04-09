const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Verificar se todos os alunos são Bolsistas
// Minha resolução
const todosBolsistas = alunos
    .map(alunos => alunos.bolsista)
    .reduce( (valorAcumulado, valorAtual) => {
        if(!valorAtual){
            valorAcumulado = false
        }
        return valorAcumulado
    }, true )

console.log(todosBolsistas);

// Professor
const todosSaoBolsista = (resultado, bolsista) => resultado && bolsista
console.log( alunos.map(a => a.bolsista).reduce(todosSaoBolsista) );


// Desafio 2: Algum aluno é bolsista?
const ahBolsistas = alunos
    .map(alunos => alunos.bolsista)
    .reduce( (valorAcumulado, valorAtual) => {
        if(valorAtual){
            valorAcumulado = true
        }
        return valorAcumulado
    }, false )

console.log(ahBolsistas);

// Professor
const ahAlgumBolsista = (resultado, bolsista) => resultado || bolsista
console.log( alunos.map(a => a.bolsista).reduce(ahAlgumBolsista) );
