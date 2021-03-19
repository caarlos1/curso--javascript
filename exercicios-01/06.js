/*
    06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
    primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
    retornará o valor da aplicação sob o regime de juros compostos.
*/

let capitalInicial = 1400;
let taxaDeJuros = 0.07;
let tempoAplicacao = 2;


const jurosSimples = (capitalInicial, taxaDeJuros, tempoAplicacao) => 
    console.log(`Montante (Juros Simples): R$${ ((capitalInicial + (( capitalInicial * taxaDeJuros ) * tempoAplicacao )).toFixed(2)).replace(".", ",") }`);

const jurosCompostos = (capitalInicial, taxaDeJuros, tempoAplicacao) => 
    console.log(`Montante (Juros Compostos): R$${ (( capitalInicial * ( (1 + taxaDeJuros) ** tempoAplicacao)).toFixed(2)).replace(".", ",") } `);

console.log(`Investimento: ${capitalInicial}, Taxa de Juros: ${taxaDeJuros}, Tempo: ${tempoAplicacao}`);

jurosSimples(capitalInicial, taxaDeJuros, tempoAplicacao)
jurosCompostos(capitalInicial, taxaDeJuros, tempoAplicacao)