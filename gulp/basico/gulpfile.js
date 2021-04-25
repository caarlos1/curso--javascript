// O gulp é baseado em funções (tarefas) que será executadas.
const gulp = require('gulp')
const { series, parallel } = require('gulp')


const antes1 = cb => {
    console.log('Tarefa Antes: 1');
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes: 2');
    return cb()
}

// As tarefas precisam de um callback padrão no final.
function copiar( cb ){
    // gulp.src([ 'pastaA/arquivo1.txt', 'pastaA/arquivo2.txt' ]) // Conjunto de arquivos.
    gulp.src('pastaA/**/*.txt') // Vai copiar todos os arquivos .txt de todas as pastas 
        // .pipe Faz transformação nos arquivos.
        .pipe( gulp.dest('pastaB') ) // .dest copia arquivos para destino.
    return cb()
}

const fim = cb => {
    console.log('Fim.');
    return cb()
}

// Exportando tarefa default em series.
module.exports.default = series(
    parallel(antes1, antes2), // Executando em paralelo.
    copiar,
    fim,
)