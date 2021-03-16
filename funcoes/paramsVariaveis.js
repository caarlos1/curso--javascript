function soma(){
    let soma = 0;
    // arguments é um objeto com os argumentos passados.
    for (i in arguments){
        soma += arguments[i]; // += é o mesmo que: soma =  soma + arguments[i]
    }

    return soma;
}

console.log(soma()); // Como não tem nada, é 0
console.log(soma(4, 6.8, 9, 7.7)); // Como não tem nada, é 27.5
console.log(soma(4, "Teste", 10)); // 4Teste10