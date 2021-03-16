// Exemplo da função arrow não influenciando no "this".

function Pessoa(){
    this.idade = 0;

    // Não muda o contexto de "this".
    setInterval( () => {
        this.idade++;
        console.log(this.idade);
    }, 2000)

}

new Pessoa;