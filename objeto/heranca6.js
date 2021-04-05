// Função construtora.
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Introdução a coisas coisadas.', 123)
const aula2 = new Aula('Segunda parte.', 456)

console.log(aula1, aula2)


// O que acontece quando é usado o operador "new"
function novo(f, ...params) {
    const obj = {} // Crio um objeto
    obj.__proto__ = f.prototype // Indico que o pai vai ser a função construtora.
    f.apply(obj, params) // Indico qual vai ser o "this" e os parametros.
    return obj // Retorno o objeto.
}

const aula3 = novo(Aula, 'Sou a terceira aula!', 789)
const aula4 = novo(Aula, 'Nu, olha só...', 012)

console.log(aula3, aula4)
