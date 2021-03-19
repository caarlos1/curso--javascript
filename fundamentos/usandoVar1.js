// Criei várias chaves, criando um escopo...
{
    {
        {
            {
                var variavelDoida = "Eu sou global!";
                console.log(variavelDoida); // Funciona aqui.
            }
        }
    }
}

// E variavel dentro ou fora estará funcionando.
console.log(variavelDoida);

// Já aqui ela está presa no escopo, e não será global.
function teste(){
    var varLocal = "Eu sou local.";
    console.log(varLocal);
}

// Chama a função.
teste();

// console.log(varLocal); // Dá erro, se tentar imprimir.

/*
    Resumindo, uma var pode ter apenas dois escopos possíveis:
    Global ou presa em uma função.
*/