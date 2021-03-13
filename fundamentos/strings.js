// Vamos trabalhar com strings!
nomeDev = "Carlos Roberto";

console.log(nomeDev); // Meu lindo nome.
console.log(nomeDev.charAt(6)); // .charAt retorna o caractére no índice 6. 
console.log(nomeDev.charCodeAt(6)); // Retorna o código na tabela ASCII.
console.log(nomeDev.indexOf('o')); // Retorna a primeira ocorrencia da letra "o".

console.log(nomeDev.substring(1)); // Imprime tudo depois do índice 1 -> arlos Roberto
console.log(nomeDev.substring(0, 3)); // Vai do 0 até 3 -> Car

console.log("Meu nome é ".concat(nomeDev).concat("!")); // .concat irá juntar as coisas.
// Resultado: Meu nome é Carlos Roberto!

console.log(nomeDev.replace("a", "4")); // Subistitui (apenas na impressão) o primeiro "a" para "4".
console.log(nomeDev); // A constante continua constante. ;)

// Esse é interessante.
console.log('Ana, Maria, Joana'.split(',')); 
// .split transforma o que está dividido por ',' em array.