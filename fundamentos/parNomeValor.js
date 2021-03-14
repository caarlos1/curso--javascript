// O escopo dos lets e constantes são importantes
// Par nome / valor

const texto = "Olá"; // Contexto léxico 1

function exec(){
    const texto = "Opa, e aí!"; // Contexto léxico 2
    return texto;
}


// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua da fé',
        numero: 645,
    },
}

console.log(texto);
console.log(exec());
console.log(cliente);
