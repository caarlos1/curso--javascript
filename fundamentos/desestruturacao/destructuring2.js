// Recurso do ES2018
// Exemplos de Desestruturação de um array.

// Extraio do array simples [10] o valor e crio a const a.
const [a] = [10];
console.log("Número:", a); // 10

const frutas = ["Banana", "Maracujá", "Uva"];

// É atribuido em sequencia...
const [f1, f2, f3, f4 = "Maçã"] = frutas;
console.log("Frutas:", f1, f2, f3, f4);

// Para ignorar uma posição é so adicionar um espaço entre as variaveis. Ex: [s1, , s3, ...]
const [ s1, , s3, s4, s5 = "Uva" ] = ["Morango", "Chocolate", "Baunilha", "Caramelo"] // Pulando o s2 de propósito.
console.log("Sorvetes:", s1, s3, s4, s5);

