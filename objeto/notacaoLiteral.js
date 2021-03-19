// Criando objetos com a notação literal.

const a = 1;
const b = 2;
const c = 3;

// Dessa forma, criamos um objeto com os atributos, a, b e c.
const obj = { a, b, c }

console.log(obj); // Retorna: { a: 1, b: 2, c: 3 }

// Também podemos fazer assim:
const nomeAtributo = "nota";
const valorAtributo = 8.6;

const obj2 = {}
obj2[nomeAtributo] = valorAtributo;

console.log(obj2); // Retorna { nota: 8.6 }

// Criando funções dentro de um Objeto
const obj3 = {
    funcao1: function(){
        //...
    },
    //Nova forma:
    funcao2(){
        //...
    }
}

console.log(obj3);