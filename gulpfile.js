const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const path = require('path');

gulp.task('default', ['build:sass', 'watch']);

let componentStyles = ['sass/animation.scss',
    'sass/button.scss',
    'sass/intro.scss',
    'sass/misc.scss',
    'sass/navbar.scss',
    'sass/panel.scss',
    'sass/typography.scss'];

gulp.task('build:sass', function () {
    return gulp.src(componentStyles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', ['build:sass'], function () {
    gulp.watch('sass/*.scss', ['build:sass']);
});