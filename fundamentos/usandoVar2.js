var numero = 1; 
{
    var numero = 2;
    console.log(numero, 'está dentro.');
}

console.log(numero, 'está fora.');


// Outro teste:

// Criando uma var global.
var variavelGlobal = "Biscoito";

function euGosto(){
    // Chamando ela aqui dentro.
    console.log("Eu gosto de", variavelGlobal);
}

euGosto(); // Eu gosto de Biscoito
// Mesmo sem importar, ainda funciona.