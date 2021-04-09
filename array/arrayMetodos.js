// Arrays constantes podem mudar de valor, mas a constante não pode ser sobrescrita
const pilotos = ['Macuin', 'Airton', 'Agênte da PRF']
pilotos.pop() // Remove o último elemento do array.
console.log(pilotos);

pilotos.push('Motoboy Maluco') // Adiciona um elemento no final.
console.log(pilotos);

pilotos.shift() // Remove o primeiro elemento do array.
console.log(pilotos);

pilotos.unshift('Motorista da Ambulância') // Adiciona um elemento na primeira posição.
console.log(pilotos);

// Adicionando com splice.
pilotos.splice(2, 0, 'Dono do TucTuc', 'Entregador de Pizza') // Adiciona no 2 e não exclui nenhum.
console.log(pilotos);

// Removendo com splice
pilotos.splice(3, 1) // A partir do incide 3, exclui um elemento.
console.log(pilotos);

// Slice retorna outro array.
const outrosPilotos = pilotos.slice(2) // A partir do indice 2
console.log(outrosPilotos);

const outrosPilotos2 = pilotos.slice(1, 3) // Cria um novo array do indice 1 até o 4, sem incluir o 4
console.log(outrosPilotos2);