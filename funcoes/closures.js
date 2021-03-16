// Closure é o escopo criado quando uma função é declarada.
// Esse escopo permite a função acessar e manipualar variaveis externas à função.
// A função procura de dentro pra fora.
// A função lembra da sua origem.

// Contexto lexico:

const x = "Global";

function fora(){
    const x = "Local";
    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
// Retorna local, por que dentr() encontra uma uma const x dentro de fora().


