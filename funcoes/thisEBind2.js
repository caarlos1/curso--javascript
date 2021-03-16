// Esse código é útil quando trabalhamos dentro de um método de um objeto.

function Pessoa() {
    this.idade = 0;
    const self = this; // Aqui eu resolvo o problema doself, indicando seu endereços.

    // Dispara a cada 1 segundo.
    setInterval(function(){
        self.idade++;
        console.log(self.idade);
    }, 1000);
}

new Pessoa;