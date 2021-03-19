// Criando uma constante e amazenando uma função.
const imprimirSoma = function(a, b){
    console.log(a + b)
}

// Indo...
imprimirSoma(8, 12); // 20

// Criando função arrow:
const funcaoArrow = (a, b) => {
    return a + b;
}

// Imprimindo...
console.log(funcaoArrow(98, 152)); // 250

// Simplificando ainda mais uma função arrow com retorno implicito.
const arrowPititica = (a, b) => a - b; // O return dessa forma já está implicito.

// Saca só o bixo funcionando:
console.log(arrowPititica(69, 24)); // 45