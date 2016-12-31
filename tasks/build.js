/**
 * Created by Samuel on 12/29/2016.
 */

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');

const path = require('path');
const paths = require('./paths');

gulp.task('build', ['build:pug', 'build:sass']);

gulp.task('build:pug', function () {
    return gulp.src(path.join(paths.src, '**/[^_]*.pug'))
        .pipe(pug().on('error', function(e) {
            console.log(e);
        }))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('build:sass', function () {
    return gulp.src(path.join(paths.src, '**/*.scss'))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest(paths.dest));
});
