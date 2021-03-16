/*
    Passando valores padrões para variáveis.
*/

// Passando argumentos padrões caso não seja digitado nada.
function soma1(a = 1, b = 1, c = 1){
    return a + b + c;
}

function soma2(a, b, c){
    a = a || 1; // if "a" passado em arguments, "a" recebe "a", else recebe 1.
    b = b || 1;
    c = c || 1;
    return a + b + c; // Resultado: 3 (caso não passe nada).
}

function soma3(a, b, c){
    a = a !== undefined ? a : 1; // if "a" seja explicitamente diferente de undefined, recebe "a", else recebe 1.
    b = 1 in arguments ? b : 1; // if "b" tenha indece 1 no arguments, recebe "b", else recebe 1. 
    c = isNaN(c) ? 1 : c; // if "c" não seja um número recebe 1, else recebe o valor de "c".
    return a + b + c;
}


console.log(soma1());
console.log(soma2());
console.log(soma3());