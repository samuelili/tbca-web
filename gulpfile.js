/**
 * Created by Samuel on 12/29/2016.
 */

const gulp = require('gulp');

const path = require('path');
const paths = require('./tasks/paths');

require('./tasks/clean');
require('./tasks/copy');
require('./tasks/build');

// default
gulp.task('default', ['clean', 'copy', 'build'], function () { // create small express server
    var express = require('express');
    var app = express();
    app.use(express.static('dist'));

    var port = process.env.PORT || 3000;
    app.listen(port, function () {
        console.log("Listening on " + port);
    });
});

var browserSync = require('browser-sync').create();
gulp.task('dev', ['clean', 'copy', 'build'], function () { // watch

    browserSync.init({
        open: false,
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch(['src/**/*.*', 'static/**/*.*'], ['clean', 'copy', 'build', 'reload']);
});

gulp.task('reload', function() {
    browserSync.reload();
});