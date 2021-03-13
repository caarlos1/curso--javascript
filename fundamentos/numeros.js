// Definindo números.
const peso1 = 1.0;
const peso2 = 1.5;

// Que também podem ser definidos passando uma string com o construtor Number();
const peso3 = Number("2.0"); 

// Mas tente criar assim, não funcionará. 
let numeroString = "3.0"; // Isso é uma string com um número dentro.

// Caso queira verificar se algo é inteirou não.
// Number.isInteger verifica e retorna um bool.
console.log(Number.isInteger(peso1)); // 1.0 = true :)
console.log(Number.isInteger(peso2)); // 1.5 = false :(

// Caso verifique uma string com numero dentro.
console.log(Number.isInteger(numeroString)); // false.


// #############################
console.log(""); // Pular linha.


// Agora vamo para cálculos.
// Temos as notas dessas duas provas, certo?
const notaPorava1 = 8.96487;
const notaPorava2 = 6.25674;

// Então calculamos o total e a média.
const totalNota = notaPorava1 * peso1 + notaPorava2 * peso2;
const mediaNota = totalNota / (peso1 + peso2);

// E assim, teremos o resultado final das contas.
// Mas como formatar? Bom...
console.log("Sua média é: ");
console.log(mediaNota.toFixed(2)); // toFixed() fixa o numero de casas decimais impressas. 
console.log(mediaNota.toString()); // Já o toString(), converte em uma string.
console.log(mediaNota.toString(2)); // E agora?... Uma string com o númeoro em binário.

// Verificando o tipo de número.
console.log(typeof mediaNota);


// #############################
console.log(""); // Pular linha.


// E para fim de curiosidade...
// Uma soma de um numero com uma string.
misturando = peso1 + " " + numeroString;
console.log(typeof misturando); // O resultado é uma string.
console.log(misturando);
