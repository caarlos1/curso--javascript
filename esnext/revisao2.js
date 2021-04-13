// Arrow Functions
const soma = (a, b) => a + b // Retorno explícito
// São funções anônimas.
console.log(soma(2, 5)); // 7

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // this sempre apontará para exports.
const lexico2 = lexico1.bind({}) // Não muda o this.
lexico1()
lexico2()

// Parametro Padrão
function log(texto = 'Node') {
    console.log(texto);
}

log() // Node
log('Abacate') // Abacate 

// Operador rest / spread
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log( total( 2, 3, 4, 5 ) ); // 14
