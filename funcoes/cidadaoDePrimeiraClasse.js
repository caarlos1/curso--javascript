// JS é First-Class Object (Citizens)
// Higher-order function

// Função normal.
function funcaoNormal() {}

// Funçao criada atribuida a uma constante ou variavel.
const funcaoConstante = function() {}

const arrayDeFuncoes = [ function(a, b) { return a + b }, funcaoNormal, funcaoConstante ];

// Usando uma função dentro de um array.
console.log( arrayDeFuncoes[0](7,5) );

// Armazenando em um Objeto.
const Pessoa = {}
Pessoa.falar = function(mensagem) { console.log( mensagem );}

Pessoa.falar("E ai meu chapa!");

// Passar função como parametro para outra função.
const funcaoComFuncao  = function (funcaoDeDentro){
    funcaoDeDentro();
}

// E ai eu passo ela dessa forma.
funcaoComFuncao( function () { console.log("Olha eu aqui doidão!") });

// Passando uma funão de retorno.
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

// E fazer isso aqui...
soma(7, 16)(9);