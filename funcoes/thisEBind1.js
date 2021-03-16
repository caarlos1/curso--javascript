// Usando this dentro de um objeto.
const Pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao); // "this" aqui se refere ao objeto.
    }
}

const falar = Pessoa.falar; // para atribuir uma função em uma variavel, não use o (), ou a função será executada.
falar(); // undefined

// Nesse contexto, para que não haja problemas, preciso definir com .bind, quem será tratado como o "this".
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
const falarPessoa = Pessoa.falar.bind(Pessoa);
falarPessoa(); // Funciona 100% agora.
