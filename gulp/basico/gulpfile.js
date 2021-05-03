// O gulp é baseado em funções (tarefas) que serão executadas.
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

const copiar = cb => {
    gulp.src('pastaA/**/*.txt') // copia
        .pipe( gulp.dest('pastaB') ) // move
    return cb()
}

const fim = cb => {
    console.log('Fim.');
    return cb()
}

// Exportando tarefa default em series.
module.exports.default = series(
    parallel( antes1, antes2 ),
    copiar,
    fim,
)