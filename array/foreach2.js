const forEach2 = function (callback){
    for (let i = 0 ; i < this.length ; i++) {
        callback(this[i], i, this)
    }
}

Array.prototype.forEach2 = forEach2

const aprovados = ['Agata', 'Aldo', 'Jose', 'Zezinho']

// Dentro do callback de forEach a primeira posição é o valor e segunda é o indice
aprovados.forEach2( function( nome, indice ){
    console.log(`${indice + 1} ) ${nome}`);
})