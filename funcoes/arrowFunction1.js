/*
    Arrow é bom para duas coisas: simplificar uma função e não alterar o "this".
*/

let funcaoNormal = function(a){
    return 2 * a;
}

// Sempre é uma função anonima que precisa ser armazenada em let ou const.
funcaoArrow = (a) => 2 * a;
funcaoArrow = a => 2 * a;

// Outros exemplos:
let oi = () => "Olá manim.";
let oie = _ => "Olá mew!";

console.log(oie());
console.log(oi());