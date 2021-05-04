const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

const transformacaoTS = cb => {
    return tsProject.src()
        .pipe( tsProject() ) // esse pipe que transforma o ts em js
        .pipe( gulp.dest('build') )
}

module.exports.default = series(transformacaoTS)