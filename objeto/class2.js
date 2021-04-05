class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) // Passo pro pai o sobrenome.
        this.profissao = profissao

    }
}

class Filho extends Pai {
    constructor(){
        super('Silva') // Passo pra cima!
    }
}

const filho = new Filho
console.log(filho);