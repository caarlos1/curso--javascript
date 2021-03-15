// Començando, objeto é diferente de JSON.

const gato = {}; // Criei um objeto vazio.
gato.nome = "Juninho"; // Definindo dinâmicamente.
gato.peso = 4.5;
gato['cor'] = "Cinza"; // Definindo como se fosse um "Array".

console.log(gato);
console.log(typeof gato); // Tipo gato.

// Criando objeto já adicionando propriedades.
const lapis = {
    cor: 'Azul',
    tamanho: 10.5,
    informacoes: {
        ano: '1960',
        tipo: 'desenho'
    },
}

console.log(lapis);