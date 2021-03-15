// Agora vou mostrar uma coisa bem legal.
const nomeDev = "Carlinhos";
const juntim = "Eu sou o " + nomeDev; // Até agora concatenamos assim, certo?

console.log(juntim); // Resultado.

// Pois bem, só que, com template podemos fazer coisas legais como essas:
const template = `
Mensagem do Dev:
    E ai meu champs, meu nome é ${nomeDev}
    Minha por enquanto é ${20 + 2}..`;

// Usamos o ${nomeDev} para imprimir uma constante no texto.
// ${20 + 2} fez melhor, até somou... Doidera.

// Outra observação, também é possível usar funções.

// Resultado do temaplate.
console.log(template);