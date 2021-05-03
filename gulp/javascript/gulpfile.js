const gulp = require('gulp')
const { series } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

const concatJS = (cb) => {
    return gulp.src('src/**/*.js')
        .pipe( babel({
            comments: false,
        }) )
        .pipe( uglify() )
        .on('err', console.log)
        .pipe( concat('codigo.min.js') )
        .pipe( gulp.dest('build') )
}

const fim = (cb) => {
    console.log('Fim do processo.');
    return cb()
}

module.exports.default = series(
    concatJS,
    // fim
)