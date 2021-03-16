// Ciando uma função construtura, com ela é possível ter métodos públicos (this) e privados.
// E depois podendo criar Objetos, baseados nelas.

function Carro (velocidadeMaxima = 200, delta = 5) {
    
    // Atributo privado
    let velocidadeAtual = 0;

    this.cor = "Vermelho"; // Criei esse atributo público.

    // Método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima)
            velocidadeAtual += delta;
        else
            velocidadeAtual = velocidadeMaxima;
    }

    // Metodo publico.
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro;

uno.acelerar();
console.log(uno.getVelocidadeAtual()); // 5

const ferrari = new Carro (350, 20);

ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof ferrari.cor);