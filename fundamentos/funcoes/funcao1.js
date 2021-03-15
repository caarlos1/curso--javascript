// Uma função é um como um verbo. 
// Um bloco de código que é possível repetir.

// Função simples.
function imprimirSoma(a, b){
    console.log(a + b);
}

// Usando a função.
imprimirSoma(6, 8); //  14
imprimirSoma(6); // NaN

// Função com retorno.
function somaDiferente(a, b = 5){
    return a + b;
}

console.log(somaDiferente(10)); // 15