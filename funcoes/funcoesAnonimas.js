const soma = function ( x, y ) {
    return x + y;
}

// Fução anonima que recebe parametros e outra função anônima
const imprimirSoma = function (a, b, operacao = soma){
    console.log(operacao(a, b));
}

// Fução arrow que recebe parametros e uma função anônima
const imprimirSomaArrow = (a, b, operacao = soma) => console.log(operacao(a, b));

// Ambos funcionam iguais.
imprimirSoma(3, 5);
imprimirSomaArrow(3, 5, soma);
imprimirSomaArrow(3, 5, (x, y) => x + y); // Passando arrow.