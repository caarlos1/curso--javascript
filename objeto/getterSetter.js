// Usando o get e set no java script.
// Unico caso que o Java Script aceita sobre carga de métodos (métodos com mesmo nome).


const Sequencia = {
    _valor: 1, // Convenção (atributo "privado").

    // O get busca o valor com um tratamento de uma função.
    // O set trata com uma função antes de colcoar o valor no atributo.
    get valor() { return this._valor },
    set valor(valor) { 
        if(valor > this._valor)
            this._valor = valor;
    }
}

// Buscando com o get.
console.log(Sequencia.valor);

// Definindo com o set.
Sequencia.valor = 1000;
console.log(Sequencia.valor);
