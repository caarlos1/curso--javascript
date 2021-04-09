const nums = [1, 2, 3, 4, 5]

// map gera um outro array sem alterar o original
let resultado = nums.map( e =>  e * 2 )

console.log(nums);
console.log(resultado);

const soma10 = e => e +10
const triplo = e => e * 3
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// Encadeando maps (muito útil).
console.log( nums.map(soma10).map(triplo).map(dinheiro) );