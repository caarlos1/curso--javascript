// Crio uma variavel let e seto que é true
let isAtivo = false;
console.log(isAtivo);

console.log("Positivos não convencionais: ");

isAtivo = 1; // Agora passo o númeor 1 inteiro...
console.log(!!isAtivo); // Então agora preciso de uma dupla negativa "!!" e...
// true...

// Outros testes que dão postivo:
console.log(!!8); // Positivos.
console.log(!!-7); // Negativo.
console.log(!!' '); // Espaço.
console.log(!!"Batata"); // Strings.
console.log(!![]); // Arrays.
console.log(!!{}); // Objetos.
console.log(!!Infinity); // Infinito.
console.log(!!(isAtivo = true)); // Se atribuir verdadeiro.

console.log("Negativos não convencionais: ");
console.log(!!0); // Zero
console.log(!!''); // String vazia.
console.log(!!null); // Nulo
console.log(!!NaN); // Not a Number
console.log(!!undefined); // Indefinido
console.log(!!(isAtivo = false)); // Se atribui falso.

// Teste da vida real:
let nome = ''; // Como está vazio, significa que é falso.
console.log(nome || 'Desconhecido'); // Imprime Desconhecido.

nome = 'Carlinhos...'; // Atibuindo valor.
console.log(nome || 'Desconhecido'); // Imprime Carlinhos...

// Com o exemplo acima, verificamos se uma string estava vazia ou não.
