const frutas = ["Banana", "Maçã", "Pera", "Uva"];

// Há outras estruturas melhores para tratar arrays.
for (let indice in frutas){
    console.log(frutas[indice]);
}

const Pessoa = {
    nome: "Carlos Roberto",
    idade: "22",
    altura: "1.79",
    peso: 70,
}

// Percorrendo atributos de um objeto com o for in:
for(let atributo in Pessoa){
    console.log(`${atributo} = ${Pessoa[atributo]}`);
}