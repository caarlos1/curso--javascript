/* 
    Você pode verificar se uma variavel está vazia apenas
    colocando em um if.

    Caso esteja vazia, retornará falso
    no outro caso retornará verdadeiro.

    Qualquer número diferente de 0 também retorna verdadeiro.
*/

let variavelQualquer;

if (variavelQualquer) // false
    console.log("Vou aparecer?");
 
variavelQualquer = "Agora tenho algo.";

if (variavelQualquer) // true
    console.log("Vou aparecer!");

variavelQualquer = " ";

if (variavelQualquer) // true
    console.log("Espaço também funciona.");